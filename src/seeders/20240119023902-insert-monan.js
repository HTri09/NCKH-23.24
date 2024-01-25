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

        return await queryInterface.bulkInsert('monan', [
            {
                "ten": "Phở bò",
                "nguyenLieu": "Sợi phở, Nước dùng từ xương bò, Thịt bò, Hành, Gừng, và các gia vị khác, Rau sống, Giá, và các loại gia vị khác để ăn kèm",
                "cachCheBien": "Nước dùng phở được nấu từ xương bò cùng với hành, gừng và các gia vị khác. Bún phở được luộc và ăn kèm với thịt bò hoặc gà cắt mỏng. Món ăn thường được ăn kèm với rau sống, giá và các gia vị khác."
            },
            {
                "ten": "Xôi gấc",
                "nguyenLieu": "Nếp, Nước cốt dừa, Đường, Muối, Quả gấc",
                "cachCheBien": "Nếp được nấu chín cùng với nước cốt dừa, đường và muối. Món xôi gấc có màu đỏ đặc trưng của gấc và thường được ăn kèm với giò lụa, thịt nướng hoặc xôi ngũ sắc."
            },
            {
                "ten": "Giò lụa",
                "nguyenLieu": "Thịt heo cắt sợi, Bột nở, Muối, Đường, Nước lọc",
                "cachCheBien": "Thịt heo được xay nhuyễn sau đó trộn đều với bột nở, muối, đường và nước lọc. Hỗn hợp sau đó được đặt trong lớp lá chuối và hấp chín. Giò lụa thường được ăn sống hoặc nướng và ăn kèm với bún, bánh mì hoặc các loại rau sống."
            },
            {
                "ten": "Nem rán",
                "nguyenLieu": "Thịt heo xay nhuyễn, Mộc nhỉ, Nấm, Miến, và các gia vị khác, Bánh tráng",
                "cachCheBien": "Thịt heo được trộn đều với mộc nhỉ, nấm, miến và các gia vị khác. Hỗn hợp sau đó được cuốn trong bánh tráng và chiên giòn. Nem rán thường được ăn kèm với nước mắm pha và rau sống."
            },
            {
                "ten": "Thịt đông",
                "nguyenLieu": "Thịt heo, thịt gà, thịt bò, Nước mắm, Đường, Gia vị",
                "cachCheBien": "Thịt được nướng chín và sau đó ngâm trong nước mắm pha cùng với đường và các gia vị khác. Thịt sau đó được phơi nắng để tạo thành lớp vỏ ngoại cảnh. Thịt đông thường được ăn sống hoặc nướng và ăn kèm với nước mắm pha, bún và rau sống."
            },
            {
                "ten": "Bánh mì",
                "nguyenLieu": "Bánh mì (bánh mì Việt Nam), Thịt heo xay, Pate, Thịt nguội, Rau sống và gia vị khác",
                "cachCheBien": "Bánh mì được cắt đôi và ăn kèm với thịt heo xay, pate, thịt nguội, rau sống và các gia vị khác. Món bánh mì thường được ăn kèm với nước mắm pha và ớt."
            },
            {
                "ten": "Bún chả",
                "nguyenLieu": "Bún, Chả lụa (giò lụa), Thịt nướng, Nước mắm pha, Dầu ăn, Nước gừng, Đường",
                "cachCheBien": "Bún được luộc chín và ăn kèm với chả lụa (giò lụa) và thịt nướng. Nước mắm pha, dầu ăn, nước gừng và đường được pha chế để tạo thành nước mắm chua ngọt. Bún chả thường được ăn kèm với rau sống và gia vị."
            },
            {
                "ten": "Bánh đa cua",
                "nguyenLieu": "Bánh đa cua, Thịt cua, Bánh đa, Mỡ hành, Gia vị",
                "cachCheBien": "Bánh đa cua được làm từ bột gạo và nước cua, sau đó hấp chín. Mỡ hành và gia vị được thêm vào để tạo ra mùi vị đặc trưng. Bánh đa cua thường được ăn kèm với nước mắm pha."
            },
            {
                "ten": "Bánh chưng",
                "nguyenLieu": "Gạo ngon, Lá chuối, Đậu xanh, Thịt mỡ, Tiêu, Muối",
                "cachCheBien": "Gạo ngon được nấu nhân với đậu xanh và thịt mỡ. Hỗn hợp sau đó được bọc trong lá chuối và nấu chín. Bánh chưng thường được ăn kèm với giò lụa, chả lụa và rau sống."
            },
            {
                "ten": "Bánh xèo",
                "nguyenLieu": "Bột nở, Nước cốt dừa, Thịt heo xay, Tảo biển, Gia vị, Rau sống, Bún, Nước mắm pha",
                "cachCheBien": "Bột nở được trộn với nước cốt dừa và chiên thành bánh mỏng. Bánh xèo sau đó được ăn kèm với thịt heo xay, tảo biển và gia vị. Món ăn thường được ăn kèm với rau sống, bún và nước mắm pha."
            },
            {
                "ten": "Bún bò Huế",
                "nguyenLieu": "Bún, Thịt bò (bò gân, bò bía), Huyết, Giò lụa, Bún, Rau sống, Nước mắm pha, Ớt",
                "cachCheBien": "Bún bò Huế được nấu từ nước dùng có vị cay nồng, ăn kèm với bún, thịt bò (bò gân, bò bía), huyết và giò lụa. Món ăn thường được ăn kèm với rau sống, nước mắm pha và ớt."
            },
            {
                "ten": "Nem chua",
                "nguyenLieu": "Thịt lợn, Nước mắm, Đường, Tỏi",
                "cachCheBien": "Thịt lợn được nghiền nhuyễn sau đó trộn đều với nước mắm, đường và tỏi. Hỗn hợp sau đó được cuốn thành hình tròn và phơi nắng. Nem chua thường được ăn sống hoặc chín tùy theo khẩu vị cá nhân."
            },
            {
                "ten": "Bánh bèo",
                "nguyenLieu": "Bột gạo, Nước lọc, Nước mắm, Dầu mỡ, Tảo biển, Bánh đậu xanh",
                "cachCheBien": "Bột gạo được trộn với nước lọc, sau đó được nấu chín thành bánh nhỏ tròn. Bánh bèo sau đó được ướp với nước mắm, dầu mỡ, tảo biển và ăn kèm với bánh đậu xanh. Món ăn thường được ăn kèm với nước mắm pha."
            },
            {
                "ten": "Nem cua bể",
                "nguyenLieu": "Thịt cua, Nấm bào, Thịt lợn, Bánh tráng, Lá chuối, Gia vị",
                "cachCheBien": "Thịt cua, nấm bào và thịt lợn được xay nhuyễn, sau đó trộn đều với gia vị. Hỗn hợp sau đó được cuốn trong lá chuối và chiên giòn. Nem cua bể thường được ăn kèm với nước mắm pha và rau sống."
            },
            {
                "ten": "Gỏi cuốn",
                "nguyenLieu": "Bánh tráng, Thịt gà, Rau sống, Bún, Thịt tôm, Gia vị như tỏi, ớt, nước mắm, đường",
                "cachCheBien": "Bánh tráng được ướt nhẹ bằng nước ấm và để mềm. Mỗi tờ bánh tráng sau đó được đặt lên mặt phẳng, thêm một lớp bún, thịt gà, thịt tôm, rau sống như giá và rau sống. Mọi nguyên liệu sau đó được cuốn gọn thành hình trụ và ăn kèm với nước mắm pha chua ngọt."
            },
            {
                "ten": "Bánh khọt",
                "nguyenLieu": "Bột gạo, Nước cốt dừa, Thịt tôm, Gia vị như muối, tiêu, nước mắm, đường, Lá chuối",
                "cachCheBien": "Bột gạo được trộn với nước cốt dừa và gia vị như muối, tiêu, nước mắm, đường để tạo thành hỗn hợp bánh khọt. Thịt tôm được nướng chín và đặt vào đáy các khuôn hình tròn. Hỗn hợp bột sau đó được đổ lên trên thịt tôm và nướng cho đến khi bánh có lớp vỏ giòn vàng. Bánh khọt sau đó được ăn kèm với lá chuối và nước mắm pha chua ngọt."
            },
            {
                "ten": "Bánh khọt",
                "nguyenLieu": "Bột gạo, Nước cốt dừa, Thịt tôm, Gia vị như muối, tiêu, nước mắm, đường, Lá chuối",
                "cachCheBien": "Bột gạo được trộn với nước cốt dừa và gia vị như muối, tiêu, nước mắm, đường để tạo thành hỗn hợp bánh khọt. Thịt tôm được nướng chín và đặt vào đáy các khuôn hình tròn. Hỗn hợp bột sau đó được đổ lên trên thịt tôm và nướng cho đến khi bánh có lớp vỏ giòn vàng. Bánh khọt sau đó được ăn kèm với lá chuối và nước mắm pha chua ngọt."
            },
            {
                "ten": "Chả rươi",
                "nguyenLieu": "Rươi, Hành tím, Tỏi, Gia vị như tiêu, nước mắm, đường, Lá chuối",
                "cachCheBien": "Rươi được làm sạch và nấu chín. Hành tím và tỏi được băm nhuyễn. Rươi sau đó được trộn đều với hành tím, tỏi, gia vị như tiêu, nước mắm, đường. Hỗn hợp sau đó được đặt trong lá chuối và nướng cho đến khi chín giòn. Chả rươi sau đó được ăn kèm với nước mắm pha chua ngọt."
            },
            {
                "ten": "Cơm tấm",
                "nguyenLieu": "Gạo tấm, Thịt heo nạc vai, Bì, Trứng hấp, Mắm nêm, Đường, Nước mắm, Rau sống như dưa leo, rau sống, giá sống",
                "cachCheBien": "Gạo tấm sau khi nấu chín được xắt thành các hạt nhỏ và giữ ẩm bằng nước mắm pha chua ngọt. Thịt heo nạc vai được nướng chín và cắt thành sợi mảnh. Bì được cắt thành sợi mảnh. Cơm tấm được ăn kèm với thịt heo nạc vai, bì, trứng hấp, rau sống như dưa leo, rau sống, giá sống và nước mắm pha chua ngọt."
            },
            {
                "ten": "Chả mực Hạ Long",
                "nguyenLieu": "Mực khô, Thịt nạc vai, Nước mắm, Đường, Tiêu, Bột ngọt, Lá chuối",
                "cachCheBien": "Mực khô được ngâm nước và ngâm mắm để làm mềm. Mực sau đó được cắt thành từng sợi nhỏ. Thịt nạc vai được nghiền nhuyễn. Mực và thịt được trộn đều với nước mắm, đường, tiêu, bột ngọt. Hỗn hợp sau đó được đặt trong lá chuối và nướng cho đến khi chín giòn. Chả mực Hạ Long sau đó được ăn kèm với lá chuối và nước mắm pha chua ngọt."
            },
            {
                "ten": "Bánh cuốn",
                "nguyenLieu": "Bột gạo, Nước, Thịt heo nạc vai, Tảo spirulina (cho màu xanh), Bún (gạo nở), Gia vị như tiêu, nước mắm, đường",
                "cachCheBien": "Bột gạo được trộn với nước để tạo thành bột bánh cuốn. Thịt heo nạc vai được nướng chín và băm nhuyễn. Bánh cuốn được nấu chín bằng cách đổ một lớp bột mỏng lên mặt khuôn hình tròn và đun chín. Thịt sau đó được cuốn vào bánh và bánh cuốn được ăn kèm với nước mắm pha chua ngọt."
            }
        ]
        )
    },

    async down(queryInterface, Sequelize) {
        return await queryInterface.bulkDelete('monan', {}, null)
    }
};
