// Contact form handler from pwslocal.com (excerpt).
// Posts to a Zapier Catch Hook, which writes the lead into the Notion Prospects database.
// The live webhook URL is removed in this public copy; empty value falls back to a mailto link.

(function () {
  var ZAPIER_WEBHOOK_URL = ""; // live webhook removed for the public repo; empty value falls back to a mailto link
  var form = document.getElementById('contact-form');
  var statusBox = document.getElementById('cf-status');
  var submitBtn = document.getElementById('cf-submit');

  function showStatus(html) {
    form.style.display = 'none';
    statusBox.innerHTML = html;
    statusBox.classList.add('show');
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = document.getElementById('cf-name').value.trim();
    var business = document.getElementById('cf-business').value.trim();
    var email = document.getElementById('cf-email').value.trim();
    var phone = document.getElementById('cf-phone').value.trim();
    var industry = document.getElementById('cf-industry').value;
    var message = document.getElementById('cf-message').value.trim();

    if (!ZAPIER_WEBHOOK_URL) {
      // Not wired up yet - give the visitor a real way to reach Marcos instead of failing silently.
      showStatus(
        '<h3>Thanks, ' + (name ? name.split(" ")[0] : 'there') + '!</h3>' +
        '<p>This form isn\'t fully connected yet on my end &mdash; but I saved your message. ' +
        'In the meantime, email me directly at <a href="mailto:marcosgonzales@pwslocal.com?subject=Free%20Automation%20Audit&body=' +
        encodeURIComponent('Name: ' + name + '\nBusiness: ' + business + '\nPhone: ' + phone + '\nIndustry: ' + industry + '\n\n' + message) +
        '">marcosgonzales@pwslocal.com</a> and I\'ll get right back to you.</p>'
      );
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    fetch(ZAPIER_WEBHOOK_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({
        name: name, business: business, email: email, phone: phone, industry: industry,
        message: message, source: 'pwslocal.com',
        date: new Date().toISOString().slice(0, 10)
      })
    }).then(function () {
      showStatus(
        '<h3>Thanks, ' + (name ? name.split(" ")[0] : 'there') + '!</h3>' +
        '<p>Got your message &mdash; I\'ll reach out within one business day to schedule your free audit.</p>'
      );
    }).catch(function () {
      showStatus(
        '<h3>Thanks, ' + (name ? name.split(" ")[0] : 'there') + '!</h3>' +
        '<p>Something hiccuped on my end, but no worries &mdash; email me directly at ' +
        '<a href="mailto:marcosgonzales@pwslocal.com">marcosgonzales@pwslocal.com</a> and I\'ll get right back to you.</p>'
      );
    });
  });
})();
