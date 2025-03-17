const verifyEmailTemplate = ({ name, url, email }) => {
  return `
      <p>Xin chào <span style="font-weight: bold">${name}</span>,</p>
      <p>Chúc mừng! Bạn đã đăng ký thành công tài khoản tại PHPMol.</p>
      <p>Dưới đây là thông tin tài khoản của bạn:</p>
            <p>Tên đăng nhập: ${email}</p>
        <p>Để bắt đầu sử dụng dịch vụ của chúng tôi, vui lòng đăng nhập tại:</p>
      <a href=${url} >
          <button style="color:black; background-color:orange; margin-top: 10px; padding:20px; display:block; font-size:20px; width:100%">
          Verify Email</button>
      </a>
      <p>Nếu bạn có bất kỳ câu hỏi nào, hãy liên hệ với chúng tôi qua  info@molxipi.com hoặc 0987654321.</p>

        <p>Cảm ơn bạn đã tin tưởng sử dụng dịch vụ của chúng tôi!</p>
        <p>Trân trọng,</p>
        <p>Đội ngũ PHPMOL.</p>
      `;
};
module.exports = verifyEmailTemplate;
