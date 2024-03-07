'use strict'


/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        // const fs = require('fs')
        // const filePath = './data/monan.json'
        // let monan

        // fs.readFile(filePath, 'utf8', (err, data) => {
        //     if (err) {
        //         console.error('Error reading file:', err)
        //     } else {
        //         monan = JSON.parse(data)
        //     }
        // });

        // console.log('Bulk Insert Query:', queryInterface.bulkInsert('monan', [monan]));

        return await queryInterface.bulkInsert('lehoi', 
        [
          {
              "ten": "Lễ hội đền Hùng - Giỗ tổ vua Hùng Vương",
              "nguonGoc": "Phú Thọ",
              "thoiGianBatDau": "Ngày 8 tháng 3 âm lịch",
              "thoiGianKetThuc": "Ngày 11 tháng 3 âm lịch",
              "quyMo": "Lễ hội quy tụ đông đảo người tham gia, thu hút khách du lịch",
              "hoatDong": "Lễ cúng tưởng nhớ Tổ vua Hùng Vương, Diễn tập và biểu diễn nghệ thuật, Các hoạt động văn hóa truyền thống",
              "hinhAnh": "path/to/lehoi"
          },
          {
              "ten": "Lễ hội miếu Bà Chúa Xứ núi Sam tỉnh An Giang",
              "nguonGoc": "An Giang",
              "thoiGianBatDau": "Thường vào tháng 4 âm lịch",
              "thoiGianKetThuc": "Dựa vào lịch trình cụ thể của từng năm",
              "quyMo": "Lễ hội tôn vinh và cầu nguyện cho Bà Chúa Xứ",
              "hoatDong": "Diễn hóa múa lân và múa rồng, Các hoạt động nghệ thuật truyền thống",
              "hinhAnh": "path/to/lehoi"
          },
          {
              "ten": "Lễ hội chùa Hương hay trẩy hội chùa Hương",
              "nguonGoc": "Hà Nội",
              "thoiGianBatDau": "Từ ngày 6 đến ngày 15 tháng Giêng âm lịch",
              "thoiGianKetThuc": "Khoảng ba tháng kể từ ngày bắt đầu",
              "quyMo": "Lễ hội lớn nhất, thu hút hàng triệu lượt người tham gia",
              "hoatDong": "Du thuyền qua các hòn đảo, Thăm hang động, Câu cá và thưởng thức hải sản tươi ngon",
              "hinhAnh": "path/to/lehoi"
          },
          {
              "ten": "Lễ hội Nghinh Ông",
              "nguonGoc": "Cần Giờ",
              "thoiGianBatDau": "Thường diễn ra vào cuối năm",
              "quyMo": "Lễ hội truyền thống với nhiều hoạt động văn hóa và tâm linh",
              "hoatDong": "Cúng ông Địa, Biểu diễn múa lân và múa rồng, Các trò chơi dân gian",
              "hinhAnh": "path/to/lehoi"
          },
          {
              "ten": "Lễ hội xuân Yên Tử tri ân công đức Phật Hoàng Trần Nhân Tông",
              "nguonGoc": "Quảng Ninh",
              "thoiGianBatDau": "Thường vào dịp Tết Nguyên Đán",
              "quyMo": "Lễ hội với nhiều hoạt động tâm linh và văn hóa",
              "hoatDong": "Lễ cúng tưởng nhớ công đức của Phật Hoàng Trần Nhân Tông, Các hoạt động lễ hội truyền thống",
              "hinhAnh": "path/to/lehoi"
          },
          {
              "ten": "Lễ vía Ngũ Hành Nương Nương tại miếu Bà Ngũ Hành tại Long An",
              "nguonGoc": "Long An",
              "thoiGianBatDau": "Thường vào tháng 2 âm lịch",
              "thoiGianKetThuc": "Dựa vào lịch trình cụ thể của từng năm",
              "quyMo": "Lễ hội tâm linh tôn vinh Ngũ Hành Nương Nương"
          },
          {
              "ten": "Lễ hội chùa Bái Đính",
              "nguonGoc": "Ninh Bình",
              "thoiGianBatDau": "Thường vào dịp lễ Tết Nguyên Đán",
              "quyMo": "Lễ hội hành hương về vùng đất cố đô Hoa Lư",
              "hoatDong": "Lễ cúng tưởng nhớ các vị thánh, Biểu diễn nghệ thuật và văn hóa",
              "hinhAnh": "path/to/lehoi"
          },
          {
              "ten": "Lễ hội đền Trần tại phường Lộc Vượng, thành phố Nam Định",
              "nguonGoc": "Nam Định",
              "thoiGianBatDau": "Thường vào tháng 2 âm lịch",
              "quyMo": "Lễ hội tôn vinh vị thần quan trọng",
              "hoatDong": "Lễ cúng và diễn tập các trận đánh lịch sử, Biểu diễn nghệ thuật truyền thống",
              "hinhAnh": "path/to/lehoi"
          },
          {
              "ten": "Lễ hội Tháp Bà Ponagar",
              "nguonGoc": "Khánh Hòa",
              "thoiGianBatDau": "Thường vào tháng 4 hoặc tháng 5",
              "quyMo": "Lễ hội tôn vinh Thánh Mẫu Ponagar",
              "hoatDong": "Lễ cúng tưởng nhớ Thánh Mẫu, Biểu diễn văn hóa dân gian",
              "hinhAnh": "path/to/lehoi"
          },
          {
              "ten": "Hội Lim",
              "nguonGoc": "Kinh Bắc",
              "thoiGianBatDau": "Thường vào tháng 1 âm lịch",
              "thoiGianKetThuc": "Dựa vào lịch trình cụ thể của từng năm",
              "quyMo": "Lễ hội truyền thống lớn nhất vùng Kinh Bắc",
              "hoatDong": "Lễ cúng tưởng nhớ vị thần quan trọng, Biểu diễn nghệ thuật và văn hóa",
              "hinhAnh": "path/to/lehoi"
          },
          {
              "ten": "Lễ Vu Lan thắng hội",
              "thoiGianBatDau": "Thường vào tháng 7 âm lịch",
              "quyMo": "Lễ hội tâm linh tôn vinh lòng hiếu thảo",
              "hoatDong": "Lễ cúng tưởng nhớ tổ tiên, Các hoạt động từ thiện và xã hội",
              "hinhAnh": "path/to/lehoi"
          },
          {
              "ten": "Lễ cúng biển ở Mỹ Long",
              "nguonGoc": "Bến Tre",
              "thoiGianBatDau": "Thường vào tháng 4 âm lịch",
              "thoiGianKetThuc": "Dựa vào lịch trình cụ thể của từng năm",
              "quyMo": "Lễ hội tâm linh và văn hóa truyền thống",
              "hoatDong": "Lễ cúng và hành hương tới biển, Biểu diễn văn hóa dân gian",
              "hinhAnh": "path/to/lehoi"
          },
          {
              "ten": "Lễ hội đền Gióng tại Sóc Sơn",
              "nguonGoc": "Hà Nội",
              "thoiGianBatDau": "Thường vào tháng 4 âm lịch",
              "thoiGianKetThuc": "Dựa vào lịch trình cụ thể của từng năm",
              "quyMo": "Lễ hội tôn vinh vị anh hùng dân tộc Gióng",
              "hoatDong": "Diễn tập các trận đánh lịch sử, Biểu diễn văn hóa truyền thống",
              "hinhAnh": "path/to/lehoi"
          },
          {
              "ten": "Lễ hội đền Hai Bà Trưng - Mê Linh",
              "nguonGoc": "Hà Nội",
              "thoiGianBatDau": "Thường vào tháng 2 âm lịch",
              "thoiGianKetThuc": "Dựa vào lịch trình cụ thể của từng năm",
              "quyMo": "Lễ hội tưởng nhớ và tôn vinh nhà nữ anh hùng Hai Bà Trưng",
              "hoatDong": "Diễn tập và biểu diễn văn hóa dân gian, Các hoạt động tâm linh",
              "hinhAnh": "path/to/lehoi"
          },
          {
              "ten": "Tết nguyên đán",
              "thoiGianBatDau": "Dương lịch từ 29 tháng 12 đến mùng 7 tháng 1",
              "quyMo": "Lễ hội lớn nhất và quan trọng nhất tại Việt Nam",
              "hoatDong": "Gia đình sum họp, Lễ cúng tưởng nhớ tổ tiên, Các trò chơi dân gian",
              "hinhAnh": "path/to/lehoi"
          }
        ]
        
        )
    },

    async down(queryInterface, Sequelize) {
        return await queryInterface.bulkDelete('lehoi', {}, null)
    }
};
