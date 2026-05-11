export default function PortfolioWebsite() {
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden scroll-smooth font-sans">
      {/* Nền hoạt hình */}
      <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,120,80,0.08),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(255,40,40,0.05),_transparent_35%),linear-gradient(180deg,_rgba(10,10,14,0.94),_rgba(0,0,0,0.75))]"></div>

        <div className="absolute -left-32 top-16 h-[360px] w-[360px] rounded-full bg-red-500/15 blur-[120px]"></div>
        <div className="absolute right-0 top-24 h-[280px] w-[280px] rounded-full bg-orange-500/15 blur-[110px]"></div>

        <div className="absolute left-12 top-28 w-[240px] h-[240px] rounded-[48px] bg-white/5 border border-white/10 backdrop-blur-3xl shadow-[0_0_100px_rgba(255,120,0,0.2)] transform-gpu translate-z-0"></div>
        <div className="absolute left-24 top-56 w-[140px] h-[140px] rounded-[36px] border border-orange-400/15 bg-orange-500/5 blur-2xl shadow-[0_0_60px_rgba(255,140,0,0.18)]"></div>
        <div className="absolute left-6 top-[420px] w-[100px] h-[100px] rounded-[28px] bg-white/6 border border-white/10 backdrop-blur-xl shadow-[0_0_50px_rgba(255,80,0,0.15)]"></div>

        <div className="absolute left-14 top-24 h-[1px] w-[220px] bg-gradient-to-r from-[#ff6a2d]/70 via-transparent to-transparent"></div>
        <div className="absolute left-10 top-64 h-[280px] w-[1px] bg-gradient-to-b from-[#ff6a2d]/40 to-transparent"></div>
        <div className="absolute left-40 top-10 h-[1px] w-[160px] bg-gradient-to-r from-[#ff8b3d]/30 via-transparent to-transparent"></div>
        <div className="absolute left-40 top-80 h-[220px] w-[1px] bg-gradient-to-b from-[#ff8b3d]/30 to-transparent"></div>

        <div className="absolute left-12 top-32 w-[100px] h-[100px] rounded-full energy-ring energy-1"></div>
        <div className="absolute left-24 top-72 w-[76px] h-[76px] rounded-full energy-ring energy-2"></div>
        <div className="absolute left-8 top-[23rem] w-[120px] h-[120px] rounded-full energy-ring energy-3"></div>
        <div className="absolute left-20 top-[28.5rem] w-[90px] h-[90px] rounded-full energy-ring energy-4"></div>

        <div className="absolute left-16 top-[10rem] w-[12px] h-[12px] rounded-full glow-point glow-1"></div>
        <div className="absolute left-32 top-[13rem] w-[10px] h-[10px] rounded-full glow-point glow-2"></div>
        <div className="absolute left-6 top-[17rem] w-[8px] h-[8px] rounded-full glow-point glow-3"></div>
        <div className="absolute left-28 top-[21rem] w-[14px] h-[14px] rounded-full glow-point glow-4"></div>

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-12 h-[250px] w-[1px] bg-gradient-to-b from-[#ff7a30]/40 to-transparent"></div>
          <div className="absolute left-[18%] top-20 h-[1px] w-[140px] bg-gradient-to-r from-[#ff7a30]/35 via-transparent to-transparent"></div>
          <div className="absolute left-[12%] top-96 h-[1px] w-[80px] bg-gradient-to-r from-[#ff7a30]/30 via-transparent to-transparent"></div>
          <div className="absolute left-[22%] top-[22rem] h-[1px] w-[100px] bg-gradient-to-r from-[#ff4e1f]/25 via-transparent to-transparent"></div>

          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>
        </div>
      </div>

      {/* Thanh điều hướng */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold tracking-widest bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
            PORTFOLIO
          </h1>

          <ul className="hidden md:flex gap-8 text-sm uppercase tracking-widest">
            {[
              { label: 'Trang chủ', href: '#home' },
              { label: 'Giới thiệu', href: '#about' },
              { label: 'Kỹ năng', href: '#skills' },
              { label: 'Dự án', href: '#projects' },
              { label: 'Kinh nghiệm', href: '#experience' },
              { label: 'Liên hệ', href: '#contact' },
            ].map((item) => (
              <li key={item.label}>
                <a href={item.href} className="hover:text-orange-400 transition duration-300">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Phần mở đầu */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-red-500/20 bg-white/5 backdrop-blur-xl">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-ping"></div>
              <span className="text-sm tracking-wider text-gray-300">Có thể nhận việc thuê ngoài</span>
            </div>

            <div className="space-y-4">
              <h2 className="text-5xl md:text-7xl font-black leading-tight">
                Sáng tạo
                <span className="block bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
                  Frontend
                </span>
                Nhà phát triển
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                Tôi tạo nên những thiết kế đồ họa hiện đại với bố cục sáng tạo, màu sắc ấn tượng, hình ảnh cuốn hút và trải nghiệm thị giác chuyên nghiệp.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="px-8 py-4 rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 hover:scale-105 transition duration-300 shadow-[0_0_40px_rgba(255,80,0,0.4)] font-semibold inline-block text-center">
                Xem Dự án
              </a>

              <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition duration-300">
                Tải CV
              </button>
            </div>
          </div>

          {/* Hero Card */}
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-400 blur-3xl opacity-20 rounded-full"></div>

            <div className="relative w-[350px] h-[450px] rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl overflow-hidden hover:rotate-2 hover:scale-105 transition duration-500 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                  alt="ảnh đại diện"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                <div className="absolute bottom-0 p-6 space-y-2">
                  <h3 className="text-2xl font-bold">Thành Phạm</h3>
                <p className="text-gray-300">Nhà Thiết Kế Đồ Họa/ Graphic design</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Giới thiệu */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm tracking-widest uppercase">
              Về Tôi
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">Thiết kế trải nghiệm thị giác sáng tạo cho đồ họa hiện đại.</h2>

            <p className="text-gray-400 leading-relaxed text-lg">
              Tôi chuyên tạo nên các thiết kế đồ họa cao cấp kết hợp thẩm mỹ, bố cục, màu sắc và sáng tạo hình ảnh. Mục tiêu của tôi là mang đến những trải nghiệm thị giác đáng nhớ.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
                <h3 className="text-4xl font-bold text-orange-400">3+</h3>
                <p className="text-gray-400 mt-2">Năm kinh nghiệm</p>
              </div>

              <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
                <h3 className="text-4xl font-bold text-red-400">40+</h3>
                <p className="text-gray-400 mt-2">Dự án hoàn thành</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-orange-500/20 blur-3xl rounded-full"></div>

            <div className="relative rounded-[40px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                alt="workspace"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Kỹ năng */}
      <section id="skills" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm tracking-widest uppercase">
              Kỹ năng
            </div>

            <h2 className="text-5xl font-bold">Chuyên Môn Kỹ Thuật</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'React', value: '95%' },
              { name: 'UI/UX', value: '90%' },
              { name: 'Animation', value: '88%' },
              { name: 'Edition', value: '75%' },
            ].map((skill) => (
              <div
                key={skill.name}
                className="group p-8 rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl hover:-translate-y-2 hover:border-orange-500/30 transition duration-500"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                  <span className="text-orange-400">{skill.value}</span>
                </div>

                <div className="h-3 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-red-500 to-orange-400 rounded-full"
                    style={{ width: skill.value }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dự án */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <div className="inline-block px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm tracking-widest uppercase">
              Dự án
            </div>

            <h2 className="text-5xl font-bold">Sản Phẩm Nổi Bật</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div
                key={project}
                className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl hover:-translate-y-3 transition duration-500"
              >
                <div className="overflow-hidden">
                  <img
                    src={project === 1 ? 'https://cdn.discordapp.com/attachments/1493471254470987797/1503364691790135459/mockup-2.jpg?ex=6a0314f9&is=6a01c379&hm=05321ad6159114658a6afe0df2b0c3b845b4fd43b08e73aa4f3c3efc88f5784b&' : project === 2 ? 'https://cdn.discordapp.com/attachments/1493471254470987797/1503368053742899310/9.jpg?ex=6a03181b&is=6a01c69b&hm=36f8db00f203638c7fd66fc4385808befc7bf599d4d94483d567a10ad0e9093a&' : `https://picsum.photos/600/400?random=${project}`}
                    alt="project"
                    className="w-full h-[260px] object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="p-8 space-y-4">
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs">React</span>
                    <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs">UI/UX</span>
                  </div>

                  <h3 className="text-2xl font-bold">
                    {project === 1 ? 'Thiết kế bao bì sản phẩm' : project === 2 ? 'Photobook' : 'Art Book'}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {project === 1
                      ? 'Bộ mockup bao bì thực phẩm hữu cơ mang phong cách mộc mạc và thân thiện môi trường, sử dụng tông xanh – nâu tự nhiên kết hợp logo mềm mại tạo cảm giác tươi sạch, organic và gần gũi với người tiêu dùng.'
                      : project === 2
                      ? 'Khoảnh khắc ghi lại vẻ đẹp trang nghiêm và hiện đại của Dinh Độc Lập dưới bầu trời trong xanh, nổi bật với hàng cờ đỏ và không gian lịch sử mang đậm dấu ấn Việt Nam.'
                      : 'Hình ảnh mang cảm giác nhẹ nhàng và yên bình, khắc họa chú mèo lặng lẽ bên khung cửa sổ với ánh sáng tự nhiên tạo nên không gian đầy chất thơ và thư giãn.'
                    }
                  </p>

                  <button className="mt-4 px-5 py-3 rounded-xl bg-gradient-to-r from-red-600 to-orange-500 hover:scale-105 transition duration-300">
                    Xem chi tiết
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kinh nghiệm */}
      <section id="experience" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute left-0 top-1/2 h-full w-full pointer-events-none">
          <div className="pulse-circle pulse-1"></div>
          <div className="pulse-circle pulse-2"></div>
          <div className="pulse-circle pulse-3"></div>
          <div className="pulse-circle pulse-4"></div>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-20 space-y-4">
            <div className="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm tracking-widest uppercase">
              Kinh nghiệm
            </div>

            <h2 className="text-5xl font-bold">Hành Trình Nghề Nghiệp</h2>
          </div>

          <div className="space-y-10 relative border-l border-white/10 pl-10">
            {['Chuyên gia thiết kế và chỉnh sửa ảnh', 'Tốt nghiệp trường đại học Gia Định', 'Làm việc tại Garena', 'Trở thành nhà sáng tạo nội dung'].map((job, index) => (
              <div
                key={job}
                className="relative p-8 rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl"
              >
                <div className="absolute -left-[50px] top-10 w-5 h-5 rounded-full bg-gradient-to-r from-red-500 to-orange-400 shadow-[0_0_20px_rgba(255,80,0,0.8)]"></div>

                <p className="text-orange-400 mb-2">202{index + 3}</p>
                <h3 className="text-2xl font-bold mb-3">{job}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Liên hệ */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="space-y-4 mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm tracking-widest uppercase">
              Liên hệ
            </div>

            <h2 className="text-5xl font-bold">Cùng Xây Dựng Điều Tuyệt Vời</h2>
          </div>

          <div className="p-10 rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Tên của bạn"
                className="w-full p-4 rounded-2xl bg-black/40 border border-white/10 focus:outline-none focus:border-orange-400"
              />

              <input
                type="email"
                placeholder="Email của bạn"
                className="w-full p-4 rounded-2xl bg-black/40 border border-white/10 focus:outline-none focus:border-orange-400"
              />
            </div>

            <textarea
              rows="6"
              placeholder="Tin nhắn của bạn"
              className="w-full p-4 rounded-2xl bg-black/40 border border-white/10 focus:outline-none focus:border-orange-400"
            ></textarea>

            <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 hover:scale-105 transition duration-300 shadow-[0_0_30px_rgba(255,80,0,0.4)] font-semibold">
              Gửi tin nhắn
            </button>

            <div className="flex justify-center gap-6 pt-6 text-gray-400">
              <a href="#" className="hover:text-orange-400 transition">Behance</a>
              <a href="#" className="hover:text-orange-400 transition">Dribbble</a>
              <a href="#" className="hover:text-orange-400 transition">GitHub</a>
              <a href="#" className="hover:text-orange-400 transition">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-500 text-sm">
        © 2026 Hồ sơ của bạn. Thiết kế với trải nghiệm tương lai cao cấp.
      </footer>
    </div>
  );
}
