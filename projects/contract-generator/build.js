const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
  Table, TableRow, TableCell, WidthType, BorderStyle, ShadingType,
  Header, Footer, PageBreak, convertInchesToTwip,
  Numbering, LevelFormat, AlignmentType: AT,
} = require("docx");
const fs = require("fs");
const path = require("path");

// ---------- Engagement config ----------
// Usage: node build.js [config.json]   (defaults to example-config.json)
const cfgPath = process.argv[2] || path.join(__dirname, "example-config.json");
const CFG = JSON.parse(fs.readFileSync(cfgPath, "utf8"));
const hasRecurring = Boolean(CFG.recurring);

// ---------- Brand module ----------
const BRAND = {
  navy: "001E47", blue: "2F8DD2", orange: "FE6701", gray: "5A6472",
  bodyFont: "Times New Roman",
  headingFont: "Poppins",
};
function docStyles() {
  return { default: { document: { run: { font: BRAND.bodyFont, size: 22 } } } };
}
const U = "________________";   // wide blank, body text
const US = "__________";        // short blank, table cells

function letterhead(titleText) {
  return [
    new Paragraph({
      border: { bottom: { color: BRAND.orange, space: 4, style: BorderStyle.SINGLE, size: 18 } },
      spacing: { after: 200 },
      children: [
        new TextRun({ text: "PEAK WORKFLOW SOLUTIONS", font: BRAND.headingFont, bold: true, size: 30, color: BRAND.navy }),
      ],
    }),
    new Paragraph({
      spacing: { after: 300 },
      children: [
        new TextRun({ text: titleText, font: BRAND.headingFont, bold: true, size: 40, color: BRAND.navy }),
      ],
    }),
  ];
}

function footer() {
  return new Footer({
    children: [
      new Paragraph({
        border: { top: { color: BRAND.blue, space: 4, style: BorderStyle.SINGLE, size: 6 } },
        alignment: AlignmentType.CENTER,
        children: [
          new TextRun({ text: "Peak Workflow Solutions, LLC  |  Selah, WA  |  pwslocal.com", size: 16, color: BRAND.gray }),
        ],
      }),
    ],
  });
}

function h1(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 300, after: 150 },
    children: [new TextRun({ text, font: BRAND.headingFont, bold: true, color: BRAND.navy, size: 26 })],
  });
}
function h2(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 200, after: 100 },
    children: [new TextRun({ text, font: BRAND.headingFont, bold: true, color: BRAND.navy, size: 22 })],
  });
}
function p(text, opts = {}) {
  return new Paragraph({ spacing: { after: 160 }, children: [new TextRun({ text, ...opts })] });
}
function pRuns(runs, opts = {}) {
  return new Paragraph({ spacing: { after: 160 }, ...opts, children: runs });
}

// ---------- Table cell helper ----------
function cell(text, { width, bold = false, header = false, columnSpan = 1, alignment } = {}) {
  return new TableCell({
    width: { size: width, type: WidthType.DXA },
    columnSpan,
    shading: header ? { type: ShadingType.CLEAR, fill: "FFFFFF" } : undefined,
    margins: { top: 80, bottom: 80, left: 100, right: 100 },
    children: [
      new Paragraph({
        alignment: alignment || AlignmentType.LEFT,
        children: [new TextRun({ text, bold: bold || header, size: 20 })],
      }),
    ],
  });
}

// ---------- Section numbering ----------
const sectionOrder = [
  "services", "term", "fees", ...(hasRecurring ? ["recurring"] : []), "responsibilities", "access",
  "ip", "confidentiality", "warranty", "liability",
  "independent", "termination", "governing", "entire",
];
const secTitle = {
  services: "Services and Scope of Work",
  term: "Term",
  fees: "Fees and Payment",
  recurring: "Recurring Services, Autopay, and Cancellation",
  responsibilities: "Client Responsibilities",
  access: "Access to Client Systems and Data",
  ip: "Intellectual Property and Resale Rights",
  confidentiality: "Confidentiality",
  warranty: "Warranty and Disclaimer",
  liability: "Limitation of Liability",
  independent: "Independent Contractor",
  termination: "Termination",
  governing: "Governing Law",
  entire: "Entire Agreement and Amendments",
};
const secNum = {};
sectionOrder.forEach((k, i) => (secNum[k] = i + 1));

