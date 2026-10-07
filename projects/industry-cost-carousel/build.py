import re

with open("./template.html") as f:
    template = f.read()

industries = [
    dict(
        n=1,
        tag="Tradesmen & General Contractors",
        headline="What's a missed bathroom-remodel call actually costing you?",
        job_label="Average bathroom remodel job",
        source="Source: Angi, 2026 national average",
        job_value="$12,149",
        calls="2 calls a week",
        weekly="$4,860", monthly="$21,042", yearly="$252,699",
        fname="post19_1_general_contractor.html",
    ),
    dict(
        n=2,
        tag="Remodeling Contractors",
        headline="What's a missed kitchen-remodel call actually costing you?",
        job_label="Average kitchen remodel job",
        source="Source: Angi, 2026 national average",
        job_value="$26,942",
        calls="1 call a week",
        weekly="$5,388", monthly="$23,332", yearly="$280,197",
        fname="post19_2_remodeling_contractor.html",
    ),
    dict(
        n=3,
        tag="Wedding & Event Venues",
        headline="What's a missed booking inquiry actually costing you?",
        job_label="Average wedding venue booking",
        source="Source: Zola, 2026 national average",
        job_value="$8,573",
        calls="3 calls a week",
        weekly="$5,144", monthly="$22,273", yearly="$267,478",
        fname="post19_3_venue_operator.html",
    ),
    dict(
        n=4,
        tag="Real Estate Agents",
        headline="What's a missed buyer or seller call actually costing you?",
        job_label="Average agent-side commission",
        source="Source: RealEstateWitch, 2026, median-priced home",
        job_value="$10,261",
        calls="3 calls a week",
        weekly="$6,157", monthly="$26,658", yearly="$320,143",
        fname="post19_4_real_estate.html",
    ),
    dict(
        n=5,
        tag="Cleaning Services",
        headline="What's a missed booking call actually costing you?",
        job_label="Average cleaning visit",
        source="Source: HomeGuide, 2026 national average",
        job_value="$200",
        calls="8 calls a week",
        weekly="$320", monthly="$1,386", yearly="$16,640",
        fname="post19_5_cleaning_services.html",
    ),
]

for d in industries:
    html = template
    html = html.replace("{{SLIDE_NUM}}", str(d["n"]))
    html = html.replace("{{TAG}}", d["tag"])
    html = html.replace("{{HEADLINE}}", d["headline"])
    html = html.replace("{{JOB_LABEL}}", d["job_label"])
    html = html.replace("{{SOURCE}}", d["source"])
    html = html.replace("{{JOB_VALUE}}", d["job_value"])
    html = html.replace("{{CALLS}}", d["calls"])
    html = html.replace("{{WEEKLY}}", d["weekly"])
    html = html.replace("{{MONTHLY}}", d["monthly"])
    html = html.replace("{{YEARLY}}", d["yearly"])
    out_path = f"./{d['fname']}"
    with open(out_path, "w") as f:
        f.write(html)
    print(out_path)
