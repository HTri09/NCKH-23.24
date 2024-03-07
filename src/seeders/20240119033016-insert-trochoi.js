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

        return await queryInterface.bulkInsert('trochoi', 
        [
          {
              "ten": "Oẳn tù xì",
              "luatChoi": "Mỗi người chơi sẽ giữ một viên đá, ném lên cao và cố gắng lấy nhanh hơn các đối thủ. Người ném viên đá phải tránh được bị chạm bởi đá của người khác. Nếu bị chạm, người đó sẽ phải chơi vai trò của 'oẳn tù xì' và cố gắng chạm vào người khác để chuyển vai trò.",
              "nguonGoc": "Trò chơi dân gian phổ biến ở các làng xã truyền thống của Việt Nam.",
              "hinhAnh": "path/to/trochoi"
          },
          {
              "ten": "Chi chi chành chành",
              "luatChoi": "Các người chơi sẽ đứng thành một đường chữ U và truyền một vật (thường là quả cầu) từ tay này sang tay khác mà không được chạm vào vật đó. Người nào làm mất vật hoặc chạm vào nó sẽ bị loại khỏi trò chơi.",
              "nguonGoc": "Trò chơi phổ biến trong các buổi lễ hội truyền thống của Việt Nam.",
              "hinhAnh": "path/to/trochoi"
          },
          {
              "ten": "Chùm nụm",
              "luatChoi": "Người chơi sẽ nắm chặt tay lại, tạo thành một vòng tròn. Một người sẽ đặt một chiếc nụm vào lòng bàn tay của mình và chui nó qua giữa tay của người khác trong vòng tròn. Người được chùm nụm chui qua tay của mình sẽ phải nhanh chóng đuổi và chạm vào người đã chui nụm qua tay mình. Người chơi nào bị chạm sẽ lấy chùm nụm và tiếp tục trò chơi.",
              "nguonGoc": "Trò chơi phổ biến trong cộng đồng dân cư và làng xã Việt Nam.",
              "hinhAnh": "path/to/trochoi"
          },
          {
              "ten": "Bịt mắt bắt dê",
              "luatChoi": "Một người sẽ đóng vai làm 'dê,' bịt mắt và đi lang thang trong khu vực chơi. Các người chơi khác sẽ cố gắng tránh bị chạm bởi 'dê.' Người nào bị chạm sẽ chuyển vai trò làm 'dê.'",
              "nguonGoc": "Trò chơi có nguồn gốc từ các làng quê, thường được tổ chức trong các dịp lễ hội.",
              "hinhAnh": "path/to/trochoi"
          },
          {
              "ten": "Đếm sao",
              "luatChoi": "Các người chơi sẽ nằm xuống trên mặt đất và cùng nhau nhìn lên bầu trời vào ban đêm. Họ sẽ thảo luận và đếm số lượng sao mà họ nhìn thấy. Người có số lượng đếm chính xác hoặc gần đúng nhất sẽ là người chiến thắng.",
              "nguonGoc": "Trò chơi phổ biến trong các buổi cắm trại và sinh hoạt ngoại ô.",
              "hinhAnh": "path/to/trochoi"
          },
          {
              "ten": "Cáo và thỏ",
              "luatChoi": "Người chơi sẽ được phân đội thành hai nhóm là 'thỏ' và 'cao.' Hai nhóm sẽ cố gắng đánh bại nhau bằng cách ném bóng (đại diện cho thức ăn) qua lại. Nếu bóng rơi xuống đất, 'cao' sẽ chiến thắng, và ngược lại.",
              "nguonGoc": "Trò chơi thường được tổ chức trong các sự kiện vui chơi cộng đồng.",
              "hinhAnh": "path/to/trochoi"
          },
          {
              "ten": "Thả đỉa ba ba",
              "luatChoi": "Mỗi người chơi sẽ có một đỉa bằng giấy, kích thước ba ba. Người chơi sẽ thả đỉa từ độ cao nhất có thể và cố gắng làm sao để đỉa không bị rơi xuống đất. Người chơi giữ được đỉa lâu nhất sẽ là người chiến thắng.",
              "nguonGoc": "Trò chơi có thể được thấy trong các sự kiện lễ hội truyền thống.",
              "hinhAnh": "path/to/trochoi"
          },
          {
              "ten": "Nhảy bao bố",
              "luatChoi": "Người chơi sẽ nhảy bao bố (túi bố đựng cơm) từ một đích đến đích khác mà không chạm vào đất. Người chơi đến đích đầu tiên hoặc nhảy xa nhất sẽ là người chiến thắng.",
              "nguonGoc": "Trò chơi dân gian thường được tổ chức trong các sự kiện vui chơi và lễ hội.",
              "hinhAnh": "path/to/trochoi"
          },
          {
              "ten": "Chơi chuyền",
              "luatChoi": "Người chơi sẽ cố gắng chuyền một quả cầu hoặc còi qua lại cho đối phương bằng cách sử dụng bàn tay, cánh tay hoặc các phần cơ thể khác. Đội nào để rơi quả cầu hoặc không chuyền được sẽ mất lượt chơi.",
              "nguonGoc": "Trò chơi phổ biến trong các sân trường và khu dân cư.",
              "hinhAnh": "path/to/trochoi"
          },
          {
              "ten": "Tập tầm vông",
              "luatChoi": "Người chơi sẽ sử dụng lòng bàn tay để đưa một quả cầu nhỏ qua hàng người chơi đối diện mà không để bóng rơi xuống đất. Người chơi mất lượt khi không đưa được bóng qua hoặc để bóng rơi xuống đất.",
              "nguonGoc": "Trò chơi dân gian thường được chơi trong các sân trường và vùng cộng đồng.",
              "hinhAnh": "path/to/trochoi"
          },
          {
              "ten": "Ô ăn quan",
              "luatChoi": "Trò chơi trên bàn cờ ở dạng hình chữ H, mỗi ô có năm hạt. Người chơi sẽ di chuyển hạt qua các ô theo quy tắc nhất định để ăn hạt của đối phương. Người chơi chiến thắng khi ăn hết hạt của đối phương hoặc làm cho đối phương không thể di chuyển nữa.",
              "nguonGoc": "Trò chơi có nguồn gốc từ các làng xã truyền thống của Việt Nam.",
              "hinhAnh": "path/to/trochoi"
          },
          {
              "ten": "Cua cắp",
              "luatChoi": "Một người chơi sẽ giữ một cái cua trong tay và cố gắng cắp cua của người chơi khác mà không bị chạm vào tay hoặc cua của đối phương. Người chơi có thể di chuyển cua một cách linh hoạt và sử dụng chiến thuật để tránh bị cắp.",
              "nguonGoc": "Trò chơi dân gian thường được tổ chức trong các sự kiện lễ hội.",
              "hinhAnh": "path/to/trochoi"
          },
          {
              "ten": "Kéo cưa lừa xẻ",
              "luatChoi": "Đội chơi sẽ cùng nhau kéo cưa lừa, người chơi ở cuối cùng sẽ xẻ gạch và nhận điểm. Đội nào xẻ được nhiều gạch nhất hoặc xẻ gạch nhanh nhất sẽ chiến thắng.",
              "nguonGoc": "Trò chơi thường xuất hiện trong các sự kiện làng xã và lễ hội truyền thống.",
              "hinhAnh": "path/to/trochoi"
          },
          {
              "ten": "Kéo mo cau",
              "luatChoi": "Đội chơi sẽ cùng nhau kéo một chiếc mo cau qua một quãng đường cố định. Đội nào kéo được mo cau qua đích đầu tiên sẽ là người chiến thắng.",
              "nguonGoc": "Trò chơi phổ biến trong các sự kiện vui chơi cộng đồng và lễ hội.",
              "hinhAnh": "path/to/trochoi"
          },
          {
              "ten": "Nu na nu nống",
              "luatChoi": "Người chơi sẽ đứng thành một vòng tròn và truyền một vật như quả cầu hoặc còi cho đối phương. Người chơi phải truyền vật đó trong khi nói câu 'Nu na nu nống.' Nếu người chơi không truyền kịp thời hoặc truyền sai, họ sẽ bị loại khỏi trò chơi.",
              "nguonGoc": "Trò chơi thường xuất hiện trong các sự kiện giải trí và giáo dục.",
              "hinhAnh": "path/to/trochoi"
          }
      ]
      
        )
    },

    async down(queryInterface, Sequelize) {
        return await queryInterface.bulkDelete('trochoi', {}, null)
    }
};