// ---------- Numbering config (each block gets its own reference) ----------
const numbering = {
  config: [
    { reference: "clausesFees", levels: [{ level: 0, format: LevelFormat.DECIMAL, text: `${secNum.fees}.%1`, alignment: AlignmentType.START, style: { paragraph: { indent: { left: convertInchesToTwip(0.35), hanging: convertInchesToTwip(0.35) } } } }] },
    { reference: "clausesRecurring", levels: [{ level: 0, format: LevelFormat.DECIMAL, text: `${secNum.recurring || 0}.%1`, alignment: AlignmentType.START, style: { paragraph: { indent: { left: convertInchesToTwip(0.35), hanging: convertInchesToTwip(0.35) } } } }] },
    { reference: "clausesIP", levels: [{ level: 0, format: LevelFormat.DECIMAL, text: `${secNum.ip}.%1`, alignment: AlignmentType.START, style: { paragraph: { indent: { left: convertInchesToTwip(0.35), hanging: convertInchesToTwip(0.35) } } } }] },
  ],
};

// ---------- Document content ----------
const children = [];

// Letterhead
children.push(...letterhead(CFG.agreementTitle));

// Parties block
children.push(
  pRuns([
    new TextRun({ text: `This ${CFG.agreementTitle} ("Agreement") is entered into by and between:`, }),
  ]),
  pRuns([
    new TextRun({ text: "Provider: ", bold: true }),
    new TextRun({ text: "Peak Workflow Solutions, LLC, Selah, Washington (\"Provider\")" }),
  ]),
  pRuns([
    new TextRun({ text: "Client: ", bold: true }),
    new TextRun({ text: `${CFG.client.legalName}${CFG.client.dba ? ", d/b/a " + CFG.client.dba : ""} ("Client")` }),
  ]),
  pRuns([
    new TextRun({ text: "Effective Date: ", bold: true }),
    new TextRun({ text: U }),
  ]),
  pRuns([
    new TextRun({ text: "Engagement: ", bold: true }),
    new TextRun({ text: CFG.engagement }),
  ]),
);

// 1. Services and Scope of Work
children.push(h1(`${secNum.services}. ${secTitle.services}`));
children.push(p("Provider will perform the services described in Exhibit A (\"Scope of Work\"), attached to and made part of this Agreement. The Scope of Work is based on information Client has provided to Provider as of the Effective Date."));

// 2. Term
children.push(h1(`${secNum.term}. ${secTitle.term}`));
children.push(p("This Agreement begins on the Effective Date and continues until the Scope of Work is completed and accepted by Client, unless earlier terminated as provided in this Agreement."));

// 3. Fees and Payment
children.push(h1(`${secNum.fees}. ${secTitle.fees}`));
children.push(new Paragraph({
  numbering: { reference: "clausesFees", level: 0 },
  spacing: { after: 140 },
  children: [new TextRun({ text: "Fee. The total fee for the Scope of Work is the Total Initial Build Price stated in Exhibit A." })],
}));
children.push(new Paragraph({
  numbering: { reference: "clausesFees", level: 0 },
  spacing: { after: 140 },
  children: [new TextRun({ text: "Payment Schedule. 20% of the Total Initial Build Price is due upon signing this Agreement. The remaining 80% is due upon completion of the Scope of Work." })],
}));
children.push(new Paragraph({
  numbering: { reference: "clausesFees", level: 0 },
  spacing: { after: 140 },
  children: [new TextRun({ text: "Additional Scope. Any work requested by Client beyond the Scope of Work described in Exhibit A will be scoped and priced under a separate, new agreement." })],
}));
children.push(new Paragraph({
  numbering: { reference: "clausesFees", level: 0 },
  spacing: { after: 140 },
  children: [new TextRun({ text: `Invoicing. Provider will invoice Client for amounts due under this Agreement. Payment is due within ${U} days of the invoice date.` })],
}));
children.push(new Paragraph({
  numbering: { reference: "clausesFees", level: 0 },
  spacing: { after: 140 },
  children: [new TextRun({ text: `Late Payment. Amounts not paid when due may be subject to a late fee of ${U}% per month on the outstanding balance.` })],
}));

// Recurring section, only when the engagement has a retainer component
if (hasRecurring) {
  const r = CFG.recurring;
  children.push(h1(`${secNum.recurring}. ${secTitle.recurring}`));
  [
    `What's Included. ${r.included}`,
    `Response Time. Provider will respond to reported issues within ${r.responseTime || U}.`,
    "Autopay Authorization. Client authorizes Provider to charge the monthly fee stated in Exhibit A to Client's payment method on file each month.",
    "Cancellation. Client may cancel recurring services with 30 days' written notice. The monthly fee remains due during the notice period.",
  ].forEach((t) => children.push(new Paragraph({ numbering: { reference: "clausesRecurring", level: 0 }, spacing: { after: 140 }, children: [new TextRun({ text: t })] })));
}

