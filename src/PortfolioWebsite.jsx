export default function PortfolioWebsite() {
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden scroll-smooth font-sans">
      {/* Nền hoạt hình */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-red-500/20 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/20 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05),_transparent_70%)]"></div>
      </div>

      {/* Thanh điều hướng */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold tracking-widest bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
            HỒ SƠ
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
              <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 hover:scale-105 transition duration-300 shadow-[0_0_40px_rgba(255,80,0,0.4)] font-semibold">
                Xem Dự án
              </button>

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

            <h2 className="text-5xl font-bold">Chuyên môn kỹ thuật</h2>
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

            <h2 className="text-5xl font-bold">Công trình nổi bật</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div
                key={project}
                className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl hover:-translate-y-3 transition duration-500"
              >
                <div className="overflow-hidden">
                  <img
                    src={`https://picsum.photos/600/400?random=${project}`}
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
      <section id="experience" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <div className="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm tracking-widest uppercase">
              Kinh nghiệm
            </div>

            <h2 className="text-5xl font-bold">Hành trình nghề nghiệp</h2>
          </div>

          <div className="space-y-10 relative border-l border-white/10 pl-10">
            {['Chuyên gia Frontend cấp cao', 'Nhà thiết kế UI/UX', 'Nhà phát triển sáng tạo'].map((job, index) => (
              <div
                key={job}
                className="relative p-8 rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl"
              >
                <div className="absolute -left-[50px] top-10 w-5 h-5 rounded-full bg-gradient-to-r from-red-500 to-orange-400 shadow-[0_0_20px_rgba(255,80,0,0.8)]"></div>

                <p className="text-orange-400 mb-2">202{index + 2} - Hiện tại</p>
                <h3 className="text-2xl font-bold mb-3">{job}</h3>
                <p className="text-gray-400 leading-relaxed">
                  Xây dựng giao diện cao cấp và trải nghiệm số tập trung vào tương tác, hoạt ảnh và UX hiện đại.
                </p>
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

            <h2 className="text-5xl font-bold">Cùng xây dựng điều tuyệt vời</h2>
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
