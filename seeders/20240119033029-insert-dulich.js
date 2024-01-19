'use strict'


/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
  
        return await queryInterface.bulkInsert('dulich', 
        [
          {
              "ten": "Vịnh Hạ Long",
              "moTa": "Hạ Long Bay, với hơn 1.600 hòn đảo đá vôi nổi tiếng, tạo nên một bức tranh thiên nhiên hùng vĩ, kỳ bí và tráng lệ. Du khách có cơ hội thăm những hang động lạ mắt và thưởng thức cảnh hoàng hôn trên biển tuyệt vời.",
              "hoatDong": "Du thuyền qua các hòn đảo, Thăm hang động, Câu cá và thưởng thức hải sản tươi ngon"
          },
          {
              "ten": "Sapa",
              "moTa": "Sapa là điểm đến lý tưởng cho những chuyến trekking, với thửa ruộng bậc thang ngoạn mục của người dân tộc dân dụ. Nơi đây còn nổi tiếng với những khu làng truyền thống, thác nước hùng vĩ và khung cảnh núi non hùng vĩ.",
              "hoatDong": "Trekking qua thửa ruộng bậc thang, Thăm các làng dân tộc, Khám phá thác nước Silver Waterfall"
          },
          {
              "ten": "Hội An",
              "moTa": "Thành phố cổ Hội An là một điểm du lịch độc đáo với kiến trúc cổ kính, đèn lồng lung linh và gánh hàng rong truyền thống. Du khách có thể thưởng thức ẩm thực đặc sắc và tham gia các lễ hội truyền thống tại đây.",
              "hoatDong": "Thăm Phố cổ Hội An, Thưởng thức ẩm thực đặc sắc, Tham gia các lễ hội và sự kiện nghệ thuật"
          },
          {
              "ten": "Huế",
              "moTa": "Huế, cự li lịch sử của Việt Nam, là thành phố của những lâu đài và lăng mộ cổ kính. Cố đô Huế đưa du khách trở về quá khứ với những di tích lịch sử và văn hóa độc đáo.",
              "hoatDong": "Thăm Cố đô Huế, Khám phá lâu đài, Dự lễ hội truyền thống"
          },
          {
              "ten": "Nha Trang",
              "moTa": "Nha Trang hấp dẫn du khách bằng bãi biển dài và tinh khiết, cũng như các hoạt động giải trí và thể thao biển sôi động. Đây là điểm đến lý tưởng cho những chuyến nghỉ dưỡng và thư giãn.",
              "hoatDong": "Tắm biển tại bãi Dốc Lệch, Chơi các trò thể thao biển như lướt sóng và lặn biển, Thăm Tháp Po Nagar Cham"
          },
          {
              "ten": "Đà Nẵng",
              "moTa": "Với bãi biển Mỹ Khê và vị trí thuận lợi để khám phá Hội An và Huế, Đà Nẵng thu hút du khách bằng cảnh đẹp biển và các điểm du lịch lân cận.",
              "hoatDong": "Nghỉ ngơi tại bãi biển Mỹ Khê, Thăm Cầu Rồng và Bà Nà Hills, Khám phá quần thể văn hóa Mỹ Sơn"
          },
          {
              "ten": "Phong Nha-Kẻ Bàng",
              "moTa": "Hệ thống hang động và động đá kỳ vĩ, di sản thế giới của UNESCO, là nơi thu hút những người yêu thiên nhiên và khám phá.",
              "hoatDong": "Thăm hang Sơn Đoòng - hang động lớn nhất thế giới, Du ngoạn qua sông và tham quan các hang động khác, Trekking trong khu vực quần thể động vật và cây cỏ"
          },
          {
              "ten": "Đà Lạt",
              "moTa": "Thành phố ngàn hoa với khí hậu mát mẻ, hồ, thác nước và vườn hoa, Đà Lạt là điểm đến lý tưởng cho những người muốn thư giãn và tận hưởng không khí trong lành.",
              "hoatDong": "Thăm Vườn hoa thành phố, Dạo quanh Hồ Xuân Hương, Thách thức bản thân với các hoạt động địa hình như leo núi và đạp xe đạp địa hình"
          },
          {
              "ten": "Cần Thơ",
              "moTa": "Nằm giữa lòng đồng bằng sông Cửu Long, Cần Thơ nổi tiếng với cầu Cần Thơ qua sông Hậu và chợ nổi Cái Răng sầm uất. Du khách có thể trải nghiệm cuộc sống sông nước và thưởng thức ẩm thực đặc sắc.",
              "hoatDong": "Chinh phục cầu Cần Thơ, Thăm chợ nổi Cái Răng, Tour thuyền đi khám phá cánh đồng lúa và khu vực rừng tràm trùng điệp"
          },
          {
              "ten": "Phú Quốc",
              "moTa": "Hòn đảo ngọc Phú Quốc có bãi biển dài, nước biển trong xanh và các resort sang trọng. Du khách có thể thư giãn tại bãi Sao, khám phá các khu dự trữ thiên nhiên, và thưởng thức hải sản tươi ngon.",
              "hoatDong": "Tắm biển tại bãi Sao, Khám phá Vịnh Xuân Đài, Thăm các trang trại nuôi cá và ngọc trai"
          },
          {
              "ten": "Tam Cốc - Bích Động",
              "moTa": "Khu du lịch nổi tiếng với những thửa ruộng bậc thang và hệ thống hang động độc đáo. Du khách có thể tham gia các tour thuyền trên sông Ngo Đồng và thưởng thức cảnh đẹp ngoạn mục.",
              "hoatDong": "Tour thuyền trên sông Ngo Đồng, Thăm hang Múa và tận hưởng cảnh đẹp từ trên cao, Dạo chơi qua thửa ruộng và làng truyền thống"
          },
          {
              "ten": "Vịnh Hạ Long",
              "moTa": "Khu vực biển rộng lớn, nổi tiếng với những hòn đảo đá và thác nước tuyệt vời. Du khách có thể tham gia các hoạt động như thăm hang động, câu cá, và thưởng thức ẩm thực biển đặc sắc.",
              "hoatDong": "Du thuyền qua Vịnh Hạ Long, Thăm các hòn đảo và hang động nổi tiếng, Thưởng thức đặc sản biển"
          },
          {
              "ten": "Mũi Né",
              "moTa": "Bãi biển nổi tiếng với cát trắng và những dãy cồn cát hình nón độc đáo. Mũi Né còn là điểm đến cho các hoạt động giải trí như lướt sóng, đua thuyền cánh ngựa và thăm các ngôi làng cá truyền thống.",
              "hoatDong": "Lướt sóng tại dãy cồn cát, Đua thuyền cánh ngựa trên dòng sông Cổ Cò, Thăm làng cá và trải nghiệm đời sống nông dân"
          },
          {
              "ten": "Côn Đảo",
              "moTa": "Quần đảo nổi tiếng với bãi biển hoang sơ và những di tích lịch sử. Du khách có thể tham gia các hoạt động như lặn biển để khám phá đồng cỏ san hô đầy màu sắc và động thực vật biển đa dạng.",
              "hoatDong": "Lặn biển để khám phá san hô đa dạng, Thăm những nhà tù lịch sử, Đi bộ dọc bờ biển và thưởc thức cảnh đẹp hoang sơ"
          },
          {
              "ten": "Mộc Châu",
              "moTa": "Vùng cao nguyên tuyệt vời với thửa ruộng bậc thang và những ngôi làng dân dụ thú vị. Du khách có thể tham gia các hoạt động như điều mô, trekking, và thưởng thức ẩm thực đặc sắc.",
              "hoatDong": "Điều mô trên thửa ruộng, Trekking qua rừng nguyên sinh, Thưởng thức ẩm thực đặc sắc của người H'Mông"
          }
      ]
      
      
        )
    },

    async down(queryInterface, Sequelize) {
        return await queryInterface.bulkDelete('dulich', {}, null)
    }
};