// 4. Client Responsibilities
children.push(h1(`${secNum.responsibilities}. ${secTitle.responsibilities}`));
children.push(p("Client will provide timely feedback, content, and approvals reasonably requested by Provider, and will provide accurate information about Client's business needed to perform the Scope of Work. Delays in Client's responses may delay the timeline stated in Exhibit A."));

// 5. Access to Client Systems and Data
children.push(h1(`${secNum.access}. ${secTitle.access}`));
children.push(p("If the Scope of Work requires Provider to access Client's own accounts, systems, or files, the specific systems, the access granted, and the purpose of that access are described in the accompanying Client Consent & Access Authorization, attached as Exhibit B. Provider will use access granted under Exhibit B solely to perform the Scope of Work."));

// 6. Intellectual Property and Resale Rights
children.push(h1(`${secNum.ip}. ${secTitle.ip}`));
children.push(new Paragraph({
  numbering: { reference: "clausesIP", level: 0 },
  spacing: { after: 140 },
  children: [new TextRun({ text: "Client-Specific Outputs. Upon full payment of the Total Initial Build Price, Provider assigns to Client all right, title, and interest in the website content, design, and configuration created specifically for Client under this Agreement." })],
}));
children.push(new Paragraph({
  numbering: { reference: "clausesIP", level: 0 },
  spacing: { after: 140 },
  children: [new TextRun({ text: "Provider Tools. Provider retains ownership of any general-purpose templates, frameworks, scripts, or tools used to build Client's deliverables, and may reuse them for other engagements." })],
}));
children.push(new Paragraph({
  numbering: { reference: "clausesIP", level: 0 },
  spacing: { after: 140 },
  children: [new TextRun({ text: "Testimonial. Client agrees to provide Provider with a written testimonial and a Google review of Provider's services, for Provider's use in its own marketing materials." })],
}));
children.push(new Paragraph({
  numbering: { reference: "clausesIP", level: 0 },
  spacing: { after: 140 },
  children: [new TextRun({ text: "Resale Rights. No resale rights are granted to Provider under this Agreement." })],
}));

// 7. Confidentiality
children.push(h1(`${secNum.confidentiality}. ${secTitle.confidentiality}`));
children.push(p("Each party will keep confidential any non-public information disclosed by the other party in connection with this Agreement, and will not disclose it to third parties except as needed to perform this Agreement or as required by law."));

// 8. Warranty and Disclaimer
children.push(h1(`${secNum.warranty}. ${secTitle.warranty}`));
children.push(p("Provider will perform the Scope of Work in a professional and workmanlike manner. Except as expressly stated in this Agreement, the deliverables are provided \"as is,\" without any other warranty, express or implied."));

// 9. Limitation of Liability
children.push(h1(`${secNum.liability}. ${secTitle.liability}`));
children.push(p("Provider's total liability under this Agreement will not exceed the total fees actually paid by Client under this Agreement. Neither party will be liable for indirect, incidental, or consequential damages."));

// 10. Independent Contractor
children.push(h1(`${secNum.independent}. ${secTitle.independent}`));
children.push(p("Provider is an independent contractor, not an employee, partner, or agent of Client. Nothing in this Agreement creates a joint venture or partnership between the parties."));

// 11. Termination
children.push(h1(`${secNum.termination}. ${secTitle.termination}`));
children.push(p(`Either party may terminate this Agreement upon ${U} days' written notice. Client remains responsible for payment for all work completed through the effective date of termination.`));

// 12. Governing Law
children.push(h1(`${secNum.governing}. ${secTitle.governing}`));
children.push(p("This Agreement is governed by the laws of the State of Washington, without regard to its conflict-of-laws principles."));

// 13. Entire Agreement and Amendments
children.push(h1(`${secNum.entire}. ${secTitle.entire}`));
children.push(p("This Agreement, including its Exhibits, is the entire agreement between the parties regarding the Scope of Work and supersedes any prior discussions. It may only be amended in writing signed by both parties."));

// Page break before Exhibit A
children.push(new Paragraph({ children: [new PageBreak()] }));

// Exhibit A
children.push(...letterhead("Exhibit A — Scope of Work and Pricing"));

