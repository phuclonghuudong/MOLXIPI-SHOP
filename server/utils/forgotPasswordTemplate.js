const forgotPasswordTemplate = ({ name, otp }) => {
  return `
      <div>
          <p>Xin chào <span style="font-weight:bold">${name}</span>,</p>
          <p> Bạn yêu cầu đặt lại mật khẩu. Vui lòng sử dụng mã OTP sau để đặt lại mật khẩu của bạn:</p>
          <div style="background-color:yellow; font-size:20px; padding: 25px; text-align:center; font-weight:800">
              ${otp}
          </div>
          <p>OTP này chỉ có hiệu lực trong 1 giờ. Nhập OTP này vào trang web PHPMol để tiến hành đặt lại mật khẩu của bạn.</p>
          <p style="font-weight:bold; color: red">Vui lòng không cung cấp mã OTP cho người khác để tránh ảnh hưởng đến tài khoản sau này.</p>
          </br>
          <p>Xin Cảm ơn.</p>
          <p>PHPMol.</p>
      </div>
      `;
};

module.exports = forgotPasswordTemplate;
