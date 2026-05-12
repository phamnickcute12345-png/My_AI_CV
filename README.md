# My_AI_CV

Trang hồ sơ React + Tailwind được xây dựng bằng Vite.

## Cài đặt cục bộ

1. Cài đặt phụ thuộc:
   ```bash
   npm install
   ```
2. Chạy máy chủ phát triển:
   ```bash
   npm run dev
   ```
3. Mở URL được hiển thị trong terminal.
4. các công cụ AI đã dùng

4.1 ChatGPT
   - dùng Chat GPT để tạo prompt và dùng chính prompt đó để đưa vào trong Codespace để tạo ra sản phẩm trước.
   - ví dụ prompt: Hãy đóng vai là một Senior Frontend Developer + UI/UX Designer + Creative Director. Nhiệm vụ của bạn là hãy viết 1 prompt để tạo ra 1 bản thiết kế và tạo ra một website portfolio cá nhân hiện đại, cao cấp, tối ưu trải nghiệm người dùng (UX) và thẩm mỹ (UI) với đầy đủ hiệu ứng và chức năng.
   - sau khi ra kết quả dùng chính prompt đó nhớ chính ChatGPT để viết code cho mình sau đó đưa vào codespace của github.
   - Chat GPT còn có thể dùng tạo hình ảnh để đưa vào portfolio của mình như tạo hình ảnh sản phẩm để đưa vào
   - Ví dụ prompt: Mockup bao bì thức ăn sạch cao cấp, thương hiệu thực phẩm organic thân thiện môi trường, thiết kế hiện đại tối giản, bao bì giấy kraft tái chế, typography sạch sẽ tinh tế, bảng màu xanh lá và be tự nhiên, minh họa rau củ tươi, ánh sáng tự nhiên mềm mại, mockup 3D chân thực, nhận diện thương hiệu organic sang trọng, chất liệu phân hủy sinh học, phong cách sống healthy, bao bì chuẩn siêu thị cao cấp, trình bày sản phẩm chuyên nghiệp, bề mặt nhám matte, đổ bóng mềm, phong cách Scandinavian hiện đại, render studio siêu chân thực, ultra detailed, photorealistic, chất lượng 8K.

Bao gồm:
- Túi giấy đựng thực phẩm organic
- Hộp đựng rau củ sạch
- Nhãn dán trên hũ thủy tinh
- Thiết kế logo organic
- Slogan: “Sạch trong từng bữa ăn”
- Rau củ và thảo mộc tươi xung quanh sản phẩm
- Bố cục branding cao cấp
- Phong cách thị trường organic hiện đại Việt Nam

Góc máy: chụp phối cảnh 3/4
Background: studio màu be nhạt tối giản
Phong cách: hiện đại, sạch sẽ, sang trọng, bền vững

4.2 Github Copilot (Free)
   - nếu chúng ta dùng Chat GPT dùng để sửa bản thiết kế bằng các đoạn code phân mảnh, khi đưa vào Github sẽ bị nhiều lỗi vặt. Do đó đã dùng 1 con AI có sẵn bên trong Github đó là Github Copilot. Nó có thể chỉnh sửa, thêm, xóa và sửa các phần code khó hiểu bên trong 1 cách nhanh gọn và ít lỗi.
   - ví dụ ta muốn đổi các dòng chữ ta chỉ cần ra lệnh: Đổi dòng chữ:"dòng chữ 1" thành "dòng chữ 2". hoặc bạn cũng có thể đổi ảnh bằng cách copy đường dẫn đến ảnh của bạn sau đó ra lệnh cho nó: hãy đổi ảnh ở vị trí A thành: https/::......

4.3 Copilot
   - khi tôi muốn miêu tả về tôi hay các sản phẩm của tôi thì tôi thường dùng Copilot vì nó làm việc về mảng soản thảo tốt hơn Chat GPT 1 cách chi tiết và có hệ thống hơn.
   - ví dụ miêu tả ngắn về sản phẩm của tôi, tôi sẽ tải ảnh sản phẩm lên và viết prompt là:" bạn là 1 người diễn thuyết chuyên nghiệp, hãy trình bày sản phẩm này 1 cách đầy đủ và chi tiết các điểm mạnh của nó thành 4 đến 5 dòng."\

5. tóm tắt quá trình chỉnh sửa sản phẩm AI
- sau khi codespace đưa ra sản phẩm:
   - đầu tiên chúng ta sẽ phải sửa lại các đoạn kí tự bị sai hoặc thay đổi các hình ảnh
   - chỉnh sửa chính tả cũng như các lỗi sai trên hình ảnh và trên sản phẩm Portfolio
   - sau đó chỉnh sửa các component, các nút thêm hiệu ứng và màu sắc.
   - sử dụng prompt ra lệnh nó cho AI như Chat GPT để Góp ý, sửa đổi và tạo prompt để đưa vào Github Copilot
   - sửa dần chúng ta sẽ có được thành quả mong muốn nhưng theo như tôi được biết thì việc sửa đổi sẽ bị giới hạn tại Github Copilot không là 1 sản phẩm Free, nó có số lượt sửa đổi
  
6. ý tưởng thiết kế
- Phần giới thiệu: Họ tên, vai trò nghề nghiệp, câu mô tả ngắn về cá nhân bản thân;
- Phần giới thiệu bản thân: Thông tin cá nhân, định hướng nghề nghiệp tương lai và các kỹ năng chính;
- Phần dự án (Projects):
   - Tên dự án.
   - Mô tả ngắn về dự án đó.
   - Hình ảnh minh họa (có sử dụng AI: Chat GPT);
   - Vai trò của sinh viên trong dự án;
- Phần thể hiện kỹ năng hoặc kinh nghiệm trực quan khác;
- Phần liên hệ (Contact): thông tin liên hệ và lời kêu gọi hành động rõ ràng.