children.push(h2("Automation Builds"));
const money = (n) => "$" + Number(n).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
// Total is summed only when every line item has a real price; otherwise it stays a blank fill-line.
const total = CFG.lineItems.every((li) => li.price != null)
  ? CFG.lineItems.reduce((a, li) => a + Number(li.price), 0)
  : null;
{
  const colWidths = [2400, 4200, 1600, 1500];
  const tableWidth = colWidths.reduce((a, b) => a + b, 0);
  children.push(new Table({
    width: { size: tableWidth, type: WidthType.DXA },
    columnWidths: colWidths,
    rows: [
      new TableRow({
        tableHeader: true,
        children: [
          cell("Automation", { width: colWidths[0], header: true }),
          cell("Description", { width: colWidths[1], header: true }),
          cell("Timeline", { width: colWidths[2], header: true }),
          cell("Initial Build Price", { width: colWidths[3], header: true }),
        ],
      }),
      ...CFG.lineItems.map((li) => new TableRow({
        children: [
          cell(li.name, { width: colWidths[0] }),
          cell(li.description, { width: colWidths[1] }),
          cell(li.timeline || US, { width: colWidths[2] }),
          cell(li.price != null ? money(li.price) : US, { width: colWidths[3] }),
        ],
      })),
      new TableRow({
        children: [
          cell("Total Initial Build Price", { width: colWidths[0] + colWidths[1] + colWidths[2], bold: true, columnSpan: 3 }),
          cell(total != null ? money(total) : US, { width: colWidths[3], bold: true }),
        ],
      }),
    ],
  }));
}

children.push(new Paragraph({ spacing: { before: 200 }, children: [] }));
children.push(h2("Monthly Retainer / Maintenance"));
if (hasRecurring) {
  const cw = [3000, 3000, 2700];
  children.push(new Table({
    width: { size: cw.reduce((a, b) => a + b, 0), type: WidthType.DXA },
    columnWidths: cw,
    rows: [
      new TableRow({ tableHeader: true, children: [cell("Frequency", { width: cw[0], header: true }), cell("Fee", { width: cw[1], header: true }), cell("Autopay", { width: cw[2], header: true })] }),
      new TableRow({ children: [cell("Monthly", { width: cw[0] }), cell(CFG.recurring.monthlyFee != null ? money(CFG.recurring.monthlyFee) : US, { width: cw[1] }), cell(`☐ Authorized (Section ${secNum.recurring}.3)`, { width: cw[2] })] }),
    ],
  }));
} else {
  children.push(p("No recurring maintenance or retainer service applies to this engagement."));
}

// Page break before Exhibit B
children.push(new Paragraph({ children: [new PageBreak()] }));

// Exhibit B — Consent & Access Authorization
children.push(...letterhead("Exhibit B — Client Consent & Access Authorization"));
children.push(p("Client authorizes Provider to access the following systems and accounts solely to perform the Scope of Work described in Exhibit A. Specific items will be confirmed with Client before access is requested."));

{
  const colWidths = [2400, 2400, 1800, 2100];
  const tableWidth = colWidths.reduce((a, b) => a + b, 0);
  const rows = [
    new TableRow({
      tableHeader: true,
      children: [
        cell("System / Account", { width: colWidths[0], header: true }),
        cell("Specific Item", { width: colWidths[1], header: true }),
        cell("Access Granted", { width: colWidths[2], header: true }),
        cell("Purpose", { width: colWidths[3], header: true }),
      ],
    }),
    ...CFG.accessItems.map((a) => new TableRow({
      children: [
        cell(a.system, { width: colWidths[0] }),
        cell(a.item || US, { width: colWidths[1] }),
        cell("☐ Authorized", { width: colWidths[2] }),
        cell(a.purpose, { width: colWidths[3] }),
      ],
    })),
  ];
  children.push(new Table({ width: { size: tableWidth, type: WidthType.DXA }, columnWidths: colWidths, rows }));
}

children.push(new Paragraph({ spacing: { before: 300 }, children: [] }));

// Signatures
children.push(new Paragraph({ children: [new PageBreak()] }));
children.push(...letterhead("Signatures"));
children.push(p("By signing below, each party agrees to the terms of this Agreement, including Exhibit A and Exhibit B."));

function sigBlock(label) {
  return [
    new Paragraph({ spacing: { before: 400, after: 60 }, children: [new TextRun({ text: label, bold: true })] }),
    new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "Signature: " + U })] }),
    new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "Name: " + U })] }),
    new Paragraph({ spacing: { after: 300 }, children: [new TextRun({ text: "Date: " + U })] }),
  ];
}
children.push(...sigBlock("Provider — Peak Workflow Solutions, LLC"));
children.push(...sigBlock(`Client — ${CFG.client.legalName}`));

// ---------- Build document ----------
const doc = new Document({
  ...docStyles(),
  numbering,
  sections: [
    {
      properties: {
        page: {
          size: { width: 12240, height: 15840 },
          margin: { top: 1080, bottom: 1080, left: 1080, right: 1080 },
        },
      },
      footers: { default: footer() },
      children,
    },
  ],
});

Packer.toBuffer(doc).then((buf) => {
  fs.writeFileSync(CFG.outputFile || "Services_Agreement.docx", buf);
  console.log("Written.");
});
