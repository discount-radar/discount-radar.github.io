document.addEventListener("DOMContentLoaded", function () {
  const trackButtonClick = (type) => {
    fbq('track', 'Lead', { button_type: type });
  };

  document.getElementById('whatsapp-btn')?.addEventListener('click', () => trackButtonClick('WhatsApp'));
  document.getElementById('telegram-btn')?.addEventListener('click', () => trackButtonClick('Telegram'));
});
