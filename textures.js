window.textures_effects=function(tex_ctx){

    tex_ctx.textBaseline='middle'
    tex_ctx.clearRect(0,0,2048,2048)
    tex_ctx.fillStyle='rgb(235,235,235)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.fillStyle='rgb(130,130,130)'
    tex_ctx.strokeStyle='rgb(130,130,130)'
    tex_ctx.lineWidth=5
    tex_ctx.beginPath()
    tex_ctx.arc(64+8,9*128/30,3.5*128/30,0,8)
    tex_ctx.moveTo(53+8,96)
    tex_ctx.lineTo(61+8,53)
    tex_ctx.moveTo(53+8,96)
    tex_ctx.lineTo(39+8,116)
    tex_ctx.moveTo(53+8,96)
    tex_ctx.lineTo(71+8,116)
    tex_ctx.moveTo(36+8,54)
    tex_ctx.lineTo(59+8,64)
    tex_ctx.moveTo(86+8,61)
    tex_ctx.lineTo(59+8,64)
    tex_ctx.closePath()
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.moveTo(45,33)
    tex_ctx.lineTo(15,33)
    tex_ctx.moveTo(35,62)
    tex_ctx.lineTo(7,62)
    tex_ctx.moveTo(35,91)
    tex_ctx.lineTo(12,91)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgba(130,130,130,0.5)'
    tex_ctx.stroke()
    
    tex_ctx.fillStyle='rgb(0,200,0)'
    tex_ctx.fillRect(128,0,128,128)
    tex_ctx.fillStyle='rgb(0,0,0)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(118+128/6,128/2)
    tex_ctx.bezierCurveTo(128-20+128/2,0,20+128+128/2,0,138+128*5/6,128/2)
    tex_ctx.moveTo(118+128/6,128/2)
    tex_ctx.bezierCurveTo(128-20+128/2,128,20+128+128/2,128,138+128*5/6,128/2)
    tex_ctx.closePath()
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(0,200,0)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(128+128/2,20+128/2)
    tex_ctx.bezierCurveTo(108+128/2,(128/2)+10,108+128/2,(128/2)-10,128+128/2,(128/2)-20)
    tex_ctx.moveTo(128+128/2,20+128/2)
    tex_ctx.bezierCurveTo(148+128/2,(128/2)+10,148+128/2,(128/2)-10,128+128/2,(128/2)-20)
    tex_ctx.closePath()
    tex_ctx.fill()
    
    tex_ctx.lineCap='round'
    tex_ctx.lineJoin='round'
    tex_ctx.fillStyle='rgb(245,245,245)'
    tex_ctx.fillRect(256,0,128,128)
    tex_ctx.translate(-5,0)
    tex_ctx.fillStyle='rgb(0,0,0)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.lineWidth=10
    tex_ctx.beginPath()
    tex_ctx.ellipse(290,93,15,9,-0.2,0,7)
    tex_ctx.ellipse(349,84,15,9,-0.2,0,7)
    tex_ctx.closePath()
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(300,90)
    tex_ctx.lineTo(305,34)
    tex_ctx.moveTo(306,33)
    tex_ctx.lineTo(361,25)
    tex_ctx.moveTo(364,25)
    tex_ctx.lineTo(359,78)
    tex_ctx.closePath()
    tex_ctx.stroke()
    tex_ctx.translate(5,0)
    
    tex_ctx.fillStyle='rgb(245,245,245)'
    tex_ctx.fillRect(256+128,0,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.lineWidth=7
    tex_ctx.beginPath()
    
    for(let i=0,inc=Math.PI*2;i<inc;i+=inc/6){
        
        tex_ctx.moveTo(256+128*1.5+Math.sin(i)*25,128*0.5+Math.cos(i)*25*0.8)
        tex_ctx.lineTo(256+128*1.5+Math.sin(i)*55,128*0.5+Math.cos(i)*55*0.8)
        
    }
    
    tex_ctx.closePath()
    tex_ctx.stroke()
    
    tex_ctx.fillStyle='rgb(0,0,0)'
    tex_ctx.fillRect(256+256,0,128,128)
    tex_ctx.strokeStyle='rgb(255,255,255)'
    tex_ctx.fillStyle='rgb(255,255,255)'
    tex_ctx.lineWidth=4
    tex_ctx.beginPath()
    tex_ctx.translate(256*2+128/2,128/2)
    
    for(let i=0,_i=0;i<=Math.PI*2;i+=Math.PI*2/16,_i++){
        
        let r=_i%2===0?20:60
        tex_ctx.lineTo(Math.cos(i)*r,Math.sin(i)*r)
    }
    
    tex_ctx.setTransform(1,0,0,1,0,0)
    tex_ctx.fill()
    
    tex_ctx.fillStyle='rgb(0,0,0)'
    tex_ctx.fillRect(256+256+128,0,128,128)
    tex_ctx.strokeStyle='rgb(255,255,255)'
    tex_ctx.fillStyle='rgb(255,0,0)'
    tex_ctx.lineWidth=4
    tex_ctx.beginPath()
    tex_ctx.translate(256*2.5+128/2,128/2)
    
    for(let i=0,_i=0;i<=Math.PI*2;i+=Math.PI*2/16,_i++){
        
        let r=_i%2===0?20:60
        tex_ctx.lineTo(Math.cos(i)*r,Math.sin(i)*r)
    }
    
    tex_ctx.setTransform(1,0,0,1,0,0)
    tex_ctx.fill()
    
    tex_ctx.fillStyle='rgb(0,0,0)'
    tex_ctx.fillRect(256+256+256,0,128,128)
    tex_ctx.strokeStyle='rgb(255,255,255)'
    tex_ctx.fillStyle='rgb(0,0,255)'
    tex_ctx.lineWidth=4
    tex_ctx.beginPath()
    tex_ctx.translate(256*3+128/2,128/2)
    
    for(let i=0,_i=0;i<=Math.PI*2;i+=Math.PI*2/16,_i++){
        
        let r=_i%2===0?20:60
        tex_ctx.lineTo(Math.cos(i)*r,Math.sin(i)*r)
    }
    
    tex_ctx.setTransform(1,0,0,1,0,0)
    tex_ctx.fill()
    
    tex_ctx.fillStyle='rgb(0,0,0)'
    tex_ctx.fillRect(256+256+256+128,0,128,128)
    tex_ctx.strokeStyle='rgb(255,255,255)'
    tex_ctx.fillStyle='rgb(255,255,255)'
    tex_ctx.lineWidth=4
    tex_ctx.beginPath()
    tex_ctx.translate(256*3.5+128/2,128/2)
    
    for(let i=0,_i=0;i<=Math.PI*2;i+=Math.PI*2/16,_i++){
        
        let r=_i%2===0?20:60
        tex_ctx.lineTo(Math.cos(i)*r,Math.sin(i)*r)
    }
    
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(36,27)
    tex_ctx.lineTo(36,47)
    tex_ctx.moveTo(26,37)
    tex_ctx.lineTo(46,37)
    for(let i=0,_i=0;i<=Math.PI*2;i+=Math.PI*4/16,_i++){
        
        if(_i===1) continue
        
        let r=42,r2=55
        tex_ctx.moveTo(Math.cos(i)*r2,Math.sin(i)*r2)
        tex_ctx.lineTo(Math.cos(i)*r,Math.sin(i)*r)
    }
    tex_ctx.lineWidth=6
    tex_ctx.strokeStyle='rgb(255,255,255)'
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(0,0,0)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.strokeStyle='rgb(255,255,255)'
    tex_ctx.fillStyle='rgb(255, 0, 0)'
    tex_ctx.lineWidth=4
    tex_ctx.beginPath()
    tex_ctx.translate(128*0.5,128+128/2)
    
    for(let i=0,_i=0;i<=Math.PI*2;i+=Math.PI*2/16,_i++){
        
        let r=_i%2===0?20:60
        tex_ctx.lineTo(Math.cos(i)*r,Math.sin(i)*r)
    }
    
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(36,27)
    tex_ctx.lineTo(36,47)
    tex_ctx.moveTo(26,37)
    tex_ctx.lineTo(46,37)
    for(let i=0,_i=0;i<=Math.PI*2;i+=Math.PI*4/16,_i++){
        
        if(_i===1) continue
        
        let r=42,r2=55
        tex_ctx.moveTo(Math.cos(i)*r2,Math.sin(i)*r2)
        tex_ctx.lineTo(Math.cos(i)*r,Math.sin(i)*r)
    }
    tex_ctx.lineWidth=6
    tex_ctx.strokeStyle='rgb(255,0,0)'
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(0,0,0)'
    tex_ctx.fillRect(128,128,128,128)
    tex_ctx.strokeStyle='rgb(255,255,255)'
    tex_ctx.fillStyle='rgb(0,0,255)'
    tex_ctx.lineWidth=4
    tex_ctx.beginPath()
    tex_ctx.translate(128+128*0.5,128+128/2)
    
    for(let i=0,_i=0;i<=Math.PI*2;i+=Math.PI*2/16,_i++){
        
        let r=_i%2===0?20:60
        tex_ctx.lineTo(Math.cos(i)*r,Math.sin(i)*r)
    }
    
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(36,27)
    tex_ctx.lineTo(36,47)
    tex_ctx.moveTo(26,37)
    tex_ctx.lineTo(46,37)
    
    for(let i=0,_i=0;i<=Math.PI*2;i+=Math.PI*4/16,_i++){
        
        if(_i===1) continue
        
        let r=42,r2=55
        tex_ctx.moveTo(Math.cos(i)*r2,Math.sin(i)*r2)
        tex_ctx.lineTo(Math.cos(i)*r,Math.sin(i)*r)
    }
    
    tex_ctx.lineWidth=6
    tex_ctx.strokeStyle='rgb(0,0,255)'
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(150,255,150)'
    tex_ctx.fillRect(128*2,128,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(78, 135, 242)'
    tex_ctx.lineWidth=4
    tex_ctx.beginPath()
    tex_ctx.translate(256+128*0.5,128+128/2)
    tex_ctx.scale(1.2,1.2)
    
    for(let i=0;i<4;i++){
        
        tex_ctx.rotate(Math.PI*0.5)
        tex_ctx.moveTo(-8,0)
        tex_ctx.bezierCurveTo(-40,-60,40,-60,8,0)
    }
    
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-10)
    tex_ctx.lineTo(0,10)
    tex_ctx.moveTo(-10,0)
    tex_ctx.lineTo(10,0)
    tex_ctx.lineWidth=4
    tex_ctx.strokeStyle='rgb(255,255,255)'
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(150,255,150)'
    tex_ctx.fillRect(128*3,128,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(237, 82, 73)'
    tex_ctx.lineWidth=4
    tex_ctx.beginPath()
    tex_ctx.translate(256*1.5+128*0.5,128+128/2)
    tex_ctx.scale(1.2,1.2)
    
    for(let i=0;i<4;i++){
        
        tex_ctx.rotate(Math.PI*0.5)
        tex_ctx.moveTo(-8,0)
        tex_ctx.bezierCurveTo(-40,-60,40,-60,8,0)
    }
    
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-10)
    tex_ctx.lineTo(0,10)
    tex_ctx.moveTo(-10,0)
    tex_ctx.lineTo(10,0)
    tex_ctx.lineWidth=4
    tex_ctx.strokeStyle='rgb(255,255,255)'
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(150,255,150)'
    tex_ctx.fillRect(128*4,128,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(200,200,200)'
    tex_ctx.lineWidth=4
    tex_ctx.beginPath()
    tex_ctx.translate(256*2+128*0.5,128+128/2)
    tex_ctx.scale(1.2,1.2)
    
    for(let i=0;i<4;i++){
        
        tex_ctx.rotate(Math.PI*0.5)
        tex_ctx.moveTo(-8,0)
        tex_ctx.bezierCurveTo(-40,-60,40,-60,8,0)
    }
    
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-10)
    tex_ctx.lineTo(0,10)
    tex_ctx.moveTo(-10,0)
    tex_ctx.lineTo(10,0)
    tex_ctx.lineWidth=4
    tex_ctx.strokeStyle='rgb(255,255,255)'
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(224, 0, 0)'
    tex_ctx.fillRect(128*5,128,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(255, 98, 0)'
    tex_ctx.lineWidth=4
    tex_ctx.beginPath()
    tex_ctx.translate(256*2.5+128*0.5,128+128/2)
    tex_ctx.moveTo(0,-40)
    tex_ctx.bezierCurveTo(-35,0,-32,42,0,45)
    tex_ctx.moveTo(0,-40)
    tex_ctx.bezierCurveTo(35,0,32,42,0,45)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(247, 56, 3)'
    tex_ctx.beginPath()
    tex_ctx.scale(0.6,0.6)
    tex_ctx.translate(0,20)
    tex_ctx.moveTo(0,-40)
    tex_ctx.bezierCurveTo(-35,0,-32,42,0,45)
    tex_ctx.moveTo(0,-40)
    tex_ctx.bezierCurveTo(35,0,32,42,0,45)
    tex_ctx.fill()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(232, 232, 232)'
    tex_ctx.fillRect(128*6,128,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0,0.8)'
    tex_ctx.fillStyle='rgb(255, 234, 117)'
    tex_ctx.lineWidth=4
    tex_ctx.translate(128*6,128)
    tex_ctx.beginPath()
    tex_ctx.arc(128/2,128/2,45,0,6)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.translate(128/2,128/2)
    
    for(let i=Math.PI*0.25;i<Math.PI;i+=Math.PI*2/4){
        
        tex_ctx.moveTo(Math.sin(i)*45,Math.cos(i)*45)
        tex_ctx.lineTo(Math.sin(i)*-45,Math.cos(i)*-45)
    }
    
    tex_ctx.stroke()
    tex_ctx.scale(0.46,0.46)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(0,0,0,0.3)'
    tex_ctx.lineWidth=5
    tex_ctx.strokeStyle='rgb(0,0,0,0.4)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle='rgb(255,255,255)'
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,25,0,6)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(157, 242, 100)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle='rgb(226, 255, 138)'
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(232, 232, 232)'
    tex_ctx.fillRect(128*7,128,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0,0.8)'
    tex_ctx.fillStyle='rgb(255, 234, 117)'
    tex_ctx.lineWidth=4
    tex_ctx.translate(128*7,128)
    tex_ctx.beginPath()
    tex_ctx.arc(128/2,128/2,45,0,6)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.translate(128/2,128/2)
    
    for(let i=Math.PI*0.25;i<Math.PI;i+=Math.PI*2/4){
        
        tex_ctx.moveTo(Math.sin(i)*45,Math.cos(i)*45)
        tex_ctx.lineTo(Math.sin(i)*-45,Math.cos(i)*-45)
    }
    
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,25,0,6)
    tex_ctx.closePath()
    tex_ctx.fillStyle='rgb(255, 206, 8)'
    tex_ctx.fill()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(224, 0, 0)'
    tex_ctx.fillRect(0,128*2,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(255, 98, 0)'
    tex_ctx.lineWidth=4
    tex_ctx.beginPath()
    tex_ctx.scale(0.4,0.4)
    tex_ctx.translate(85,782)
    tex_ctx.moveTo(0,-40)
    tex_ctx.bezierCurveTo(-35,0,-32,42,0,45)
    tex_ctx.moveTo(0,-40)
    tex_ctx.bezierCurveTo(35,0,32,42,0,45)
    tex_ctx.translate(134,0)
    tex_ctx.moveTo(0,-40)
    tex_ctx.bezierCurveTo(-35,0,-32,42,0,45)
    tex_ctx.moveTo(0,-40)
    tex_ctx.bezierCurveTo(35,0,32,42,0,45)
    tex_ctx.translate(-65,-68)
    tex_ctx.moveTo(0,-40)
    tex_ctx.bezierCurveTo(-35,0,-32,42,0,45)
    tex_ctx.moveTo(0,-40)
    tex_ctx.bezierCurveTo(35,0,32,42,0,45)
    tex_ctx.translate(0,129)
    tex_ctx.moveTo(0,-40)
    tex_ctx.bezierCurveTo(-35,0,-32,42,0,45)
    tex_ctx.moveTo(0,-40)
    tex_ctx.bezierCurveTo(35,0,32,42,0,45)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(247, 56, 3)'
    tex_ctx.beginPath()
    tex_ctx.scale(0.6,0.6)
    tex_ctx.translate(0,20)
    tex_ctx.moveTo(0,-40)
    tex_ctx.bezierCurveTo(-35,0,-32,42,0,45)
    tex_ctx.moveTo(0,-40)
    tex_ctx.bezierCurveTo(35,0,32,42,0,45)
    tex_ctx.translate(-115,-102)
    tex_ctx.moveTo(0,-40)
    tex_ctx.bezierCurveTo(-35,0,-32,42,0,45)
    tex_ctx.moveTo(0,-40)
    tex_ctx.bezierCurveTo(35,0,32,42,0,45)
    tex_ctx.translate(115,-110)
    tex_ctx.moveTo(0,-40)
    tex_ctx.bezierCurveTo(-35,0,-32,42,0,45)
    tex_ctx.moveTo(0,-40)
    tex_ctx.bezierCurveTo(35,0,32,42,0,45)
    tex_ctx.translate(105,106)
    tex_ctx.moveTo(0,-40)
    tex_ctx.bezierCurveTo(-35,0,-32,42,0,45)
    tex_ctx.moveTo(0,-40)
    tex_ctx.bezierCurveTo(35,0,32,42,0,45)
    tex_ctx.fill()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(214, 0, 0)'
    tex_ctx.fillRect(128,256,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(20,0,0)'
    tex_ctx.lineWidth=4
    tex_ctx.beginPath()
    tex_ctx.translate(128+128*0.5,256+128/2)
    tex_ctx.moveTo(0,-40)
    tex_ctx.bezierCurveTo(-35,0,-32,42,0,45)
    tex_ctx.moveTo(0,-40)
    tex_ctx.bezierCurveTo(35,0,32,42,0,45)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(100,0,0)'
    tex_ctx.beginPath()
    tex_ctx.scale(0.6,0.6)
    tex_ctx.translate(0,20)
    tex_ctx.moveTo(0,-40)
    tex_ctx.bezierCurveTo(-35,0,-32,42,0,45)
    tex_ctx.moveTo(0,-40)
    tex_ctx.bezierCurveTo(35,0,32,42,0,45)
    tex_ctx.fill()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(130,130,130)'
    tex_ctx.fillRect(128*2,256,128,128)
    tex_ctx.strokeStyle='rgb(130,130,130)'
    tex_ctx.fillStyle='rgb(200,200,200)'
    tex_ctx.lineWidth=4
    tex_ctx.translate(128*2+128*0.5,256+128/2)
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,30,0,6)
    tex_ctx.rect(-5,0,10,64)
    tex_ctx.rect(-10,-50,20,7)
    tex_ctx.rect(-3,-56,7,20)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-20)
    tex_ctx.lineTo(20,20)
    tex_ctx.moveTo(20,-20)
    tex_ctx.lineTo(-20,20)
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(47, 201, 75)'
    tex_ctx.fillRect(128*3,256,128,128)
    tex_ctx.fillStyle='rgb(22, 94, 25)'
    tex_ctx.translate(128*3+128*0.5,256+128/2)
    tex_ctx.beginPath()
    tex_ctx.rect(-44,4,32,30)
    tex_ctx.rect(-3,11,32,17)
    tex_ctx.rect(-33,-28,51,49)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(255,255,255)'
    tex_ctx.fillRect(10,-35,15,15)
    tex_ctx.fillStyle='rgb(0,0,0)'
    tex_ctx.fillRect(19,-33,5,5)
    tex_ctx.rotate(-0.5)
    tex_ctx.fillStyle='rgb(255,40,40)'
    tex_ctx.fillRect(18,3,28,5)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(255,255,0)'
    tex_ctx.fillRect(128*4,256,128,128)
    tex_ctx.fillStyle='rgb(0,0,255)'
    tex_ctx.translate(128*4+128*0.5,256+128*0.5)
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,10)
    tex_ctx.bezierCurveTo(-36,-1,-36,-45,-9,-50)
    tex_ctx.moveTo(0,10)
    tex_ctx.bezierCurveTo(35,-1,21,-54,-9,-50)
    tex_ctx.fill()
    tex_ctx.strokeStyle='rgb(200,200,200)'
    tex_ctx.lineWidth=9
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,10)
    tex_ctx.bezierCurveTo(-11,22,-5,41,9,30)
    tex_ctx.bezierCurveTo(57,22,-5,61,9,51)
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(255,255,0)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-5,-38)
    tex_ctx.lineTo(8,-25)
    tex_ctx.lineTo(-17,-25)
    tex_ctx.rect(-9,-25,10,20)
    tex_ctx.fill()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(255,255,0)'
    tex_ctx.fillRect(128*5,256,128,128)
    tex_ctx.fillStyle='rgb(0,100,255)'
    tex_ctx.translate(128*5+128*0.5,256+128*0.5)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-40,35)
    tex_ctx.lineTo(36,18)
    tex_ctx.lineTo(20,-20)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(10,255,100)'
    tex_ctx.beginPath()
    tex_ctx.arc(14,0,6,0,6)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(190, 10, 255)'
    tex_ctx.beginPath()
    tex_ctx.arc(-1,12,5,0,6)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(255, 190, 10)'
    tex_ctx.beginPath()
    tex_ctx.arc(-15,22,3,0,6)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(10, 255, 239)'
    tex_ctx.beginPath()
    tex_ctx.arc(17,17,3,0,6)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(222, 60, 95)'
    tex_ctx.fillRect(-32,-28,8,8)
    tex_ctx.fillStyle='rgb(37, 222, 145)'
    tex_ctx.fillRect(39,-49,8,8)
    tex_ctx.fillStyle='rgb(20, 102, 168)'
    tex_ctx.fillRect(39,-10,8,8)
    tex_ctx.fillStyle='rgb(255, 3, 3)'
    tex_ctx.fillRect(-6,-44,8,8)
    tex_ctx.fillStyle='rgb(216, 216, 232)'
    tex_ctx.fillRect(-35,-1,8,8)
    tex_ctx.fillStyle='rgb(173, 60, 181)'
    tex_ctx.fillRect(21,34,8,8)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(30,255,100)'
    tex_ctx.fillRect(128*6,256,128,128)
    tex_ctx.fillStyle='rgb(255,50,255)'
    tex_ctx.translate(128*6+128*0.5,256+128*0.5)
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,21,0,6)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.arc(-18,-18,13,0,6)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.arc(-3,-18,8,0,6)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.arc(20,-6,13,0,6)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.arc(15,11,10,0,6)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.arc(-9,14,15,0,6)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.arc(17,-18,13,0,6)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.arc(-24,-1,13,0,6)
    tex_ctx.fill()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(30,255,100)'
    tex_ctx.fillRect(128*7,256,128,128)
    tex_ctx.fillStyle='rgb(255,50,255)'
    tex_ctx.strokeStyle='rgb(255,50,255)'
    tex_ctx.lineWidth=3
    tex_ctx.translate(128*7+128*0.5,256+128*0.5)
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,0)
    tex_ctx.arc(0,20,22,0,7)
    tex_ctx.moveTo(-15,-10)
    tex_ctx.lineTo(-15,-47)
    tex_ctx.moveTo(0,-10)
    tex_ctx.lineTo(0,-58)
    tex_ctx.moveTo(15,-10)
    tex_ctx.lineTo(15,-47)
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(0,256+128,128,128)
    tex_ctx.fillStyle='rgb(255,150,0)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.translate(+128*0.5,256+128*1.5)
    tex_ctx.rotate(15*Math.PI/180)
    tex_ctx.lineWidth=5
    tex_ctx.strokeRect(-3,-37,10,20)
    tex_ctx.fillRect(-3,-37,10,20)
    tex_ctx.lineWidth=25
    tex_ctx.strokeRect(-9,-10,20,40)
    tex_ctx.strokeStyle='rgb(255,255,255)'
    tex_ctx.strokeRect(-7,-8,16,36)
    tex_ctx.fillStyle='rgb(255,50,255)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(11,-10)
    tex_ctx.lineTo(-11,-10)
    tex_ctx.lineTo(-11,25)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(30,255,100)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(11,-10)
    tex_ctx.lineTo(11,25)
    tex_ctx.lineTo(-11,25)
    tex_ctx.fill()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128,256+128,128,128)
    tex_ctx.fillStyle='rgb(0,0,0,0.3)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.translate(128+128*0.5,256+128*1.5+12)
    tex_ctx.scale(1.195,1.15)
    // tex_ctx.rotate(15*Math.PI/180)
    tex_ctx.lineWidth=3
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,20)
    tex_ctx.bezierCurveTo(-23,20,-20,0,-21,-2)
    tex_ctx.bezierCurveTo(-24,-24,-7,-14,-5,-37)
    tex_ctx.scale(-1,1)
    tex_ctx.moveTo(0,20)
    tex_ctx.bezierCurveTo(-23,20,-20,0,-21,-2)
    tex_ctx.bezierCurveTo(-24,-24,-7,-14,-5,-37)
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,20)
    tex_ctx.lineTo(-5,-37)
    tex_ctx.lineTo(5,-37)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,20)
    tex_ctx.bezierCurveTo(-23,20,-20,0,-19,-2)
    tex_ctx.lineTo(19,-2)
    tex_ctx.bezierCurveTo(20,20,3,19,0,20)
    tex_ctx.fillStyle='rgb(225,225,150)'
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(100,55,0)'
    tex_ctx.lineWidth=5
    tex_ctx.strokeRect(-6,-45,12,7)
    tex_ctx.fillRect(-6,-45,12,7)
    tex_ctx.fillStyle='rgb(200,100,40)'
    tex_ctx.fillRect(-21,-9,40,7)
    tex_ctx.fillStyle='rgb(255,255,255)'
    tex_ctx.beginPath()
    tex_ctx.arc(0,-4,9,0,7)
    tex_ctx.fill()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*2,256+128,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.translate(128*2+128*0.5,256+128*1.5+12)
    tex_ctx.lineWidth=3
    tex_ctx.fillStyle='rgb(100,255,100)'
    tex_ctx.translate(-3,-13)
    tex_ctx.rotate(35)
    tex_ctx.beginPath()
    tex_ctx.translate(-25,0)
    tex_ctx.moveTo(-25,10)
    tex_ctx.bezierCurveTo(-25,-5,25,-5,25,10)
    tex_ctx.lineTo(25,17)
    tex_ctx.bezierCurveTo(25,35,-25,35,-25,17)
    tex_ctx.lineTo(-25,10)
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(255,255,80)'
    tex_ctx.rotate(-35)
    tex_ctx.beginPath()
    tex_ctx.translate(-34,-18)
    tex_ctx.moveTo(-25,10)
    tex_ctx.bezierCurveTo(-25,-5,25,-5,25,10)
    tex_ctx.lineTo(25,17)
    tex_ctx.bezierCurveTo(25,35,-25,35,-25,17)
    tex_ctx.lineTo(-25,10)
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(0,0,0,0.3)'
    tex_ctx.translate(20,11)
    tex_ctx.scale(0.6,0.4)
    tex_ctx.beginPath()
    tex_ctx.translate(-34,-18)
    tex_ctx.moveTo(-25,10)
    tex_ctx.bezierCurveTo(-25,-5,25,-5,25,10)
    tex_ctx.lineTo(25,17)
    tex_ctx.bezierCurveTo(25,35,-25,35,-25,17)
    tex_ctx.lineTo(-25,10)
    tex_ctx.fill()
    tex_ctx.translate(44,-32)
    tex_ctx.rotate(35.235)
    tex_ctx.beginPath()
    tex_ctx.translate(-34,-18)
    tex_ctx.moveTo(-25,10)
    tex_ctx.bezierCurveTo(-25,-5,25,-5,25,10)
    tex_ctx.lineTo(25,17)
    tex_ctx.bezierCurveTo(25,35,-25,35,-25,17)
    tex_ctx.lineTo(-25,10)
    tex_ctx.fill()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*3,256+128,128,128)
    tex_ctx.fillStyle='rgb(0,0,0,0.3)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.translate(128*3+128*0.5,256+128*1.5+12)
    tex_ctx.scale(1.195,1.15)
    // tex_ctx.rotate(15*Math.PI/180)
    tex_ctx.lineWidth=3
    tex_ctx.beginPath()
    tex_ctx.moveTo(1,26)
    tex_ctx.lineTo(-15,16)
    tex_ctx.lineTo(-1,-29)
    tex_ctx.lineTo(24,-23)
    tex_ctx.lineTo(19,21)
    tex_ctx.lineTo(1,26)
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(200,0,0)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(1,25)
    tex_ctx.lineTo(-13,16)
    tex_ctx.lineTo(-7,-5)
    tex_ctx.lineTo(21,2)
    tex_ctx.lineTo(18,21)
    tex_ctx.lineTo(1,25)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(100,100,100)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-2,-31)
    tex_ctx.lineTo(1,-41)
    tex_ctx.lineTo(27,-35)
    tex_ctx.lineTo(26,-23)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(0,0,0,0.3)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(1,25)
    tex_ctx.lineTo(15,-38)
    tex_ctx.lineTo(27,-34)
    tex_ctx.lineTo(21,2)
    tex_ctx.lineTo(18,21)
    tex_ctx.lineTo(1,25)
    tex_ctx.fill()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*4,256+128,128,128)
    tex_ctx.fillStyle='rgb(0,0,0,0.3)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.translate(128*4+128*0.5,256+128*1.5+12)
    tex_ctx.scale(1.195,1.15)
    // tex_ctx.rotate(15*Math.PI/180)
    tex_ctx.lineWidth=3
    tex_ctx.beginPath()
    tex_ctx.moveTo(1,26)
    tex_ctx.lineTo(-15,16)
    tex_ctx.lineTo(-1,-29)
    tex_ctx.lineTo(24,-23)
    tex_ctx.lineTo(19,21)
    tex_ctx.lineTo(1,26)
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(0,0,200)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(1,25)
    tex_ctx.lineTo(-13,16)
    tex_ctx.lineTo(-7,-5)
    tex_ctx.lineTo(21,2)
    tex_ctx.lineTo(18,21)
    tex_ctx.lineTo(1,25)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(100,100,100)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-2,-31)
    tex_ctx.lineTo(1,-41)
    tex_ctx.lineTo(27,-35)
    tex_ctx.lineTo(26,-23)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(0,0,0,0.3)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(1,25)
    tex_ctx.lineTo(15,-38)
    tex_ctx.lineTo(27,-34)
    tex_ctx.lineTo(21,2)
    tex_ctx.lineTo(18,21)
    tex_ctx.lineTo(1,25)
    tex_ctx.fill()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*5,256+128,128,128)
    tex_ctx.fillStyle='rgb(163, 90, 18)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.translate(128*5+128*0.5,256+128*1.5+12)
    tex_ctx.lineWidth=3
    tex_ctx.beginPath()
    tex_ctx.moveTo(-40,-5)
    tex_ctx.bezierCurveTo(-40,45,40,45,40,-5)
    tex_ctx.bezierCurveTo(40,-35,-40,-35,-40,-5)
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.lineWidth=1.75
    tex_ctx.fillStyle='rgb(255,255,200)'
    tex_ctx.translate(0,-2.5)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-32,-5)
    tex_ctx.bezierCurveTo(-32,15,32,15,32,-5)
    tex_ctx.bezierCurveTo(32,-25,-32,-25,-32,-5)
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(227, 82, 208)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(21,6)
    tex_ctx.lineTo(28,-45)
    tex_ctx.lineTo(45,-55)
    tex_ctx.lineTo(42,-59)
    tex_ctx.lineTo(23,-47)
    tex_ctx.lineTo(15,8)
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*6,256+128,128,128)
    tex_ctx.fillStyle='rgb(0,0,0,0.3)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.translate(128*6+128*0.5,256+128*1.5+12)
    tex_ctx.rotate(15*Math.PI/180)
    tex_ctx.lineWidth=3
    tex_ctx.beginPath()
    tex_ctx.moveTo(-25,22)
    tex_ctx.lineTo(25,22)
    tex_ctx.lineTo(5,-35)
    tex_ctx.lineTo(5,-50)
    tex_ctx.lineTo(-5,-50)
    tex_ctx.lineTo(-5,-35)
    tex_ctx.lineTo(-25,22)
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(200,0,200)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-24,21)
    tex_ctx.lineTo(24,21)
    tex_ctx.lineTo(14,-4)
    tex_ctx.lineTo(-14,-4)
    tex_ctx.fill()
    tex_ctx.lineWidth=3.5
    tex_ctx.fillStyle='rgb(94, 50, 13)'
    tex_ctx.strokeRect(-8,-56,15,8)
    tex_ctx.fillRect(-8,-56,15,8)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*7,256+128,128,128)
    let s=tex_ctx.createLinearGradient(0,-25,0,25)
    s.addColorStop(0,'rgb(0,0,0,0.3)')
    s.addColorStop(0.4,'rgb(0,0,0,0.3)')
    s.addColorStop(0.4,'rgb(255,0,50)')
    s.addColorStop(0.6,'rgb(255,0,50)')
    s.addColorStop(0.6,'rgb(50,255,50)')
    tex_ctx.fillStyle=s
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.translate(128*7+128*0.5-10,256+128*1.5+9)
    tex_ctx.lineWidth=3
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,30)
    tex_ctx.bezierCurveTo(-20,40,20,40,20,30)
    tex_ctx.bezierCurveTo(60,30,60,-30,20,-30)
    tex_ctx.bezierCurveTo(20,-40,-20,-40,-20,-30)
    tex_ctx.bezierCurveTo(-30,-30,-30,30,-20,30)
    tex_ctx.moveTo(-20,-30)
    tex_ctx.bezierCurveTo(-20,-20,20,-20,20,-30)
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.moveTo(25,20)
    tex_ctx.bezierCurveTo(50,20,50,-20,25,-20)
    tex_ctx.lineTo(25,20)
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.rotate(-0.4)
    s=tex_ctx.createLinearGradient(0,-52,0,-6)
    s.addColorStop(0,'rgb(255,0,0)')
    s.addColorStop(0.15,'rgb(255,0,0)')
    s.addColorStop(0.15,'rgb(255,255,255)')
    s.addColorStop(0.3,'rgb(255,255,255)')
    s.addColorStop(0.3,'rgb(255,0,0)')
    s.addColorStop(0.45,'rgb(255,0,0)')
    s.addColorStop(0.45,'rgb(255,255,255)')
    s.addColorStop(0.6,'rgb(255,255,255)')
    s.addColorStop(0.6,'rgb(255,0,0)')
    s.addColorStop(0.75,'rgb(255,0,0)')
    s.addColorStop(0.75,'rgb(255,255,255)')
    s.addColorStop(0.9,'rgb(255,255,255)')
    s.addColorStop(0.9,'rgb(255,0,0)')
    tex_ctx.fillStyle=s
    tex_ctx.fillRect(-3,-60,5,55)
    tex_ctx.rotate(0.4)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-30)
    tex_ctx.bezierCurveTo(-20,-20,20,-20,20,-30)
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(255,0,50)'
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,10,0,7)
    tex_ctx.fill()
    tex_ctx.strokeStyle='rgb(255,255,255)'
    tex_ctx.lineWidth=3
    tex_ctx.beginPath()
    tex_ctx.moveTo(2,-5)
    tex_ctx.bezierCurveTo(-4,-5,-4,0,0,0)
    tex_ctx.bezierCurveTo(2,0,2,5,-2,5)
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*0,256+256,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(138, 88, 18)'
    tex_ctx.translate(128*0+128*0.5,256+128*2.5+9)
    tex_ctx.scale(0.9*1.5,1.5)
    tex_ctx.lineWidth=3
    tex_ctx.beginPath()
    tex_ctx.moveTo(-30,2)
    tex_ctx.bezierCurveTo(-46,-23,-33,-30,-20,-15)
    tex_ctx.bezierCurveTo(-7,-38,-11,-38,9,-15)
    tex_ctx.bezierCurveTo(37,-36,32,-6,20,4)
    tex_ctx.bezierCurveTo(23,19,15,31,-7,12)
    tex_ctx.bezierCurveTo(-35,31,-29,12,-30,-5)
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.strokeStyle='rgb(255,255,255)'
    tex_ctx.lineWidth=3
    tex_ctx.beginPath()
    tex_ctx.moveTo(-12,-12)
    tex_ctx.lineTo(-10,-5)
    tex_ctx.moveTo(-2,-12)
    tex_ctx.lineTo(0,-5)
    tex_ctx.moveTo(-9,2)
    tex_ctx.lineTo(-2,5)
    tex_ctx.lineTo(4,1)
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*1,256+256,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(95, 49, 232)'
    tex_ctx.translate(128*1+128*0.5,256+128*2.5+9)
    tex_ctx.scale(0.9*1.5,1.5)
    tex_ctx.lineWidth=3
    tex_ctx.beginPath()
    tex_ctx.ellipse(0,0,30,25,-0.2,0,7)
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(78, 48, 171)'
    tex_ctx.beginPath()
    tex_ctx.ellipse(-3,-12,15,8,-0.2,0,7)
    tex_ctx.fill()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*2,256+256,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(255,0,25)'
    tex_ctx.translate(128*2+128*0.5,256+128*2.5+9)
    tex_ctx.scale(0.9*1.5,1.5)
    tex_ctx.lineWidth=3
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-14)
    tex_ctx.lineTo(13,-20)
    tex_ctx.bezierCurveTo(28,-23,21,13,9,20)
    tex_ctx.bezierCurveTo(-54,-20,-4,-14,-20,-14)
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.strokeStyle='rgb(0,200,0)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-1,-17)
    tex_ctx.bezierCurveTo(-9,-28,-6,-29,-14,-31)
    tex_ctx.moveTo(-1,-17)
    tex_ctx.bezierCurveTo(2,-28,2,-29,-1,-33)
    tex_ctx.moveTo(-1,-17)
    tex_ctx.bezierCurveTo(12,-28,0,-29,10,-31)
    tex_ctx.moveTo(-1,-17)
    tex_ctx.bezierCurveTo(-9,-17,-6,-29,-20,-24)
    tex_ctx.stroke()
    tex_ctx.lineWidth=1.9
    tex_ctx.strokeStyle='rgb(250,170,100)'
    tex_ctx.beginPath()
    tex_ctx.arc(-11,-9,1,0,7)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.arc(10,-9,1,0,7)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.arc(15,-1,1,0,7)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.arc(0,-6,1,0,7)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.arc(2,3,1,0,7)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.arc(10,11,1,0,7)
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(247, 204, 32)'
    tex_ctx.fillRect(128*3,256+256,128,128)
    tex_ctx.fillStyle='rgb(222, 186, 42)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.translate(128*3+128*0.5,256+128*2.5+9)
    tex_ctx.lineWidth=5
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,30)
    tex_ctx.bezierCurveTo(-36,31,-21,-5,-14,-12)
    tex_ctx.bezierCurveTo(10,-32,-19,-41,-9,-39)
    tex_ctx.bezierCurveTo(40,-17,18,31,0,30)
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(143, 0, 232)'
    tex_ctx.fillRect(128*4,256+256,128,128)
    tex_ctx.fillStyle='rgb(222, 186, 42)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.translate(128*4+128*0.5,256+128*2.5)
    tex_ctx.lineWidth=9
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-20)
    tex_ctx.lineTo(0,25)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.ellipse(0,-7,30,20,0,3.5,5.9)
    tex_ctx.stroke()
    tex_ctx.strokeStyle='rgb(255,200,0)'
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,56,0.2,Math.PI*0.5-0.2)
    tex_ctx.stroke()
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,56,0.2,Math.PI*0.5-0.2)
    tex_ctx.stroke()
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,56,0.2,Math.PI*0.5-0.2)
    tex_ctx.stroke()
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,56,0.2,Math.PI*0.5-0.2)
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(143, 0, 232)'
    tex_ctx.fillRect(128*5,256+256,128,128)
    tex_ctx.fillStyle='rgb(222, 186, 42)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.translate(128*5+128*0.5,256+128*2.5)
    tex_ctx.lineWidth=9
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-20)
    tex_ctx.lineTo(0,25)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.ellipse(0,-7,30,20,0,3.5,5.9)
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(143, 0, 232)'
    tex_ctx.fillRect(128*6,256+256,128,128)
    tex_ctx.fillStyle='rgb(222, 186, 42)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.translate(128*6+128*0.5,256+128*2.5)
    tex_ctx.lineWidth=9
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-20)
    tex_ctx.lineTo(0,25)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.ellipse(0,-7,30,20,0,3.5,5.9)
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*6,256*2)
    tex_ctx.fillStyle='rgb(255, 149, 125)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.strokeStyle='rgb(255, 20, 0)'
    tex_ctx.fillStyle='rgb(255, 20, 0)'
    tex_ctx.lineWidth=6
    tex_ctx.translate(128/2,128/2)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-45,-30)
    tex_ctx.bezierCurveTo(-45,-40,-20,-40,-13,-23)
    tex_ctx.moveTo(-19,40)
    tex_ctx.bezierCurveTo(-34,7,32,8,32,40)
    tex_ctx.scale(-1,1)
    tex_ctx.moveTo(-45,-30)
    tex_ctx.bezierCurveTo(-45,-40,-20,-40,-13,-23)
    tex_ctx.stroke()
    tex_ctx.scale(-1,1)
    tex_ctx.beginPath()
    tex_ctx.ellipse(-24,-11,7,10,0,0,7)
    tex_ctx.ellipse(24,-11,7,10,0,0,7)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(255, 149, 125)'
    tex_ctx.beginPath()
    tex_ctx.ellipse(-28,-5,2,4,0,0,7)
    tex_ctx.ellipse(21,-5,2,4,0,0,7)
    tex_ctx.fill()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*7,256*2)
    tex_ctx.fillStyle='rgb(200,200,200)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.strokeStyle='rgb(0, 0, 0)'
    s=tex_ctx.createLinearGradient(0,48,0,-39)
    s.addColorStop(0,'rgb(255,255,0)')
    s.addColorStop(1,'rgb(255,255,255)')
    tex_ctx.fillStyle=s
    tex_ctx.lineWidth=6
    tex_ctx.translate(128/2,128/2)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-40,-40)
    tex_ctx.lineTo(40,-40)
    tex_ctx.lineTo(0,40)
    tex_ctx.lineTo(-40,-40)
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(0,128*5)
    tex_ctx.fillStyle='rgb(166, 114, 30)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.strokeStyle='rgb(235, 208, 89)'
    tex_ctx.lineWidth=10
    tex_ctx.translate(128/2,128/2)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-50,-40)
    tex_ctx.bezierCurveTo(-28,0,20,-58,50,-40)
    tex_ctx.translate(0,30)
    tex_ctx.moveTo(-50,-40)
    tex_ctx.bezierCurveTo(-28,0,20,-58,50,-40)
    tex_ctx.translate(0,30)
    tex_ctx.moveTo(-50,-40)
    tex_ctx.bezierCurveTo(-28,0,20,-58,50,-40)
    tex_ctx.translate(0,-60)
    tex_ctx.stroke()
    tex_ctx.strokeStyle='rgb(255,255,255)'
    tex_ctx.beginPath()
    tex_ctx.lineWidth=8
    
    for(let i=0;i<10;i++){
        
        let x=(i*120410.12425+122.099)%1000,y=(i*42930.95050+628.852)%1000
        
        x*=0.001
        y*=0.001
        
        x-=0.5
        y-=0.5
        
        x*=120
        y*=120
        tex_ctx.moveTo(x-10,y+20)
        tex_ctx.lineTo(x-10,y+20)
    }
    
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillRect(128,256*2+128,128,128)
    tex_ctx.strokeStyle='rgb(255,255,255)'
    tex_ctx.fillStyle='rgb(122, 52, 2)'
    tex_ctx.lineWidth=4
    tex_ctx.beginPath()
    tex_ctx.translate(128+128/2,256*2.5+128/2)
    
    for(let i=0,_i=0;i<=Math.PI*2;i+=Math.PI*2/16,_i++){
        
        let r=_i%2===0?20:60
        tex_ctx.lineTo(Math.cos(i)*r,Math.sin(i)*r)
    }
    
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,40,0,7)
    tex_ctx.fill()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*2,256+256*1.5,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(255,255,25)'
    tex_ctx.translate(128*2+128*0.5,256+128*3.5)
    tex_ctx.scale(1.2,1.3)
    tex_ctx.lineWidth=3
    tex_ctx.beginPath()
    tex_ctx.moveTo(-9,-25)
    tex_ctx.lineTo(15,-15)
    tex_ctx.lineTo(35,10)
    tex_ctx.bezierCurveTo(20,30,0,30,-6,29)
    tex_ctx.lineTo(-30,20)
    tex_ctx.lineTo(-9,-25)
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(0,0,0,0.1)'    
    tex_ctx.beginPath()
    tex_ctx.moveTo(15,-15)
    tex_ctx.lineTo(35,10)
    tex_ctx.bezierCurveTo(20,30,0,30,-6,29)
    tex_ctx.fill()
    tex_ctx.strokeStyle='rgb(0,0,0,0.2)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-3,-15)
    tex_ctx.lineTo(-7,-6)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.moveTo(-13,24)
    tex_ctx.lineTo(-13+3,24-6)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.moveTo(21,24)
    tex_ctx.lineTo(19,18)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.moveTo(12,26)
    tex_ctx.lineTo(13,18)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.moveTo(29,16)
    tex_ctx.lineTo(26,14)
    tex_ctx.stroke()
    tex_ctx.strokeStyle='rgb(255,255,255)'
    tex_ctx.lineWidth=5
    tex_ctx.beginPath()
    tex_ctx.moveTo(-8,-19)
    tex_ctx.lineTo(-18,1)
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*3,256+256*1.5,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(252,231,202)'
    tex_ctx.translate(128*3+128*0.5+16,256+128*3.5+10)
    tex_ctx.scale(1.5,1.6)
    tex_ctx.rotate(0.4)
    tex_ctx.lineWidth=3
    tex_ctx.beginPath()
    tex_ctx.moveTo(-9,-25)
    tex_ctx.bezierCurveTo(-33,-7,-38,19,-20,20)
    tex_ctx.bezierCurveTo(16,27,-4,-17,-9,-25)
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.lineWidth=3
    tex_ctx.beginPath()
    tex_ctx.strokeStyle='rgb(98,99,90)'
    tex_ctx.moveTo(-9,-25)
    tex_ctx.bezierCurveTo(-21,-7,-25,19,-20,20)
    tex_ctx.moveTo(-9,-25)
    tex_ctx.bezierCurveTo(-6,-7,-17,19,-20,20)
    tex_ctx.moveTo(-9,-25)
    tex_ctx.bezierCurveTo(-28,-7,-25,19,-20,20)
    tex_ctx.moveTo(-9,-25)
    tex_ctx.bezierCurveTo(-6,-7,6,19,-20,20)
    tex_ctx.moveTo(-9,-25)
    tex_ctx.bezierCurveTo(-33,-7,-31,19,-20,20)
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*4,256+256*1.5,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(255,255,0)'
    tex_ctx.translate(128*4+128*0.5,256+128*3.5)
    tex_ctx.lineWidth=5
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-30)
    tex_ctx.bezierCurveTo(-29,-32,-45,43,0,40)
    tex_ctx.moveTo(0,-30)
    tex_ctx.bezierCurveTo(29,-32,45,43,0,40)
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(0,0,0,0.7)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-28,0)
    tex_ctx.bezierCurveTo(-28,15,28,15,28,0)
    tex_ctx.lineTo(28,15)
    tex_ctx.bezierCurveTo(28,25,-28,25,-28,15)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(0,0,0,0.15)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(20,-20)
    tex_ctx.bezierCurveTo(28,15,-28,27,-23,30)
    tex_ctx.bezierCurveTo(15,64,33,22,28,-3)
    tex_ctx.fill()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*5,256+256*1.5,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(220,220,220)'
    tex_ctx.translate(128*5+128*0.5,256+128*3.5)
    tex_ctx.lineWidth=5
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-30)
    tex_ctx.bezierCurveTo(-29,-32,-45,43,0,40)
    tex_ctx.moveTo(0,-30)
    tex_ctx.bezierCurveTo(29,-32,45,43,0,40)
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.strokeStyle='rgb(235,235,235)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-21,-12)
    tex_ctx.bezierCurveTo(-14,-11,2,-14,-3,-28)
    tex_ctx.moveTo(14,-19)
    tex_ctx.bezierCurveTo(6,6,-8,3,-24,0)
    tex_ctx.moveTo(24,1)
    tex_ctx.bezierCurveTo(6,27,-8,16,-25,15)
    tex_ctx.moveTo(22,20)
    tex_ctx.bezierCurveTo(6,36,-8,36,-20,30)
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(0,0,0,0.1)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(20,-20)
    tex_ctx.bezierCurveTo(36,46,-28,32,-23,30)
    tex_ctx.bezierCurveTo(15,64,33,22,28,-3)
    tex_ctx.fill()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*6,256+256*1.5,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(255,220,70)'
    tex_ctx.translate(128*6+128*0.5,256+128*3.5)
    tex_ctx.lineWidth=5
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-30)
    tex_ctx.bezierCurveTo(-29,-32,-45,43,0,40)
    tex_ctx.moveTo(0,-30)
    tex_ctx.bezierCurveTo(29,-32,45,43,0,40)
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.strokeStyle='rgb(235,205,0)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-21,-12)
    tex_ctx.bezierCurveTo(-14,-11,2,-14,-3,-28)
    tex_ctx.moveTo(14,-19)
    tex_ctx.bezierCurveTo(6,6,-8,3,-24,0)
    tex_ctx.moveTo(24,1)
    tex_ctx.bezierCurveTo(6,27,-8,16,-25,15)
    tex_ctx.moveTo(22,20)
    tex_ctx.bezierCurveTo(6,36,-8,36,-20,30)
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(0,0,0,0.1)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(20,-20)
    tex_ctx.bezierCurveTo(36,46,-28,32,-23,30)
    tex_ctx.bezierCurveTo(15,64,33,22,28,-3)
    tex_ctx.fill()
    tex_ctx.strokeStyle='white'
    function shinyCross(x,y,r,s){
        tex_ctx.translate(x,y)
        tex_ctx.rotate(r)
        tex_ctx.scale(s,s)
        tex_ctx.moveTo(-5,-25)
        tex_ctx.bezierCurveTo(-11,-25,-20,-15,-18,-10)
        tex_ctx.moveTo(-26,-25)
        tex_ctx.bezierCurveTo(-2,-25,-11,-15,-5,-12)
        tex_ctx.translate(-x,-y)
        tex_ctx.rotate(-r)
        tex_ctx.scale(1/s,1/s)
    }
    tex_ctx.beginPath()
    tex_ctx.moveTo(-5,-25)
    tex_ctx.bezierCurveTo(-11,-25,-20,-15,-18,-10)
    tex_ctx.stroke()
    tex_ctx.lineWidth='3'
    tex_ctx.beginPath()
    shinyCross(16,0,0,0.5)
    shinyCross(-20,0,10,0.5)
    shinyCross(20,40,1.5,0.6)
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*7,256+256*1.5,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(200,255,255)'
    tex_ctx.translate(128*7+128*0.5,256+128*3.5)
    tex_ctx.lineWidth=5
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-30)
    tex_ctx.bezierCurveTo(-29,-32,-45,43,0,40)
    tex_ctx.moveTo(0,-30)
    tex_ctx.bezierCurveTo(29,-32,45,43,0,40)
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(0,0,0,0.1)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(20,-20)
    tex_ctx.bezierCurveTo(36,46,-28,32,-23,30)
    tex_ctx.bezierCurveTo(15,64,33,22,28,-3)
    tex_ctx.fill()
    tex_ctx.strokeStyle='white'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-5,-25)
    tex_ctx.bezierCurveTo(-11,-25,-20,-15,-18,-10)
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(0,0,0,0.125)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-10)
    tex_ctx.bezierCurveTo(-10,-10,-10,20,0,20)
    tex_ctx.moveTo(0,-10)
    tex_ctx.bezierCurveTo(10,-10,10,20,0,20)
    tex_ctx.fill()
    tex_ctx.lineWidth='3'
    tex_ctx.beginPath()
    shinyCross(16,0,0,0.5)
    shinyCross(-20,0,10,0.5)
    shinyCross(26,36,102,0.5)
    shinyCross(-25,20,0,0.25)
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*0,256+256*2,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(163, 91, 218)'
    tex_ctx.translate(128*0+128*0.5,256+128*4.5)
    tex_ctx.lineWidth=5
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-30)
    tex_ctx.bezierCurveTo(-29,-32,-45,43,0,40)
    tex_ctx.moveTo(0,-30)
    tex_ctx.bezierCurveTo(29,-32,45,43,0,40)
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(0,0,0,0.7)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-28,0)
    tex_ctx.bezierCurveTo(-28,15,28,15,28,0)
    tex_ctx.lineTo(28,15)
    tex_ctx.bezierCurveTo(28,25,-28,25,-28,15)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(0,0,0,0.15)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(20,-20)
    tex_ctx.bezierCurveTo(28,15,-28,27,-23,30)
    tex_ctx.bezierCurveTo(15,64,33,22,28,-3)
    tex_ctx.fill()
    tex_ctx.strokeStyle='rgb(255,255,255,0.5)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-5,-25)
    tex_ctx.bezierCurveTo(-11,-25,-20,-15,-18,-10)
    tex_ctx.stroke()
    tex_ctx.lineWidth='2'
    tex_ctx.strokeStyle='rgb(255,255,255)'
    tex_ctx.beginPath()
    shinyCross(16,0,0,0.2)
    shinyCross(-20,0,10,0.22)
    shinyCross(20,40,1.5,0.26)
    shinyCross(-28,-46,15,0.22)
    shinyCross(17,45,-1.5,0.21)
    shinyCross(-5,-30,1,0.2)
    shinyCross(25,-20,1.5,0.26)
    tex_ctx.stroke()
    tex_ctx.scale(1,0.8)
    tex_ctx.textAlign='center'
    tex_ctx.font='25px cursive'
    tex_ctx.lineWidth='6'
    tex_ctx.strokeStyle='black'
    tex_ctx.strokeText('M',4,44)
    tex_ctx.strokeStyle='white'
    tex_ctx.font='25px cursive'
    tex_ctx.fillStyle='white'
    tex_ctx.fillText('M',4,44)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(255,0,0)'
    tex_ctx.fillRect(128*1,256+256*2,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(163, 91, 218)'
    tex_ctx.translate(128*1+128*0.5,256+128*4.5)
    tex_ctx.beginPath()
    tex_ctx.moveTo(14,43)
    tex_ctx.lineTo(-29,14)
    tex_ctx.lineTo(0,-2)
    tex_ctx.lineTo(-25,-15)
    tex_ctx.bezierCurveTo(-52,-34,-15,-56,3,-35)
    tex_ctx.lineTo(32,-5)
    tex_ctx.lineTo(1,16)
    tex_ctx.lineTo(14,43)
    tex_ctx.strokeStyle='white'
    tex_ctx.lineWidth=10
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(0,0,255)'
    tex_ctx.fillRect(128*2,256+256*2,128,128)
    tex_ctx.strokeStyle='rgb(0,0,255)'
    tex_ctx.fillStyle='rgb(163, 91, 218)'
    tex_ctx.translate(128*2+128*0.5,256+128*4.5)
    tex_ctx.beginPath()
    tex_ctx.moveTo(14,43)
    tex_ctx.lineTo(-29,14)
    tex_ctx.lineTo(0,-2)
    tex_ctx.lineTo(-25,-15)
    tex_ctx.bezierCurveTo(-52,-34,-15,-56,3,-35)
    tex_ctx.lineTo(32,-5)
    tex_ctx.lineTo(1,16)
    tex_ctx.lineTo(14,43)
    tex_ctx.strokeStyle='white'
    tex_ctx.lineWidth=10
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(0,0,0)'
    tex_ctx.fillRect(128*3,256+256*2,128,128)
    tex_ctx.strokeStyle='rgb(255,0,0)'
    tex_ctx.fillStyle='rgb(163, 91, 218)'
    tex_ctx.translate(128*3+128*0.5,256+128*4.5)
    tex_ctx.beginPath()
    tex_ctx.arc(0,15,36,0,7)
    tex_ctx.rect(-20,-24,40,10)
    tex_ctx.fillStyle=tex_ctx.strokeStyle='red'
    tex_ctx.lineWidth=5
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-25)
    tex_ctx.bezierCurveTo(0,-50,23,-23,30,-44)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.moveTo(10,-24)
    tex_ctx.bezierCurveTo(-20,0,23,28,-16,47)
    tex_ctx.bezierCurveTo(27,69,54,7,20,-15)
    tex_ctx.lineTo(20,-24)
    tex_ctx.fillStyle='white'
    tex_ctx.fill()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(0,0,0)'
    tex_ctx.fillRect(128*4,256+256*2,128,128)
    tex_ctx.strokeStyle='rgb(255,0,0)'
    tex_ctx.fillStyle='rgb(163, 91, 218)'
    tex_ctx.translate(128*4+128*0.5,256+128*4.5)
    tex_ctx.beginPath()
    tex_ctx.arc(0,15,36,0,7)
    tex_ctx.rect(-20,-24,40,10)
    tex_ctx.fillStyle=tex_ctx.strokeStyle='blue'
    tex_ctx.lineWidth=5
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-25)
    tex_ctx.bezierCurveTo(0,-50,23,-23,30,-44)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.moveTo(10,-24)
    tex_ctx.bezierCurveTo(-20,0,23,28,-16,47)
    tex_ctx.bezierCurveTo(27,69,54,7,20,-15)
    tex_ctx.lineTo(20,-24)
    tex_ctx.fillStyle='white'
    tex_ctx.fill()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(0,0,0)'
    tex_ctx.fillRect(128*5,256+256*2,128,128)
    tex_ctx.strokeStyle='rgb(255,255,0)'
    tex_ctx.translate(128*5+128*0.5,256+128*4.5)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-34,-57)
    tex_ctx.lineTo(-34,24)
    tex_ctx.moveTo(-16,-57)
    tex_ctx.lineTo(-16,12)
    tex_ctx.moveTo(-1,-57)
    tex_ctx.lineTo(-1,21)
    tex_ctx.moveTo(16,-57)
    tex_ctx.lineTo(16,-3)
    tex_ctx.moveTo(34,-57)
    tex_ctx.lineTo(34,29)
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(150,150,200)'
    tex_ctx.fillRect(128*6,256+256*2,128,128)
    tex_ctx.strokeStyle='rgb(255,255,255)'
    tex_ctx.fillStyle='rgb(255,255,255)'
    tex_ctx.lineWidth=3
    tex_ctx.translate(128*6+128*0.5,256+128*4.5)
    tex_ctx.beginPath()
    tex_ctx.ellipse(0-5,-30+5,20,20,0,0,7)
    tex_ctx.ellipse(-20-5,-25+5,15,15,0,0,7)
    tex_ctx.ellipse(18-5,-40+5,15,15,0,0,7)
    tex_ctx.ellipse(25-5,-25+5,20,20,0,0,7)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.translate(-19,6)
    tex_ctx.moveTo(0,0)
    tex_ctx.lineTo(-3,12)
    tex_ctx.translate(20,-3)
    tex_ctx.moveTo(0,0)
    tex_ctx.lineTo(-3,12)
    tex_ctx.translate(21,6)
    tex_ctx.moveTo(0,0)
    tex_ctx.lineTo(-3,12)
    tex_ctx.translate(-18,19)
    tex_ctx.moveTo(0,0)
    tex_ctx.lineTo(-3,12)
    tex_ctx.translate(-38,-2)
    tex_ctx.moveTo(0,0)
    tex_ctx.lineTo(-4,12)
    tex_ctx.translate(15,13)
    tex_ctx.moveTo(0,0)
    tex_ctx.lineTo(-3,12)
    tex_ctx.translate(35,6)
    tex_ctx.moveTo(0,0)
    tex_ctx.lineTo(-3,12)
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(150,150,200)'
    tex_ctx.fillRect(128*7,256+256*2,128,128)
    tex_ctx.strokeStyle='rgb(255,255,255)'
    tex_ctx.fillStyle='rgb(255,255,255)'
    tex_ctx.lineWidth=3
    tex_ctx.translate(128*7+128*0.5,256+128*4.5)
    function e(x,y,w,h){
        tex_ctx.beginPath()
        tex_ctx.ellipse(x,y,w,h,0,0,7)
        tex_ctx.fill()
    }
    for(let i=9;i>=0;i--){
        tex_ctx.fillStyle=i%2===0?'rgb(150,150,200)':'rgb(255,255,255)'
        e(Math.sin(i*0.5)*10,i*8-35,20+(8-i)*4,13)
    }
    
    tex_ctx.fillStyle='rgb(255,255,255)'
    e(0,-37,35,7)
    
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*0,256+256*2.5,128,128)
    tex_ctx.lineWidth=3
    tex_ctx.translate(128*0+128*0.5,256+128*5.5)
    let a=new Path2D('M 35 39 C 68 14 77 80 33 48')
    tex_ctx.fillStyle='rgb(251, 237, 255)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.translate(-59,-69)
    tex_ctx.scale(1.8*0.9,2.04*0.9)
    tex_ctx.fill(a)
    tex_ctx.fillStyle='rgb(204, 228, 255)'
    tex_ctx.translate(-25,29)
    tex_ctx.rotate(5.6)
    a=new Path2D('M 29 21 C 55 23 41 39 50 50C 53 68 33 51 37 54C 33 44 8 37 29 21')
    tex_ctx.stroke(a)
    tex_ctx.fill(a)
    tex_ctx.fillStyle='rgb(251, 237, 255)'
    tex_ctx.rotate(-5.6)
    tex_ctx.translate(18,-29)
    a=new Path2D('M 43 43 C 68 14 77 80 43 48')
    tex_ctx.fill(a)
    tex_ctx.setTransform(1,0,0,1,0,0)
    tex_ctx.fillStyle='rgb(247, 222, 111)'
    tex_ctx.translate(128*0+128*0.5,256+128*5.5)
    e(23,0,2,2)
    e(33,15,2,2)
    e(11,12,2,2)
    e(20,27,2,2)
    tex_ctx.fillStyle='rgb(225, 177, 242)'
    e(22,12,2,2)
    e(34,23,2,2)
    e(7,21,2,2)
    e(29,0,2,2)
    tex_ctx.strokeStyle='rgb(181, 139, 49)'
    tex_ctx.lineWidth=6
    tex_ctx.beginPath()
    tex_ctx.moveTo(4,-12)
    tex_ctx.bezierCurveTo(-6,-11,-9,29,-25,27)
    tex_ctx.stroke()
    tex_ctx.strokeStyle='rgb(250, 239, 142)'
    tex_ctx.lineWidth=8
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-22)
    tex_ctx.bezierCurveTo(-46,-12,-31,6,-29,5)
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*1,256+256*2.5,128,128)
    tex_ctx.lineWidth=2
    tex_ctx.translate(128*1+128*0.5,256+128*5.5)
    a=new Path2D('M30 60C 26 25 64 25 60 60C55 67 35 67 30 60')
    tex_ctx.fillStyle='rgb(255,100,255)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.translate(-43,-74)
    tex_ctx.scale(1.3,1.3)
    tex_ctx.fill(a)
    tex_ctx.stroke(a)
    a=new Path2D('M30 60C 26 25 64 25 60 60C55 67 35 67 30 60')
    tex_ctx.fillStyle='rgb(0,255,100)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.translate(-21,10)
    tex_ctx.fillStyle='rgb(0,255,100)'
    tex_ctx.fill(a)
    tex_ctx.stroke(a)
    tex_ctx.fillStyle='rgb(255,255,255)'
    tex_ctx.setTransform(1,0,0,1,0,0)
    tex_ctx.translate(128*1+128*0.5,256+128*5.5)
    e(-3,0,2,2)
    e(-20,16,2,2)
    e(-5,13,2,2)
    e(-14,5,2,2)
    e(-17,-8,2,2)
    e(17,2,2,2)
    e(7,-18,2,2)
    e(23,-11,2,2)
    e(19,-21,2,2)
    e(28,0,2,2)
    e(9,-8,2,2)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*2,256+256*2.5,128,128)
    tex_ctx.lineWidth=3
    tex_ctx.translate(128*2+128*0.5,256+128*5.5)
    tex_ctx.fillStyle='rgb(160,80,20)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    e(0,0,30,30)
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(70,20,0)'
    e(19,-6,4,4)
    e(3,-20,4,4)
    e(1,-1,4,4)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*3,256+256*2.5,128,128)
    tex_ctx.lineWidth=2
    tex_ctx.translate(128*3+128*0.5,256+128*5.5)
    a=new Path2D('M30 20L50 50C 73 53 13 71 30 54z')
    tex_ctx.fillStyle='rgb(255,255,255)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.translate(-46,-59)
    tex_ctx.scale(1.4,1.4)
    tex_ctx.fill(a)
    tex_ctx.stroke(a)
    tex_ctx.lineWidth=1
    a=new Path2D('M 48 51 C 42 56 39 55 33 56')
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.stroke(a)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(252, 186, 3)'
    tex_ctx.fillRect(128*4,256+256*2.5,128,128)
    tex_ctx.lineWidth=4
    tex_ctx.translate(128*4+128*0.4,256+128*5.6)
    tex_ctx.fillStyle='rgb(17, 32, 43)'
    tex_ctx.beginPath()
    tex_ctx.ellipse(0,0,23,25,0.5,0,7)
    tex_ctx.translate(-7,10)
    tex_ctx.scale(1.2,1.2)
    tex_ctx.moveTo(-10,-36)
    tex_ctx.bezierCurveTo(-20,-47,-14,-55,-8,-64)
    tex_ctx.bezierCurveTo(-3,-51,2,-38,-10,-36)
    tex_ctx.rotate(0.5)
    tex_ctx.moveTo(-10,-36)
    tex_ctx.bezierCurveTo(-20,-47,-14,-55,-8,-64)
    tex_ctx.bezierCurveTo(-3,-51,2,-38,-10,-36)
    tex_ctx.rotate(0.5)
    tex_ctx.moveTo(-10,-36)
    tex_ctx.bezierCurveTo(-20,-47,-14,-55,-8,-64)
    tex_ctx.bezierCurveTo(-3,-51,2,-38,-10,-36)
    tex_ctx.rotate(0.5)
    tex_ctx.moveTo(-10,-36)
    tex_ctx.bezierCurveTo(-20,-47,-14,-55,-8,-64)
    tex_ctx.bezierCurveTo(-3,-51,2,-38,-10,-36)
    tex_ctx.fill()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(252, 186, 3)'
    tex_ctx.fillRect(128*5,256+256*2.5,128,128)
    tex_ctx.lineWidth=4
    tex_ctx.translate(128*5+128*0.5,256+128*5.5)
    tex_ctx.fillStyle='rgb(99, 73, 39)'
    tex_ctx.beginPath()
    tex_ctx.translate(-25,0)
    tex_ctx.moveTo(-8,-64)
    tex_ctx.bezierCurveTo(0,-30,0,-30,8,-64)
    tex_ctx.translate(25,0)
    tex_ctx.moveTo(-8,-64)
    tex_ctx.bezierCurveTo(0,-20,0,-20,8,-64)
    tex_ctx.translate(25,0)
    tex_ctx.moveTo(-8,-64)
    tex_ctx.bezierCurveTo(0,-30,0,-30,8,-64)
    tex_ctx.translate(-25,0)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(17, 32, 43)'
    tex_ctx.strokeStyle='rgb(17, 32, 43)'
    tex_ctx.beginPath()
    tex_ctx.translate(-25,-10)
    tex_ctx.scale(1.2,1.5)
    tex_ctx.rotate(0.15)
    tex_ctx.moveTo(-10,0)
    tex_ctx.bezierCurveTo(-8,7,8,7,10,0)
    tex_ctx.bezierCurveTo(8,-7,-8,-7,-10,0)
    tex_ctx.setTransform(1,0,0,1,0,0)
    tex_ctx.translate(128*5+128*0.5,256+128*5.5)
    tex_ctx.translate(25,-10)
    tex_ctx.scale(1.2,1.5)
    tex_ctx.rotate(-0.15)
    tex_ctx.moveTo(-10,0)
    tex_ctx.bezierCurveTo(-8,7,8,7,10,0)
    tex_ctx.bezierCurveTo(8,-7,-8,-7,-10,0)
    tex_ctx.setTransform(1,0,0,1,0,0)
    tex_ctx.translate(128*5+128*0.5,256+128*5.5)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(-7,10)
    tex_ctx.bezierCurveTo(-5,13,5,13,7,10)
    tex_ctx.moveTo(0,13)
    tex_ctx.lineTo(0,22)
    tex_ctx.moveTo(-20,20)
    tex_ctx.bezierCurveTo(-10,28,-5,28,0,20)
    tex_ctx.moveTo(20,20)
    tex_ctx.bezierCurveTo(10,28,5,28,0,20)
    tex_ctx.moveTo(-31,14)
    tex_ctx.lineTo(-62,0)
    tex_ctx.moveTo(-31,22)
    tex_ctx.lineTo(-62,27)
    tex_ctx.moveTo(31,14)
    tex_ctx.lineTo(62,0)
    tex_ctx.moveTo(31,22)
    tex_ctx.lineTo(62,27)
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*6,256+256*2.5,128,128)
    tex_ctx.lineWidth=2
    tex_ctx.translate(128*6+128*0.5,256+128*5.5+14)
    a=new Path2D('M35 16C 66 23 45 50 24 50C 12 57 19 55 18 48C 9 15 27 15 35 16z')
    tex_ctx.fillStyle='rgb(179, 162, 34)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.translate(-46,-59)
    tex_ctx.scale(1.4,1.4)
    tex_ctx.fill(a)
    tex_ctx.stroke(a)
    tex_ctx.translate(6,2)
    a=new Path2D('M 35 12C 64 13 49 27 36 16C -2 11 38 3 36 12z')
    tex_ctx.fillStyle='rgb(129, 57, 82)'
    tex_ctx.fill(a)
    tex_ctx.stroke(a)
    tex_ctx.translate(-2,-1)
    a=new Path2D('M 37 13C 39 12 43 7 48 5C 50 12 48 7 43 13z')
    tex_ctx.fillStyle='rgb(129, 57, 82)'
    tex_ctx.fill(a)
    tex_ctx.stroke(a)
    tex_ctx.fillStyle='rgb(130, 87, 23,0.5)'
    e(38,27,1.5,1.5)
    e(36,35,1.5,1.5)
    e(29,41,1.5,1.5)
    e(30,32,1.5,1.5)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*7,256+256*2.5,128,128)
    tex_ctx.lineWidth=2.5
    tex_ctx.translate(128*7+128*0.5,256+128*5.5+5)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(88, 227, 88)'
    e(0,0,30,30)
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(225,255,225,0.5)'
    e(0,0,10,10)
    tex_ctx.lineWidth=1
    a=new Path2D('M 24 30C 28 12 41 22 40 20M 24 41C 24 49 37 50 36 48M 42 30C 47 28 46 43 39 43')
    tex_ctx.fillStyle='rgb(179, 162, 34)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.translate(-57,-48)
    tex_ctx.scale(1.7,1.4)
    tex_ctx.stroke(a)
    tex_ctx.lineWidth=2
    a=new Path2D('M 37 13C 39 12 43 7 42 5C 50 12 48 7 40 14')
    tex_ctx.fillStyle='rgb(138, 78, 18)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.translate(12,-2)
    tex_ctx.scale(1.4/1.7,1.4)
    tex_ctx.stroke(a)
    tex_ctx.fill(a)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(232, 232, 232)'
    tex_ctx.fillRect(128*0,128*8,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0,0.8)'
    tex_ctx.fillStyle='rgb(255, 234, 117)'
    tex_ctx.lineWidth=4
    tex_ctx.translate(128*0,128*8)
    tex_ctx.beginPath()
    tex_ctx.arc(128/2,128/2,45,0,6)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.translate(128/2,128/2)
    
    for(let i=0;i<Math.PI*2;i+=Math.PI*2/4){
        
        tex_ctx.moveTo(Math.sin(i+Math.PI*0.25)*45,Math.cos(i+Math.PI*0.25)*45)
        tex_ctx.lineTo(Math.sin(i+Math.PI*0.25)*-45,Math.cos(i+Math.PI*0.25)*-45)
    }
    
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,25,0,6)
    tex_ctx.closePath()
    tex_ctx.fillStyle='rgb(143,0,236)'
    tex_ctx.fill()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(140, 227, 244)'
    tex_ctx.fillRect(128*1,128*8,128,128)
    tex_ctx.strokeStyle='rgb(50,50,50)'
    tex_ctx.fillStyle='rgb(240, 177, 226)'
    tex_ctx.lineWidth=6
    tex_ctx.translate(128*1+64,128*8+64)
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-28)
    tex_ctx.bezierCurveTo(15,-59,51,-37,44,-5)
    tex_ctx.bezierCurveTo(37,17,10,21,0,47)
    tex_ctx.bezierCurveTo(-18,4,-26,31,-39,-8)
    tex_ctx.bezierCurveTo(-44,-25,-24,-58,0,-28)
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(70,70,70)'
    e(-13,-14,4,4)
    e(15,-19,4,3.5)
    e(1,-12,2,2)
    tex_ctx.fillStyle='rgb(220,220,220)'
    tex_ctx.strokeStyle='rgb(70,70,70)'
    tex_ctx.lineWidth=3
    tex_ctx.beginPath()
    tex_ctx.moveTo(-6,0)
    tex_ctx.bezierCurveTo(2,5,9,-1,11,-3)
    tex_ctx.bezierCurveTo(9,13,-2,8,-6,0)
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(234, 34, 105)'
    e(-19,-2,6,3)
    e(25,-7,6,3)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,100,100)'
    tex_ctx.fillRect(128*2,128*8,128,128)
    tex_ctx.strokeStyle='rgb(255, 241, 43)'
    tex_ctx.fillStyle='rgb(255, 241, 43)'
    tex_ctx.lineWidth=6
    tex_ctx.translate(128*2+64,128*8+67)
    tex_ctx.beginPath()
    for(let i=0,_i=0;i<=Math.PI*2;i+=Math.PI*2/10,_i++){
        
        let r=_i%2===0?25:50,j=i+0.314159
        tex_ctx.lineTo(Math.cos(j)*r,Math.sin(j)*r)
    }
    
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*3,128*8,128,128)
    tex_ctx.fillStyle='rgb(0,0,0,0.3)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.translate(128*3+128*0.5,128*8+128*0.5)
    tex_ctx.scale(1.25,1.25)
    tex_ctx.lineWidth=2.5
    tex_ctx.fillStyle='rgb(94, 235, 214)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.beginPath()
    tex_ctx.roundRect(-22,-8,45,45,9)
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.font='29px Brush Script MT'
    tex_ctx.fillStyle='rgb(168, 50, 201)'
    tex_ctx.fillText('R',0,17)
    tex_ctx.fillStyle='rgb(245, 202, 12)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-19,-6)
    tex_ctx.lineTo(-20,-26)
    tex_ctx.lineTo(-10,-14)
    tex_ctx.lineTo(0,-27)
    tex_ctx.lineTo(10,-14)
    tex_ctx.lineTo(20,-26)
    tex_ctx.lineTo(19,-6)
    tex_ctx.closePath()
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(245, 229, 12)'
    tex_ctx.lineWidth=2
    e(-20,-23,4,4)
    tex_ctx.stroke()
    e(20,-23,4,4)
    tex_ctx.stroke()
    e(0,-27,5,5)
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*4,128*8,128,128)
    tex_ctx.fillStyle='rgb(0,0,0,0.3)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.translate(128*4+128*0.5,128*8+128*0.5)
    tex_ctx.scale(1.25,1.25)
    tex_ctx.lineWidth=2.5
    tex_ctx.fillStyle='rgb(94, 235, 214)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.beginPath()
    tex_ctx.roundRect(-22,-8,45,45,9)
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.font='29px Brush Script MT'
    tex_ctx.fillStyle='rgb(255, 255, 89)'
    tex_ctx.beginPath()
    for(let i=0,j=0;i<6.2831853;i+=6.2831853/10,j++){
        
        let r=j%2===0?6:14
        if(j===0){
            
            tex_ctx.moveTo(Math.cos(i+6.2831853/20)*r,Math.sin(i+6.2831853/20)*r+15)
        } else {
            
            tex_ctx.lineTo(Math.cos(i+6.2831853/20)*r,Math.sin(i+6.2831853/20)*r+15)
        }
    }
    tex_ctx.fill()
    tex_ctx.lineWidth=2
    tex_ctx.stroke()
    tex_ctx.lineWidth=2.5
    tex_ctx.fillStyle='rgb(245, 202, 12)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-19,-6)
    tex_ctx.lineTo(-20,-26)
    tex_ctx.lineTo(-10,-14)
    tex_ctx.lineTo(0,-27)
    tex_ctx.lineTo(10,-14)
    tex_ctx.lineTo(20,-26)
    tex_ctx.lineTo(19,-6)
    tex_ctx.closePath()
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(245, 229, 12)'
    tex_ctx.lineWidth=2
    e(-20,-23,4,4)
    tex_ctx.stroke()
    e(20,-23,4,4)
    tex_ctx.stroke()
    e(0,-27,5,5)
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*5,128*8,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(220,220,220)'
    tex_ctx.translate(128*5+128*0.5-2,128*8.5)
    tex_ctx.lineWidth=5
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-30)
    tex_ctx.bezierCurveTo(-29,-32,-45,43,0,40)
    tex_ctx.moveTo(0,-30)
    tex_ctx.bezierCurveTo(29,-32,45,43,0,40)
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.strokeStyle='rgb(235,235,235)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-21,-12)
    tex_ctx.bezierCurveTo(-14,-11,2,-14,-3,-28)
    tex_ctx.moveTo(14,-19)
    tex_ctx.bezierCurveTo(6,6,-8,3,-24,0)
    tex_ctx.moveTo(24,1)
    tex_ctx.bezierCurveTo(6,27,-8,16,-25,15)
    tex_ctx.moveTo(22,20)
    tex_ctx.bezierCurveTo(6,36,-8,36,-20,30)
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(0,0,0,0.1)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(20,-20)
    tex_ctx.bezierCurveTo(36,46,-28,32,-23,30)
    tex_ctx.bezierCurveTo(15,64,33,22,28,-3)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(255, 255, 48)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.beginPath()
    for(let i=0,j=0;i<6.2831853;i+=6.2831853/10,j++){
        
        let r=j%2===0?9:18
        if(j===0){
            
            tex_ctx.moveTo(Math.cos(i+6.2831853/20)*r,Math.sin(i+6.2831853/20)*r+10)
        } else {
            
            tex_ctx.lineTo(Math.cos(i+6.2831853/20)*r,Math.sin(i+6.2831853/20)*r+10)
        }
    }
    tex_ctx.fill()
    tex_ctx.lineWidth=2
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*6,256+256*3,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(255,220,70)'
    tex_ctx.translate(128*6+128*0.5,256+128*6.5)
    tex_ctx.lineWidth=5
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-30)
    tex_ctx.bezierCurveTo(-29,-32,-45,43,0,40)
    tex_ctx.moveTo(0,-30)
    tex_ctx.bezierCurveTo(29,-32,45,43,0,40)
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.strokeStyle='rgb(235,205,0)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-21,-12)
    tex_ctx.bezierCurveTo(-14,-11,2,-14,-3,-28)
    tex_ctx.moveTo(14,-19)
    tex_ctx.bezierCurveTo(6,6,-8,3,-24,0)
    tex_ctx.moveTo(24,1)
    tex_ctx.bezierCurveTo(6,27,-8,16,-25,15)
    tex_ctx.moveTo(22,20)
    tex_ctx.bezierCurveTo(6,36,-8,36,-20,30)
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(0,0,0,0.1)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(20,-20)
    tex_ctx.bezierCurveTo(36,46,-28,32,-23,30)
    tex_ctx.bezierCurveTo(15,64,33,22,28,-3)
    tex_ctx.fill()
    tex_ctx.strokeStyle='white'
    function shinyCross(x,y,r,s){
        tex_ctx.translate(x,y)
        tex_ctx.rotate(r)
        tex_ctx.scale(s,s)
        tex_ctx.moveTo(-5,-25)
        tex_ctx.bezierCurveTo(-11,-25,-20,-15,-18,-10)
        tex_ctx.moveTo(-26,-25)
        tex_ctx.bezierCurveTo(-2,-25,-11,-15,-5,-12)
        tex_ctx.translate(-x,-y)
        tex_ctx.rotate(-r)
        tex_ctx.scale(1/s,1/s)
    }
    tex_ctx.beginPath()
    tex_ctx.moveTo(-5,-25)
    tex_ctx.bezierCurveTo(-11,-25,-20,-15,-18,-10)
    tex_ctx.stroke()
    tex_ctx.lineWidth='3'
    tex_ctx.beginPath()
    shinyCross(16,0,0,0.5)
    shinyCross(-20,0,10,0.5)
    shinyCross(20,40,1.5,0.6)
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(255, 255, 48)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.translate(-22,-20)
    tex_ctx.beginPath()
    for(let i=0,j=0;i<6.2831853;i+=6.2831853/10,j++){
        
        let r=j%2===0?9:18
        if(j===0){
            
            tex_ctx.moveTo(Math.cos(i+6.2831853/20)*r,Math.sin(i+6.2831853/20)*r+10)
        } else {
            
            tex_ctx.lineTo(Math.cos(i+6.2831853/20)*r,Math.sin(i+6.2831853/20)*r+10)
        }
    }
    tex_ctx.fill()
    tex_ctx.lineWidth=2
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*7,256+256*3,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(200,255,255)'
    tex_ctx.translate(128*7+128*0.5,256+128*6.5)
    tex_ctx.lineWidth=5
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-30)
    tex_ctx.bezierCurveTo(-29,-32,-45,43,0,40)
    tex_ctx.moveTo(0,-30)
    tex_ctx.bezierCurveTo(29,-32,45,43,0,40)
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(0,0,0,0.1)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(20,-20)
    tex_ctx.bezierCurveTo(36,46,-28,32,-23,30)
    tex_ctx.bezierCurveTo(15,64,33,22,28,-3)
    tex_ctx.fill()
    tex_ctx.strokeStyle='white'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-5,-25)
    tex_ctx.bezierCurveTo(-11,-25,-20,-15,-18,-10)
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(0,0,0,0.125)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-10)
    tex_ctx.bezierCurveTo(-10,-10,-10,20,0,20)
    tex_ctx.moveTo(0,-10)
    tex_ctx.bezierCurveTo(10,-10,10,20,0,20)
    tex_ctx.fill()
    tex_ctx.lineWidth='3'
    tex_ctx.beginPath()
    shinyCross(16,0,0,0.5)
    shinyCross(-20,0,10,0.5)
    shinyCross(26,36,102,0.5)
    shinyCross(-25,20,0,0.25)
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(255, 255, 48)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.translate(-3,-30)
    tex_ctx.beginPath()
    for(let i=0,j=0;i<6.2831853;i+=6.2831853/10,j++){
        
        let r=j%2===0?9:18
        if(j===0){
            
            tex_ctx.moveTo(Math.cos(i+6.2831853/20)*r,Math.sin(i+6.2831853/20)*r+10)
        } else {
            
            tex_ctx.lineTo(Math.cos(i+6.2831853/20)*r,Math.sin(i+6.2831853/20)*r+10)
        }
    }
    tex_ctx.fill()
    tex_ctx.lineWidth=2
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*0,256+256*3.5,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(163, 91, 218)'
    tex_ctx.translate(128*0+128*0.5,256+128*7.5)
    tex_ctx.lineWidth=5
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-30)
    tex_ctx.bezierCurveTo(-29,-32,-45,43,0,40)
    tex_ctx.moveTo(0,-30)
    tex_ctx.bezierCurveTo(29,-32,45,43,0,40)
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(0,0,0,0.7)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-28,0)
    tex_ctx.bezierCurveTo(-28,15,28,15,28,0)
    tex_ctx.lineTo(28,15)
    tex_ctx.bezierCurveTo(28,25,-28,25,-28,15)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(0,0,0,0.15)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(20,-20)
    tex_ctx.bezierCurveTo(28,15,-28,27,-23,30)
    tex_ctx.bezierCurveTo(15,64,33,22,28,-3)
    tex_ctx.fill()
    tex_ctx.strokeStyle='rgb(255,255,255,0.5)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-5,-25)
    tex_ctx.bezierCurveTo(-11,-25,-20,-15,-18,-10)
    tex_ctx.stroke()
    tex_ctx.lineWidth='2'
    tex_ctx.strokeStyle='rgb(255,255,255)'
    tex_ctx.beginPath()
    shinyCross(16,0,0,0.2)
    shinyCross(-20,0,10,0.22)
    shinyCross(20,40,1.5,0.26)
    shinyCross(-28,-46,15,0.22)
    shinyCross(17,45,-1.5,0.21)
    shinyCross(-5,-30,1,0.2)
    shinyCross(25,-20,1.5,0.26)
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(255, 255, 48)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.translate(4,24)
    tex_ctx.beginPath()
    for(let i=0,j=0;i<6.2831853;i+=6.2831853/10,j++){
        
        let r=j%2===0?9:18
        if(j===0){
            
            tex_ctx.moveTo(Math.cos(i+6.2831853/20)*r,Math.sin(i+6.2831853/20)*r+10)
        } else {
            
            tex_ctx.lineTo(Math.cos(i+6.2831853/20)*r,Math.sin(i+6.2831853/20)*r+10)
        }
    }
    tex_ctx.fill()
    tex_ctx.lineWidth=2
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*1,256+256*3.5,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(250,250,250)'
    tex_ctx.translate(128*1+128*0.5,256+128*7.5)
    tex_ctx.lineWidth=5
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-30)
    tex_ctx.bezierCurveTo(-29,-32,-45,43,0,40)
    tex_ctx.moveTo(0,-30)
    tex_ctx.bezierCurveTo(29,-32,45,43,0,40)
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(0,0,0,0.15)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(20,-20)
    tex_ctx.bezierCurveTo(28,15,-28,27,-23,30)
    tex_ctx.bezierCurveTo(15,64,33,22,28,-3)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(255, 255, 48)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.translate(1,0)
    tex_ctx.beginPath()
    for(let i=0,j=0;i<6.2831853;i+=6.2831853/10,j++){
        
        let r=j%2===0?9:18
        if(j===0){
            
            tex_ctx.moveTo(Math.cos(i+6.2831853/20)*r,Math.sin(i+6.2831853/20)*r+10)
        } else {
            
            tex_ctx.lineTo(Math.cos(i+6.2831853/20)*r,Math.sin(i+6.2831853/20)*r+10)
        }
    }
    tex_ctx.fill()
    tex_ctx.lineWidth=2
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*2,256+256*3.5,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(250,250,250)'
    tex_ctx.translate(128*2+128*0.5,256+128*7.5)
    tex_ctx.scale(1.7,1.7)
    tex_ctx.translate(-38,-36)
    a=new Path2D('M 54 54 C 48 64 23 58 23 52C 20 45 28 49 25 42C 23 40 27 32 29 33C 31 33 27 27 32 25C 45 21 25 23 47 25C 54 30 49 26 53 32C 48 39 57 34 52 42C 58 49 53 44 54 54')
    tex_ctx.strokeStyle='black'
    tex_ctx.lineWidth='3.5'
    tex_ctx.stroke(a)
    tex_ctx.fillStyle='#fbefb8'
    tex_ctx.fill(a)
    a=new Path2D('M 47 47 C 48 50 42 53 38 50M 32 49 C 26 52 43 53 37 50M 42 42 C 48 40 42 48 33 41M 39 35 C 41 40 34 39 33 34')
    tex_ctx.strokeStyle='rgb(0,0,0,0.3)'
    tex_ctx.lineWidth='2'
    tex_ctx.stroke(a)
    tex_ctx.fillStyle='rgb(0,0,0,0.3)'
    e(40,29,6,3)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.translate(0,-3)
    tex_ctx.lineWidth='6'
    a=new Path2D('M 36 20 C 32 19 42 22 40 30')
    tex_ctx.stroke(a)
    tex_ctx.strokeStyle='rgb(255,255,255)'
    tex_ctx.lineWidth='3'
    a=new Path2D('M 36 20 C 32 19 42 22 40 30')
    tex_ctx.stroke(a)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*1,256+256*3.5,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(250,250,250)'
    tex_ctx.translate(128*1+128*0.5,256+128*7.5)
    tex_ctx.lineWidth=5
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-30)
    tex_ctx.bezierCurveTo(-29,-32,-45,43,0,40)
    tex_ctx.moveTo(0,-30)
    tex_ctx.bezierCurveTo(29,-32,45,43,0,40)
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(0,0,0,0.15)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(20,-20)
    tex_ctx.bezierCurveTo(28,15,-28,27,-23,30)
    tex_ctx.bezierCurveTo(15,64,33,22,28,-3)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(255, 255, 48)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.translate(1,0)
    tex_ctx.beginPath()
    for(let i=0,j=0;i<6.2831853;i+=6.2831853/10,j++){
        
        let r=j%2===0?9:18
        if(j===0){
            
            tex_ctx.moveTo(Math.cos(i+6.2831853/20)*r,Math.sin(i+6.2831853/20)*r+10)
        } else {
            
            tex_ctx.lineTo(Math.cos(i+6.2831853/20)*r,Math.sin(i+6.2831853/20)*r+10)
        }
    }
    tex_ctx.fill()
    tex_ctx.lineWidth=2
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*3,256+256*3.5,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(250,250,250)'
    tex_ctx.translate(128*3+128*0.5,256+128*7.5)
    tex_ctx.scale(1.65,1.65)
    tex_ctx.translate(-38,-34)
    tex_ctx.scale(0.9,0.9)
    tex_ctx.translate(4,4)
    a=new Path2D('M 56 54 L 49 58L 33 58L 25 54L 25 42L 28 35L 28 23L 38 15L 46 18L 52 24L 52 35L 56 47L 56 53')
    tex_ctx.strokeStyle='black'
    tex_ctx.lineWidth='3.5'
    tex_ctx.stroke(a)
    tex_ctx.fillStyle='#e26a3a'
    tex_ctx.fill(a)
    tex_ctx.translate(-4,-4)
    tex_ctx.scale(1/0.9,1/0.9)
    a=new Path2D('M 33 56 L 33 44M 46 48 L 46 33M 38 40 L 38 30')
    tex_ctx.strokeStyle='rgb(0,0,0,0.2)'
    tex_ctx.lineWidth='2'
    tex_ctx.stroke(a)
    tex_ctx.fillStyle='rgb(0,0,0,0.3)'
    e(40,24,7,3.5)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.translate(0,-8)
    tex_ctx.lineWidth='6'
    a=new Path2D('M 36 20 C 32 19 42 22 40 30')
    tex_ctx.stroke(a)
    tex_ctx.strokeStyle='rgb(255,255,255)'
    tex_ctx.lineWidth='3'
    a=new Path2D('M 36 20 C 32 19 42 22 40 30')
    tex_ctx.stroke(a)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*4,256+256*3.5,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(250,250,250)'
    tex_ctx.translate(128*4+128*0.5,256+128*7.5)
    tex_ctx.scale(1.65,1.65)
    tex_ctx.translate(-35,-34)
    tex_ctx.scale(0.9,0.9)
    tex_ctx.translate(4,4)
    a=new Path2D('M 54 54 C 48 64 23 58 23 52C 23 45 28 49 25 37C 23 31 28 28 27 26C 23 18 49 16 50 26C 48 36 54 31 53 40C 53 50 58 44 54 54')
    tex_ctx.strokeStyle='black'
    tex_ctx.lineWidth='3.5'
    tex_ctx.stroke(a)
    tex_ctx.fillStyle='#7cec88'
    tex_ctx.fill(a)
    tex_ctx.translate(-6,-2)
    tex_ctx.scale(1/0.9,1/0.9)
    tex_ctx.fillStyle='rgb(0,0,0,0.3)'
    e(40,24,7,3.5)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.translate(0,-8)
    tex_ctx.lineWidth='6'
    a=new Path2D('M 36 20 C 32 19 42 22 40 30')
    tex_ctx.stroke(a)
    tex_ctx.strokeStyle='rgb(255,255,255)'
    tex_ctx.lineWidth='3'
    a=new Path2D('M 36 20 C 32 19 42 22 40 30')
    tex_ctx.stroke(a)
    tex_ctx.fillStyle='rgb(205, 242, 41)'
    e(33,55,3,3)
    e(42,48,3,3)
    e(48,57,3,3)
    e(33,40,2,2)
    e(47,38,2,2)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.fillRect(128*5,256+256*3.5,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(250,250,250)'
    tex_ctx.translate(128*5+128*0.5,256+128*7.5)
    tex_ctx.scale(1.55,1.55)
    tex_ctx.translate(-35,-35)
    a=new Path2D('M 54 54 C 31 64 23 58 24 52C 24 43 28 49 25 37C 23 31 28 28 27 26C 23 18 49 16 50 26C 48 36 54 31 51 40C 53 50 57 44 54 54')
    tex_ctx.strokeStyle='black'
    tex_ctx.lineWidth='3.5'
    tex_ctx.stroke(a)
    tex_ctx.fillStyle='rgb(255,255,120)'
    tex_ctx.fill(a)
    tex_ctx.fillStyle='rgb(0,0,0,0.3)'
    e(38,24,7,3.5)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.translate(-2,-8)
    tex_ctx.lineWidth='6'
    a=new Path2D('M 36 20 C 32 19 42 22 40 30')
    tex_ctx.stroke(a)
    tex_ctx.strokeStyle='rgb(255,255,255)'
    tex_ctx.lineWidth='3'
    a=new Path2D('M 36 20 C 32 19 42 22 40 30')
    tex_ctx.stroke(a)
    tex_ctx.fillStyle='rgb(205, 242, 41)'
    tex_ctx.translate(2,13)
    a=new Path2D('M 33 54 C 26 51 30 44 32 46C 40 48 31 51 33 50')
    tex_ctx.strokeStyle='rgb(0,0,0,0.3)'
    tex_ctx.lineWidth='2'
    tex_ctx.stroke(a)
    tex_ctx.scale(1.5,1.5)
    tex_ctx.translate(-26,41)
    tex_ctx.rotate(-1.3)
    a=new Path2D('M 33 54 C 26 51 30 44 32 46C 40 48 31 51 33 50')
    tex_ctx.strokeStyle='rgb(0,0,0,0.3)'
    tex_ctx.lineWidth='1.5'
    tex_ctx.stroke(a)
    tex_ctx.setTransform(1,0,0,1,0,0)
}

window.textures_bees=function(tex_ctx){

    tex_ctx.fillStyle='rgb(100,100,100,0)'
    tex_ctx.fillRect(0,0,2048,2048)
    
    tex_ctx.fillStyle='rgb(33, 20, 1)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.strokeStyle='rgb(220,220,220)'
    tex_ctx.lineWidth=9
    tex_ctx.lineCap='round'
    tex_ctx.lineJoin='round'
    tex_ctx.beginPath()
    tex_ctx.moveTo((128/2)-(128/5),30)
    tex_ctx.lineTo((128/2)-(128/5),50)
    tex_ctx.moveTo((128/2)+(128/5),30)
    tex_ctx.lineTo((128/2)+(128/5),50)
    tex_ctx.closePath()
    tex_ctx.moveTo(128/2,100)
    tex_ctx.lineTo((128/2)-(128/5),80)
    tex_ctx.moveTo(128/2,100)
    tex_ctx.lineTo((128/2)+(128/5),80)
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(237, 233, 9)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(33, 20, 1)'
    tex_ctx.fillRect(0,128-1,128,128/3)
    tex_ctx.fillRect(0,213,128,128/3+1)
    
    tex_ctx.fillStyle='rgb(0,200,60)'
    tex_ctx.fillRect(128,0,128,128)
    tex_ctx.strokeStyle='rgb(255,255,255)'
    tex_ctx.lineWidth=18
    tex_ctx.beginPath()
    tex_ctx.moveTo((128/2)-(128/5)+128,30)
    tex_ctx.lineTo((128/2)-(128/5)+128,50)
    tex_ctx.moveTo((128/2)+(128/5)+128,30)
    tex_ctx.lineTo((128/2)+(128/5)+128,50)
    tex_ctx.closePath()
    tex_ctx.stroke()
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.lineWidth=9
    tex_ctx.beginPath()
    tex_ctx.moveTo((128/2)-(128/5)+124,45)
    tex_ctx.lineTo((128/2)-(128/5)+124,53)
    tex_ctx.moveTo((128/2)-(128/5)+173,45)
    tex_ctx.lineTo((128/2)-(128/5)+173,53)
    tex_ctx.closePath()
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(0,0,0)'
    tex_ctx.fillRect(128,128,128,128)
    tex_ctx.fillStyle='rgb(0,200,60)'
    tex_ctx.fillRect(128,128-1,128,128/3)
    tex_ctx.fillRect(128,213,128,128/3+1)
    
    tex_ctx.fillStyle='rgb(10,10,10)'
    tex_ctx.fillRect(128*2,0,128,128)
    tex_ctx.strokeStyle='rgb(255,255,255)'
    tex_ctx.lineWidth=4
    tex_ctx.translate(0,-13)
    tex_ctx.beginPath()
    tex_ctx.moveTo((128/2)-(128/5)+123*2,86)
    tex_ctx.lineTo((128/2)-(128/5)+125*2,53)
    tex_ctx.moveTo((128/2)-(128/5)+125*2,53)
    tex_ctx.lineTo((128/2)-(128/5)+128*2,62)
    tex_ctx.moveTo((128/2)-(128/5)+159.5*2,59)
    tex_ctx.lineTo((128/2)-(128/5)+161*2,27)
    tex_ctx.moveTo((128/2)-(128/5)+161*2,27)
    tex_ctx.lineTo((128/2)-(128/5)+164*2,39)
    tex_ctx.moveTo((128/2)-(128/5)+128*2,94)
    tex_ctx.bezierCurveTo((128/2)-(128/5)+135*2,114,(128/2)-(128/5)+157*2,109,(128/2)-(128/5)+155*2,74)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.ellipse(279,89,8,6,-0.2,0,7)
    tex_ctx.ellipse(352,59,8,6,-0.2,0,7)
    tex_ctx.moveTo(0,0)
    tex_ctx.ellipse(365,62,2,2,-0.2,0,7)
    tex_ctx.closePath()
    tex_ctx.translate(0,13)
    tex_ctx.fillStyle='rgb(255,255,255)'
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(220,220,220)'
    tex_ctx.fillRect(128*2,128,128,128)
    tex_ctx.fillStyle='rgb(10,10,10)'
    tex_ctx.fillRect(128*2,128-1,128,128/3)
    tex_ctx.fillRect(128*2,213,128,128/3+1)
    
    tex_ctx.translate(128*3,0)
    tex_ctx.fillStyle='rgb(190,0,0)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.strokeStyle='rgb(235, 66, 9)'
    tex_ctx.fillStyle='rgb(235, 66, 9)'
    tex_ctx.lineWidth=3
    tex_ctx.beginPath()
    tex_ctx.translate(63,-5)
    tex_ctx.moveTo(128/2-40+10,55-5)
    tex_ctx.lineTo(128/2-40-5+10,40-5)
    tex_ctx.moveTo(128/2-40-5-5+10,55-5)
    tex_ctx.lineTo(128/2-40-5+10,40-5)
    tex_ctx.moveTo(128/2-40-5-5,55-5)
    tex_ctx.bezierCurveTo(128/2-40-5-5,71-5,128/2-40-5-5+20,71-5,128/2-40-5-5+20,55-5)
    tex_ctx.arc(20,29,0,0,6)
    tex_ctx.scale(-1,1)
    tex_ctx.moveTo(128/2-40+10,55-5)
    tex_ctx.lineTo(128/2-40-5+10,40-5)
    tex_ctx.moveTo(128/2-40-5-5+10,55-5)
    tex_ctx.lineTo(128/2-40-5+10,40-5)
    tex_ctx.moveTo(128/2-40-5-5,55-5)
    tex_ctx.bezierCurveTo(128/2-40-5-5,71-5,128/2-40-5-5+20,71-5,128/2-40-5-5+20,55-5)
    tex_ctx.arc(20,29,0,0,6)
    tex_ctx.closePath()
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.scale(-1,1)
    tex_ctx.translate(-65,5)
    tex_ctx.beginPath()
    tex_ctx.moveTo(128*0.5-35,90)
    tex_ctx.lineTo(128*0.5-30,90+15)
    tex_ctx.moveTo(128*0.5-30,90+15)
    tex_ctx.lineTo(128*0.5-25,90)
    tex_ctx.translate(10,0)
    tex_ctx.moveTo(128*0.5-35,90)
    tex_ctx.lineTo(128*0.5-30,90+15)
    tex_ctx.moveTo(128*0.5-30,90+15)
    tex_ctx.lineTo(128*0.5-25,90)
    tex_ctx.translate(10,0)
    tex_ctx.moveTo(128*0.5-35,90)
    tex_ctx.lineTo(128*0.5-30,90+15)
    tex_ctx.moveTo(128*0.5-30,90+15)
    tex_ctx.lineTo(128*0.5-25,90)
    tex_ctx.translate(10,0)
    tex_ctx.moveTo(128*0.5-35,90)
    tex_ctx.lineTo(128*0.5-30,90+15)
    tex_ctx.moveTo(128*0.5-30,90+15)
    tex_ctx.lineTo(128*0.5-25,90)
    tex_ctx.translate(10,0)
    tex_ctx.moveTo(128*0.5-35,90)
    tex_ctx.lineTo(128*0.5-30,90+15)
    tex_ctx.moveTo(128*0.5-30,90+15)
    tex_ctx.lineTo(128*0.5-25,90)
    tex_ctx.translate(10,0)
    tex_ctx.moveTo(128*0.5-35,90)
    tex_ctx.lineTo(128*0.5-30,90+15)
    tex_ctx.moveTo(128*0.5-30,90+15)
    tex_ctx.lineTo(128*0.5-25,90)
    tex_ctx.translate(10,0)
    tex_ctx.moveTo(128*0.5-35,90)
    tex_ctx.lineTo(128*0.5-30,90+15)
    tex_ctx.moveTo(128*0.5-30,90+15)
    tex_ctx.lineTo(128*0.5-25,90)
    tex_ctx.stroke()
    tex_ctx.translate(-58,0)
    tex_ctx.fillStyle='rgb(235, 66, 9)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(190,0,0)'
    tex_ctx.fillRect(0,128-1,128,128/3)
    tex_ctx.fillRect(0,213,128,128/3+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*4,0)
    tex_ctx.fillStyle='rgb(70, 183, 240)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.strokeStyle='rgb(15, 136, 212)'
    tex_ctx.lineWidth=10
    tex_ctx.beginPath()
    tex_ctx.moveTo(128*0.5-35,59)
    tex_ctx.bezierCurveTo(56,62,44,39,128*0.5-35,28)
    tex_ctx.translate(55,0)
    tex_ctx.moveTo(128*0.5-35,59)
    tex_ctx.bezierCurveTo(56,62,44,39,128*0.5-35,28)
    tex_ctx.translate(-55,0)
    tex_ctx.moveTo(128*0.5+-10,104)
    tex_ctx.bezierCurveTo(89,110,69,86,128*0.5+-5,86)
    tex_ctx.bezierCurveTo(40,85,45,102,128*0.5+-11,104)
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(15, 136, 212)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(70, 183, 240)'
    tex_ctx.fillRect(0,128-1,128,128/3)
    tex_ctx.fillRect(0,213,128,128/3+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*5,0)
    tex_ctx.fillStyle='rgb(220,220,220)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.lineWidth=3.5
    tex_ctx.beginPath()
    tex_ctx.translate(4,0)
    tex_ctx.moveTo(36,30)
    tex_ctx.bezierCurveTo(25,17,15,47,30,56)
    tex_ctx.bezierCurveTo(50,55,36,32,33,45)
    tex_ctx.translate(50,0)
    tex_ctx.moveTo(36,30)
    tex_ctx.bezierCurveTo(25,17,15,47,30,56)
    tex_ctx.bezierCurveTo(50,55,36,32,33,45)
    tex_ctx.translate(-54,0)
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(215,215,0)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(220,220,220)'
    tex_ctx.fillRect(0,128-1,128,128/3)
    tex_ctx.fillRect(0,213,128,128/3+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*6,0)
    tex_ctx.fillStyle='rgb(220,220,220)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(0,0,0)'
    tex_ctx.lineWidth=3
    tex_ctx.beginPath()
    tex_ctx.ellipse(128*0.5-30,40,15,13,0,0,7)
    tex_ctx.rect(0,35,128,8)
    tex_ctx.ellipse(128*0.5+30,40,15,13,0,0,7)
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.strokeStyle='rgb(220,220,220)'
    tex_ctx.lineWidth=5
    tex_ctx.beginPath()
    tex_ctx.moveTo(128*0.5-30,32)
    tex_ctx.bezierCurveTo(128*0.5-36,35,128*0.5-35,32,128*0.5-40,40)
    tex_ctx.translate(61,0)
    tex_ctx.moveTo(128*0.5-30,32)
    tex_ctx.bezierCurveTo(128*0.5-36,35,128*0.5-35,32,128*0.5-40,40)
    tex_ctx.translate(-61,0)
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(20,20,20)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(220,220,220)'
    tex_ctx.fillRect(0,128-1,128,128/3)
    tex_ctx.fillRect(0,213,128,128/3+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*7,0)
    tex_ctx.fillStyle='rgb(176, 128, 74)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.strokeStyle='rgb(125, 78, 24)'
    tex_ctx.lineWidth=3
    tex_ctx.beginPath()
    tex_ctx.translate(32,20)
    
    for(let i=-0.71,j=0,inc=Math.PI*2/34;i<Math.PI*2*0.18;i+=inc,j++){
        
        let ri=(j-1)%2===0?25:28,r=j%2===0?22:31
        tex_ctx.moveTo(Math.sin(i-inc)*ri,Math.cos(i-inc)*ri)
        tex_ctx.lineTo(Math.sin(i)*r,Math.cos(i)*r)
    }
    
    tex_ctx.translate(60,0)
    
    for(let i=-0.71,j=0,inc=Math.PI*2/34;i<Math.PI*2*0.18;i+=inc,j++){
        
        let ri=(j-1)%2===0?25:28,r=j%2===0?22:31
        tex_ctx.moveTo(Math.sin(i-inc)*ri,Math.cos(i-inc)*ri)
        tex_ctx.lineTo(Math.sin(i)*r,Math.cos(i)*r)
    }
    
    tex_ctx.stroke()
    tex_ctx.translate(-32,60)
    tex_ctx.beginPath()
    
    for(let i=-0.74,j=0,inc=Math.PI*2/39;i<Math.PI*2*0.17;i+=inc,j++){
        
        let ri=(j-1)%2===0?25:28,r=j%2===0?22:31
        tex_ctx.moveTo(Math.sin(i-inc)*ri*1.5,Math.cos(i-inc)*ri)
        tex_ctx.lineTo(Math.sin(i)*r*1.5,Math.cos(i)*r)
    }
    
    tex_ctx.lineWidth=5
    tex_ctx.stroke()
    tex_ctx.translate(-32-28,-80)
    tex_ctx.fillStyle='rgb(140, 79, 42)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(176, 128, 74)'
    tex_ctx.fillRect(0,128-1,128,(128/3))
    tex_ctx.fillRect(0,213,128,(128/3)+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*8,0)
    tex_ctx.fillStyle='rgb(0,0,0)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.strokeStyle='rgb(255,255,255)'
    // tex_ctx.fillStyle='rgb(0,0,0)'
    tex_ctx.lineWidth=4
    tex_ctx.beginPath()
    tex_ctx.moveTo(2,20)
    tex_ctx.bezierCurveTo(128/2,128/2-40,128/2,128/2-40,126,20)
    tex_ctx.moveTo(128/2-25,45)
    tex_ctx.lineTo(128/2-25,60)
    tex_ctx.moveTo(128/2+25,45)
    tex_ctx.lineTo(128/2+25,60)
    tex_ctx.moveTo(128/2-30,100)
    tex_ctx.bezierCurveTo(128/2,128/2+30,128/2,128/2+30,128/2+30,100)
    tex_ctx.moveTo(128/2-23-10,95)
    tex_ctx.lineTo(128/2-19-10,106)
    tex_ctx.moveTo(128/2+23+10,95)
    tex_ctx.lineTo(128/2+19+10,106)
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(155,155,155)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(0,0,0)'
    tex_ctx.fillRect(0,128-1,128,128/3)
    tex_ctx.fillRect(0,213,128,128/3+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*9,0)
    tex_ctx.fillStyle='rgb(200,0,0)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.strokeStyle='rgb(120,0,0)'
    tex_ctx.fillStyle='rgb(120,0,0)'
    tex_ctx.lineWidth=4
    tex_ctx.translate(128/2,128/2)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-40,-41)
    tex_ctx.lineTo(-35,4)
    tex_ctx.lineTo(-26,20)
    tex_ctx.lineTo(-23,-32)
    tex_ctx.lineTo(-32,-23)
    tex_ctx.scale(-1,1)
    tex_ctx.moveTo(-40,-41)
    tex_ctx.lineTo(-35,4)
    tex_ctx.lineTo(-26,20)
    tex_ctx.lineTo(-23,-32)
    tex_ctx.lineTo(-32,-23)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(13,53)
    tex_ctx.lineTo(29,34)
    tex_ctx.lineTo(45,46)
    tex_ctx.lineTo(56,-1)
    tex_ctx.moveTo(-13,53)
    tex_ctx.lineTo(-29,34)
    tex_ctx.lineTo(-45,46)
    tex_ctx.lineTo(-56,-1)
    tex_ctx.stroke()
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(150,0,0)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(200,0,0)'
    tex_ctx.fillRect(0,128-1,128,128/3)
    tex_ctx.fillRect(0,213,128,128/3+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(1280,0)
    tex_ctx.fillStyle='rgb(220,220,220)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.fillStyle='rgb(120,120,120)'
    tex_ctx.lineWidth=4
    tex_ctx.translate(128/2,128/2)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-128/2,-128/2)
    tex_ctx.bezierCurveTo(-28,-58,0,0,0,10)
    tex_ctx.bezierCurveTo(0,0,-28+128/2,-58,128/2,-128/2)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-18)
    tex_ctx.lineTo(-13,-6)
    tex_ctx.moveTo(20,-18)
    tex_ctx.lineTo(13,-6)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.stroke()
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(120,120,120)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(220,220,220)'
    tex_ctx.fillRect(0,128-1,128,128/3)
    tex_ctx.fillRect(0,213,128,128/3+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*11,0)
    tex_ctx.fillStyle='rgb(27, 219, 145)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.fillStyle='rgb(58, 125, 166)'
    tex_ctx.strokeStyle='rgb(58, 125, 166)'
    tex_ctx.lineWidth=7
    tex_ctx.translate(128/2,128/2)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-30,-35)
    tex_ctx.bezierCurveTo(-40,-20,-40,-15,-30,-20)
    tex_ctx.bezierCurveTo(-20,-2,-20,-35,-30,-35)
    tex_ctx.moveTo(-30,-35)
    tex_ctx.lineTo(-34,-11)
    tex_ctx.lineTo(-25,-30)
    tex_ctx.lineTo(-37,-23)
    tex_ctx.moveTo(30,-35)
    tex_ctx.bezierCurveTo(40,-20,40,-15,30,-20)
    tex_ctx.bezierCurveTo(20,-2,20,-35,30,-35)
    tex_ctx.moveTo(30,-35)
    tex_ctx.lineTo(34,-11)
    tex_ctx.lineTo(25,-30)
    tex_ctx.lineTo(37,-23)
    for(let i=-0.74,j=0,inc=Math.PI*2/39;i<Math.PI*2*0.17;i+=inc,j++){
        
        let r=29+Math.sin(i*183)*3
        tex_ctx.moveTo(Math.sin(i-inc)*r,Math.cos(i-inc)*r)
        tex_ctx.lineTo(Math.sin(i)*r,Math.cos(i)*r)
    }
    tex_ctx.stroke()
    tex_ctx.strokeStyle='rgb(27, 219, 145)'
    tex_ctx.lineWidth=4
    tex_ctx.beginPath()
    tex_ctx.moveTo(-30,-30)
    tex_ctx.bezierCurveTo(-30,-33,-34,-20,-31,-20)
    tex_ctx.moveTo(30,-30)
    tex_ctx.bezierCurveTo(30,-33,34,-20,31,-20)
    tex_ctx.stroke()
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(29, 133, 72)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(27, 219, 145)'
    tex_ctx.fillRect(0,128-1,128,128/3)
    tex_ctx.fillRect(0,213,128,128/3+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*12,0)
    tex_ctx.fillStyle='rgb(23, 118, 235)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.fillStyle='rgb(23, 197, 255)'
    tex_ctx.strokeStyle='rgb(23, 197, 255)'
    tex_ctx.lineWidth=13
    tex_ctx.scale(0.3,0.3)
    tex_ctx.translate(-92,-62)
    function ellipse(x,y,w,h,r=0){
        tex_ctx.beginPath()
        tex_ctx.ellipse(x,y,w,h,r,0,6)
        tex_ctx.fill()
    }
    function bezier(a,b,c,d,e,f,g,h,fill,stroke){
        tex_ctx.beginPath()
        tex_ctx.moveTo(a,b)
        tex_ctx.bezierCurveTo(c,d,e,f,g,h)
        
        if(fill)
        tex_ctx.fill()
        if(stroke)
        tex_ctx.stroke()
    }
    function line(a,b,c,d){
        tex_ctx.beginPath()
        tex_ctx.moveTo(a,b)
        tex_ctx.lineTo(c,d)
        tex_ctx.stroke()
    }
    
    tex_ctx.fillStyle='rgb(12, 168, 240)'
    ellipse(186,172,18,18)
    ellipse(413,135,18,18)
    tex_ctx.fillStyle='rgb(23, 197, 255)'
    ellipse(315,261,33,33)
    bezier(159,238,181,223,187,216,233,227,false,true)
    bezier(178,212,225,223,187,216,233,227,false,true)
    tex_ctx.translate(0,25)
    bezier(406,211,496,190,382,104,431,198,true,true)
    tex_ctx.lineWidth=20
    bezier(273,325,276,416,422,355,369,299,true,true)
    bezier(250,311,289,343,378,301,373,295,false,true)
    tex_ctx.beginPath()
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(23, 118, 235)'
    ellipse(416,182,19*0.5,31*0.5)
    tex_ctx.translate(92,38)
    tex_ctx.scale(1/0.3,1/0.3)
    tex_ctx.fillStyle='rgb(242, 255, 0)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(23, 118, 235)'
    tex_ctx.fillRect(0,128-1,128,128/3)
    tex_ctx.fillRect(0,213,128,128/3+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*13,0)
    tex_ctx.fillStyle='rgb(255,50,255)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.strokeStyle='rgb(30,255,100)'
    tex_ctx.lineWidth=11
    tex_ctx.translate(128/2,128/2)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-30,-30)
    tex_ctx.bezierCurveTo(-28,-44,-12,-10,-32,-11)
    tex_ctx.moveTo(16,-34)
    tex_ctx.bezierCurveTo(39,-26,5,-17,25,-14)
    tex_ctx.moveTo(-29,23)
    tex_ctx.bezierCurveTo(-14,22,-19,37,0,32)
    tex_ctx.bezierCurveTo(25,22,-8,25,28,22)
    tex_ctx.stroke()
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(30,255,100)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(255,50,255)'
    tex_ctx.fillRect(0,128-1,128,128/3)
    tex_ctx.fillRect(0,213,128,128/3+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*14,0)
    tex_ctx.fillStyle='rgb(219, 72, 92)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.strokeStyle='rgb(100,0,0)'
    tex_ctx.fillStyle='rgb(100,0,0)'
    tex_ctx.lineWidth=6
    tex_ctx.translate(128/2,128/2)
    tex_ctx.fillRect(-128*0.5,-128*0.5,128*0.5,128)
    tex_ctx.beginPath()
    tex_ctx.moveTo(30,-10)
    tex_ctx.lineTo(30,-25)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.ellipse(30,-24,10,5,0,-3.0,-12.7)
    tex_ctx.stroke()
    tex_ctx.strokeStyle='rgb(219,72,92)'
    tex_ctx.fillStyle='rgb(219,72,92)'
    tex_ctx.fillRect(-128*0.5,128*0.5,128,129)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-30,-10)
    tex_ctx.lineTo(-30,-25)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.ellipse(-30,-24,10,5,0,-3.0,-12.7)
    tex_ctx.stroke()
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(100,0,0)'
    tex_ctx.translate(0,128)
    tex_ctx.beginPath()
    tex_ctx.moveTo(128*0.5,0)
    tex_ctx.lineTo(0,128*0.5)
    tex_ctx.lineTo(128*0.5,128)
    tex_ctx.lineTo(128,128*0.5)
    tex_ctx.fill()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*15,0)
    tex_ctx.fillStyle='rgb(255, 149, 125)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.strokeStyle='rgb(255, 20, 0)'
    tex_ctx.fillStyle='rgb(255, 20, 0)'
    tex_ctx.lineWidth=6
    tex_ctx.translate(128/2,128/2)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-45,-30)
    tex_ctx.bezierCurveTo(-45,-40,-20,-40,-13,-23)
    tex_ctx.moveTo(-19,40)
    tex_ctx.bezierCurveTo(-34,7,32,8,32,40)
    tex_ctx.scale(-1,1)
    tex_ctx.moveTo(-45,-30)
    tex_ctx.bezierCurveTo(-45,-40,-20,-40,-13,-23)
    tex_ctx.stroke()
    tex_ctx.scale(-1,1)
    tex_ctx.beginPath()
    tex_ctx.ellipse(-24,-11,7,10,0,0,7)
    tex_ctx.ellipse(24,-11,7,10,0,0,7)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(255, 149, 125)'
    tex_ctx.beginPath()
    tex_ctx.ellipse(-28,-5,2,4,0,0,7)
    tex_ctx.ellipse(21,-5,2,4,0,0,7)
    tex_ctx.fill()
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(245, 123, 95)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(255, 149, 125)'
    tex_ctx.fillRect(0,128-1,128,128/3)
    tex_ctx.fillStyle='rgb(214, 60, 26)'
    tex_ctx.fillRect(0,213,128,128/3+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*0,256)
    tex_ctx.fillStyle='rgb(255,0,0)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.fillStyle='rgb(255, 255, 255)'
    tex_ctx.lineWidth=6
    tex_ctx.translate(128/2,128/2)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-64,64)
    tex_ctx.lineTo(-64,-32)
    tex_ctx.lineTo(-32,-64)
    tex_ctx.bezierCurveTo(5,0,-5,0,32,-64)
    tex_ctx.lineTo(64,-32)
    tex_ctx.lineTo(64,64)
    tex_ctx.bezierCurveTo(-25,0,25,0,-64,64)
    tex_ctx.moveTo(-20,45-8)
    tex_ctx.bezierCurveTo(-10,60-8,10,60-8,20,45-8)
    tex_ctx.bezierCurveTo(10,55-8,-10,55-8,-20,45-8)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.ellipse(-25,0,4,3,0,0,7)
    tex_ctx.rect(-33,0,10,1)
    tex_ctx.moveTo(25,0)
    tex_ctx.ellipse(25,0,4,3,0,0,7)
    tex_ctx.rect(23,0,10,1)
    tex_ctx.fillStyle=tex_ctx.strokeStyle='rgb(255, 0, 0)'
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(255,255,255)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(255,0,0)'
    tex_ctx.fillRect(0,128-1,128,128/3)
    tex_ctx.fillRect(0,213,128,128/3+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*1,256)
    tex_ctx.fillStyle='rgb(0,0,255)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.fillStyle='rgb(255, 255, 255)'
    tex_ctx.lineWidth=5
    tex_ctx.translate(128/2,128/2)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-64,-64)
    tex_ctx.lineTo(0,-25)
    tex_ctx.lineTo(64,-64)
    tex_ctx.lineTo(64,-64+20)
    tex_ctx.lineTo(50,-64+30)
    tex_ctx.lineTo(64,-64+40)
    tex_ctx.lineTo(64,-64+60)
    tex_ctx.lineTo(50,-64+70)
    tex_ctx.lineTo(64,-64+90)
    tex_ctx.lineTo(15,-64+90)
    tex_ctx.bezierCurveTo(15,10,-15,10,-15,-64+90)
    tex_ctx.lineTo(-64,-64+90)
    tex_ctx.lineTo(-50,-64+70)
    tex_ctx.lineTo(-64,-64+60)
    tex_ctx.lineTo(-64,-64+40)
    tex_ctx.lineTo(-50,-64+30)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(-30,45)
    tex_ctx.lineTo(-20,55)
    tex_ctx.lineTo(20,55)
    tex_ctx.lineTo(30,45)
    tex_ctx.moveTo(-30+3,45-3)
    tex_ctx.lineTo(-30-3,45+3)
    tex_ctx.moveTo(30-3,45-3)
    tex_ctx.lineTo(30+3,45+3)
    tex_ctx.strokeStyle='rgb(255, 255, 255)'
    tex_ctx.stroke()
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(255,255,255)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(0,0,255)'
    tex_ctx.fillRect(0,128-1,128,128/3)
    tex_ctx.fillRect(0,213,128,128/3+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*2,256)
    tex_ctx.fillStyle='rgb(0,0,0)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.lineWidth=6
    tex_ctx.translate(128/2,128/2)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-45,-40)
    tex_ctx.lineTo(-45,40)
    tex_ctx.moveTo(-30,-40)
    tex_ctx.lineTo(-30,40)
    tex_ctx.moveTo(-15,-40)
    tex_ctx.lineTo(-15,40)
    tex_ctx.moveTo(0,-40)
    tex_ctx.lineTo(0,40)
    tex_ctx.moveTo(45,-40)
    tex_ctx.lineTo(45,40)
    tex_ctx.moveTo(30,-40)
    tex_ctx.lineTo(30,40)
    tex_ctx.moveTo(15,-40)
    tex_ctx.lineTo(15,40)
    tex_ctx.fillStyle='rgb(255,255,0)'
    tex_ctx.strokeStyle='rgb(255,255,0)'
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.moveTo(-64,-64)
    tex_ctx.lineTo(-64,-40)
    tex_ctx.bezierCurveTo(-39,-15,39,-15,64,-40)
    tex_ctx.lineTo(64,-64)
    tex_ctx.moveTo(-64,64)
    tex_ctx.lineTo(-64,10)
    tex_ctx.bezierCurveTo(-39,25,39,25,64,10)
    tex_ctx.lineTo(64,64)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(-15,40)
    tex_ctx.lineTo(0,55)
    tex_ctx.lineTo(15,40)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.stroke()
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(255,255,255)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(255,255,0)'
    tex_ctx.fillRect(0,128-1,128,128/3)
    tex_ctx.fillRect(0,213,128,128/3+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*3,256)
    tex_ctx.fillStyle='rgb(17, 32, 43)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.lineWidth=6
    tex_ctx.translate(128/2,128/2)
    tex_ctx.fillStyle='rgb(59, 142, 209)'
    tex_ctx.strokeStyle='rgb(59, 142, 209)'
    tex_ctx.beginPath()
    tex_ctx.ellipse(-26,-29,6,8,9.2,7,15)
    tex_ctx.ellipse(26,-29,7,9,-9.2,7,15)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.ellipse(0,-2,5,5,-9.2,7,15)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(-26,23)
    tex_ctx.bezierCurveTo(-10,38,24,31,29,21)
    tex_ctx.moveTo(-25,13)
    tex_ctx.bezierCurveTo(-23,21,-29,30,-36,28)
    tex_ctx.moveTo(31,12)
    tex_ctx.bezierCurveTo(28,21,34,30,40,28)
    tex_ctx.stroke()
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(59, 142, 209)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(17, 32, 43)'
    tex_ctx.fillRect(0,128-1,128,128/3)
    tex_ctx.fillRect(0,213,128,128/3+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*4,256)
    tex_ctx.fillStyle='rgb(17, 32, 43)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.lineWidth=6
    tex_ctx.translate(128/2,128/2)
    tex_ctx.fillStyle='rgb(243, 73, 45)'
    tex_ctx.strokeStyle='rgb(243, 73, 45)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-43+7,-20)
    tex_ctx.bezierCurveTo(-35+7,-28,-22+7,-19,-25+7,-16)
    tex_ctx.moveTo(43-7,-20)
    tex_ctx.bezierCurveTo(35-7,-28,22-7,-19,25-7,-16)
    tex_ctx.stroke()
    tex_ctx.lineWidth=4
    tex_ctx.beginPath()
    tex_ctx.moveTo(-26,23)
    tex_ctx.bezierCurveTo(-11,40,16,32,26,21)
    tex_ctx.bezierCurveTo(13,58,-20,32,-26,23)
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(243, 73, 45)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(17, 32, 43)'
    tex_ctx.fillRect(0,128-1,128,128/3)
    tex_ctx.fillRect(0,213,128,128/3+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*5,256)
    tex_ctx.fillStyle='rgb(59, 94, 157)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.lineWidth=4
    tex_ctx.translate(128/2,128/2)
    tex_ctx.fillStyle='rgb(182, 220, 248)'
    tex_ctx.strokeStyle='rgb(182, 220, 248)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-13,-25)
    tex_ctx.bezierCurveTo(-16,-9,-41,-6,-39,-26)
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(-39,-26)
    tex_ctx.bezierCurveTo(-24,-23,-13,-20,-8,-29)
    tex_ctx.stroke()
    tex_ctx.translate(51,0)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-13,-25)
    tex_ctx.bezierCurveTo(-16,-9,-41,-6,-39,-26)
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(-39,-26)
    tex_ctx.bezierCurveTo(-24,-23,-13,-20,-8,-29)
    tex_ctx.stroke()
    tex_ctx.scale(1.45,1.45)
    tex_ctx.translate(-12,35)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-13,-25)
    tex_ctx.bezierCurveTo(-16,-9,-41,-6,-39,-26)
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(-39,-26)
    tex_ctx.bezierCurveTo(-24,-23,-13,-20,-8,-29)
    tex_ctx.stroke()
    tex_ctx.translate(12,-35)
    tex_ctx.scale(1/1.45,1/1.45)
    tex_ctx.translate(-51,0)
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(59, 142, 209)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(59, 94, 157)'
    tex_ctx.fillRect(0,128-1,128,128/3)
    tex_ctx.fillRect(0,213,128,128/3+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*6,256)
    tex_ctx.fillStyle='rgb(241,241,241)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.lineWidth=6
    tex_ctx.translate(128/2,128/2)
    tex_ctx.fillStyle='rgb(243, 73, 45)'
    tex_ctx.strokeStyle='rgb(243, 73, 45)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-16,29)
    tex_ctx.bezierCurveTo(-5,42,0,37,10,35)
    tex_ctx.stroke()
    tex_ctx.lineWidth=4
    tex_ctx.beginPath()
    tex_ctx.moveTo(-49,-25)
    tex_ctx.bezierCurveTo(-11,-13,23,-25,45,-36)
    tex_ctx.bezierCurveTo(45,19,22,13,2,-11)
    tex_ctx.bezierCurveTo(-10,22,-36,13,-49,-25)
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(243, 73, 45)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(241,241,241)'
    tex_ctx.fillRect(0,128-1,128,128/3)
    tex_ctx.fillRect(0,213,128,128/3+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*7,256)
    tex_ctx.fillStyle='rgb(160,160,160)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.lineWidth=6
    tex_ctx.translate(128/2,128/2)
    tex_ctx.fillStyle='rgb(0,0,0)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-41,-35)
    tex_ctx.bezierCurveTo(-41,-32,-22,-25,-18,-28)
    tex_ctx.moveTo(41,-35)
    tex_ctx.bezierCurveTo(41,-32,22,-25,18,-28)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.moveTo(-15,40-8)
    tex_ctx.bezierCurveTo(5,24-8,-5,24-8,15,40-8)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.ellipse(-28,-14,7,9,0,0,7)
    tex_ctx.ellipse(28,-14,7,9,0,0,7)
    tex_ctx.fill()
    tex_ctx.fillRect(-53.5,11.4,23,9)
    tex_ctx.fillRect(53.5-23,11.4,23,9)
    tex_ctx.fillStyle='rgb(160,160,160)'
    tex_ctx.beginPath()
    tex_ctx.ellipse(-32,-12,3,5,0,0,7)
    tex_ctx.ellipse(24,-12,3,5,0,0,7)
    tex_ctx.fill()
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(240,240,240)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(160,160,160)'
    tex_ctx.fillRect(0,128-1,128,128/3)
    tex_ctx.fillRect(0,213,128,128/3+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*8,256)
    tex_ctx.fillStyle='rgb(242, 255, 255)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.lineWidth=6
    tex_ctx.translate(128/2,128/2)
    tex_ctx.strokeStyle='rgb(100,100,150)'
    tex_ctx.beginPath()
    tex_ctx.translate(-65,-52)
    tex_ctx.moveTo(35,15)
    tex_ctx.bezierCurveTo(25,22,15,41,30,49)
    tex_ctx.bezierCurveTo(52,54,43,18,33,37)
    tex_ctx.translate(65*2,-9)
    tex_ctx.scale(-1,1)
    tex_ctx.moveTo(35,15)
    tex_ctx.bezierCurveTo(25,22,15,41,30,49)
    tex_ctx.bezierCurveTo(52,54,43,18,33,37)
    tex_ctx.scale(-1,1)
    tex_ctx.translate(-65,9+53)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.moveTo(7+4,11)
    tex_ctx.bezierCurveTo(4,40,-10+4,35,-12+4,31)
    tex_ctx.bezierCurveTo(-13+4,12,-1+4,22,7+4,11)
    tex_ctx.stroke()
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(242, 255, 255)'
    tex_ctx.fillRect(0,128-1,128,128.5)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*9,256)
    tex_ctx.fillStyle='rgb(242, 255, 255)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.lineWidth=6
    tex_ctx.translate(128/2,128/2)
    tex_ctx.strokeStyle='rgb(100,100,150)'
    tex_ctx.beginPath()
    tex_ctx.translate(-65,-52)
    tex_ctx.moveTo(35,15)
    tex_ctx.bezierCurveTo(25,22,15,41,30,49)
    tex_ctx.bezierCurveTo(52,54,43,18,33,37)
    tex_ctx.translate(65*2,-9)
    tex_ctx.scale(-1,1)
    tex_ctx.moveTo(35,15)
    tex_ctx.bezierCurveTo(25,22,15,41,30,49)
    tex_ctx.bezierCurveTo(52,54,43,18,33,37)
    tex_ctx.scale(-1,1)
    tex_ctx.translate(-65,9+53)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.moveTo(7+4,11)
    tex_ctx.bezierCurveTo(4,40,-10+4,35,-12+4,31)
    tex_ctx.bezierCurveTo(-13+4,12,-1+4,22,7+4,11)
    tex_ctx.stroke()
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(59, 142, 209)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(17, 32, 43)'
    tex_ctx.fillRect(0,128-1,128,128.5)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*9,256)
    tex_ctx.fillStyle='rgb(17, 32, 43)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.lineWidth=6
    tex_ctx.translate(128/2,128/2)
    tex_ctx.fillStyle='rgb(59, 142, 209)'
    tex_ctx.strokeStyle='rgb(59, 142, 209)'
    tex_ctx.translate(0,10)
    tex_ctx.beginPath()
    tex_ctx.moveTo(64,0+5)
    tex_ctx.lineTo(48,10+2.5)
    tex_ctx.lineTo(60,20)
    tex_ctx.lineTo(48,30-2.5)
    tex_ctx.lineTo(64,40-5)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(-64,0+5)
    tex_ctx.lineTo(-48,10+2.5)
    tex_ctx.lineTo(-60,20)
    tex_ctx.lineTo(-48,30-2.5)
    tex_ctx.lineTo(-64,40-5)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(43,-45)
    tex_ctx.lineTo(14,-40)
    tex_ctx.moveTo(-39,-44)
    tex_ctx.lineTo(-11,-40)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.ellipse(26,-30,10,13,0,0,7)
    tex_ctx.ellipse(-20,-30,10,13,0,0,7)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(17, 32, 43)'
    tex_ctx.beginPath()
    tex_ctx.ellipse(19,-28,6,8,0,0,7)
    tex_ctx.ellipse(-26,-27,6,8,0,0,7)
    tex_ctx.fill()
    tex_ctx.translate(0,-10)
    tex_ctx.fillStyle='rgb(59, 142, 209)'
    tex_ctx.translate(-31,51)
    tex_ctx.scale(-1.4,1.4)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-13,-25)
    tex_ctx.bezierCurveTo(-16,-9,-41,-6,-39,-26)
    tex_ctx.stroke()
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(-39,-26)
    tex_ctx.bezierCurveTo(-24,-23,-13,-20,-8,-29)
    tex_ctx.stroke()
    tex_ctx.scale(1/-1.4,1/1.4)
    tex_ctx.translate(31,-51)
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(59, 142, 209)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(17, 32, 43)'
    tex_ctx.fillRect(0,128-1,128,128/3)
    tex_ctx.fillRect(0,213,128,128/3+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*10,256)
    tex_ctx.fillStyle='rgb(17, 32, 43)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.lineWidth=5
    tex_ctx.translate(128/2,128/2)
    tex_ctx.fillStyle='rgb(243,73,45)'
    tex_ctx.strokeStyle=' rgb(243,73,45)'
    tex_ctx.translate(0,10)
    tex_ctx.beginPath()
    tex_ctx.moveTo(64,0+5)
    tex_ctx.lineTo(48,10+2.5)
    tex_ctx.lineTo(60,20)
    tex_ctx.lineTo(48,30-2.5)
    tex_ctx.lineTo(64,40-5)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(-64,0+5)
    tex_ctx.lineTo(-48,10+2.5)
    tex_ctx.lineTo(-60,20)
    tex_ctx.lineTo(-48,30-2.5)
    tex_ctx.lineTo(-64,40-5)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(43,-45)
    tex_ctx.lineTo(14,-40)
    tex_ctx.moveTo(-39,-44)
    tex_ctx.lineTo(-11,-40)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.ellipse(26,-30,10,13,0,0,7)
    tex_ctx.ellipse(-20,-30,10,13,0,0,7)
    tex_ctx.fill()
    tex_ctx.strokeStyle='rgb(17, 32, 43)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(39,-29)
    tex_ctx.lineTo(0,-22)
    tex_ctx.lineTo(-39,-29)
    tex_ctx.stroke()
    tex_ctx.translate(0,-10)
    tex_ctx.strokeStyle='rgb(243,73,45)'
    tex_ctx.translate(-31,51)
    tex_ctx.scale(-1.4,1.4)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-12,-21)
    tex_ctx.bezierCurveTo(-12,-14,-31,-12,-36,-17)
    tex_ctx.stroke()
    tex_ctx.scale(1/-1.4,1/1.4)
    tex_ctx.translate(31,-51)
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(243,73,45)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(17, 32, 43)'
    tex_ctx.fillRect(0,128-1,128,128/3)
    tex_ctx.fillRect(0,213,128,128/3+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*11,256)
    tex_ctx.fillStyle='rgb(50, 190, 71)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.lineWidth=6
    tex_ctx.translate(128/2,128/2)
    tex_ctx.fillStyle='rgb(17, 32, 43)'
    tex_ctx.strokeStyle='rgb(17, 32, 43)'
    tex_ctx.translate(0,10)
    tex_ctx.beginPath()
    tex_ctx.ellipse(22,-30,7,9,0,0,7)
    tex_ctx.ellipse(-22,-30,7,9,0,0,7)
    tex_ctx.fill()
    tex_ctx.fillRect(-41,-44,30,10)
    tex_ctx.fillRect(41-30,-44,30,10)
    tex_ctx.fillStyle='rgb(50, 190, 71)'
    tex_ctx.lineWidth=3
    tex_ctx.beginPath()
    tex_ctx.moveTo(-40,10)
    tex_ctx.lineTo(-36,14)
    tex_ctx.lineTo(-40,18)
    tex_ctx.moveTo(40,10)
    tex_ctx.lineTo(36,14)
    tex_ctx.lineTo(40,18)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.ellipse(18,-28,4,5,0,0,7)
    tex_ctx.ellipse(-26,-28,4,5,0,0,7)
    tex_ctx.fill()
    tex_ctx.translate(0,-10)
    tex_ctx.lineWidth=6
    tex_ctx.beginPath()
    tex_ctx.moveTo(-15,20)
    tex_ctx.lineTo(0,30)
    tex_ctx.lineTo(15,20)
    tex_ctx.stroke()
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(17, 32, 43)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(50, 190, 71)'
    tex_ctx.fillRect(0,128-1,128,128/3)
    tex_ctx.fillRect(0,213,128,128/3+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*12,256)
    tex_ctx.fillStyle='rgb(240, 211, 24)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.lineWidth=6
    tex_ctx.translate(128/2,128/2)
    tex_ctx.fillStyle='rgb(17, 32, 43)'
    tex_ctx.strokeStyle='rgb(17, 32, 43)'
    tex_ctx.beginPath()
    tex_ctx.ellipse(-26-6,-29,9,9,0,0,7)
    tex_ctx.ellipse(26-5,-29,9,9,0,0,7)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(-37,23)
    tex_ctx.bezierCurveTo(-10,38,24,31,42,21)
    tex_ctx.moveTo(-36,15)
    tex_ctx.bezierCurveTo(-36,21,-35,28,-44,29)
    tex_ctx.moveTo(44,12)
    tex_ctx.bezierCurveTo(40,21,46,30,48,28)
    tex_ctx.moveTo(-41,-34)
    tex_ctx.bezierCurveTo(-22,-39,-14,-32,-13,-32)
    tex_ctx.moveTo(-42+55,-34)
    tex_ctx.bezierCurveTo(-22+55,-39,-14+55,-32,-13+55,-32)
    tex_ctx.stroke()
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(17, 32, 43)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(240, 211, 24)'
    tex_ctx.fillRect(0,128-1,128,128/3)
    tex_ctx.fillRect(0,213,128,128/3+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*13,256)
    tex_ctx.fillStyle='rgb(252, 186, 3)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.lineWidth=4
    tex_ctx.translate(128/2,128/2)
    tex_ctx.fillStyle='rgb(99, 73, 39)'
    tex_ctx.beginPath()
    tex_ctx.translate(-25,0)
    tex_ctx.moveTo(-8,-64)
    tex_ctx.bezierCurveTo(0,-30,0,-30,8,-64)
    tex_ctx.translate(25,0)
    tex_ctx.moveTo(-8,-64)
    tex_ctx.bezierCurveTo(0,-20,0,-20,8,-64)
    tex_ctx.translate(25,0)
    tex_ctx.moveTo(-8,-64)
    tex_ctx.bezierCurveTo(0,-30,0,-30,8,-64)
    tex_ctx.translate(-25,0)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(17, 32, 43)'
    tex_ctx.strokeStyle='rgb(17, 32, 43)'
    tex_ctx.beginPath()
    tex_ctx.translate(-25,-10)
    tex_ctx.scale(1.2,1.5)
    tex_ctx.rotate(0.15)
    tex_ctx.moveTo(-10,0)
    tex_ctx.bezierCurveTo(-8,7,8,7,10,0)
    tex_ctx.bezierCurveTo(8,-7,-8,-7,-10,0)
    tex_ctx.setTransform(1,0,0,1,0,0)
    tex_ctx.translate(128*13+128/2,256+128/2)
    tex_ctx.translate(25,-10)
    tex_ctx.scale(1.2,1.5)
    tex_ctx.rotate(-0.15)
    tex_ctx.moveTo(-10,0)
    tex_ctx.bezierCurveTo(-8,7,8,7,10,0)
    tex_ctx.bezierCurveTo(8,-7,-8,-7,-10,0)
    tex_ctx.setTransform(1,0,0,1,0,0)
    tex_ctx.translate(128*13+128/2,256+128/2)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(-7,10)
    tex_ctx.bezierCurveTo(-5,13,5,13,7,10)
    tex_ctx.moveTo(0,13)
    tex_ctx.lineTo(0,22)
    tex_ctx.moveTo(-20,20)
    tex_ctx.bezierCurveTo(-10,28,-5,28,0,20)
    tex_ctx.moveTo(20,20)
    tex_ctx.bezierCurveTo(10,28,5,28,0,20)
    tex_ctx.moveTo(-31,14)
    tex_ctx.lineTo(-62,0)
    tex_ctx.moveTo(-31,22)
    tex_ctx.lineTo(-62,27)
    tex_ctx.moveTo(31,14)
    tex_ctx.lineTo(62,0)
    tex_ctx.moveTo(31,22)
    tex_ctx.lineTo(62,27)
    tex_ctx.stroke()
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(99, 73, 39)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(252, 186, 3)'
    tex_ctx.fillRect(0,128-1,128,128/3)
    tex_ctx.fillRect(0,213,128,128/3+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*14,256)
    tex_ctx.fillStyle='rgb(117, 184, 235)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.lineWidth=8
    tex_ctx.translate(128/2,128/2)
    tex_ctx.fillStyle='rgb(255,255,255)'
    tex_ctx.strokeStyle='rgb(255,255,255)'
    tex_ctx.beginPath()
    tex_ctx.translate(0,17)
    tex_ctx.moveTo(-20,0)
    tex_ctx.lineTo(0,15)
    tex_ctx.lineTo(20,0)
    tex_ctx.translate(0,-14)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.scale(0.4*0.9,0.6*0.9)
    tex_ctx.translate(-75,-37)
    tex_ctx.moveTo(0,40)
    tex_ctx.bezierCurveTo(10,10,10,10,40,0)
    tex_ctx.bezierCurveTo(10,-10,10,-10,0,-40)
    tex_ctx.bezierCurveTo(-10,-10,-10,-10,-40,0)
    tex_ctx.bezierCurveTo(-10,10,-10,10,0,40)
    tex_ctx.translate(75*2,0)
    tex_ctx.moveTo(0,40)
    tex_ctx.bezierCurveTo(10,10,10,10,40,0)
    tex_ctx.bezierCurveTo(10,-10,10,-10,0,-40)
    tex_ctx.bezierCurveTo(-10,-10,-10,-10,-40,0)
    tex_ctx.bezierCurveTo(-10,10,-10,10,0,40)
    tex_ctx.fill()
    tex_ctx.setTransform(1,0,0,1,0,0)
    tex_ctx.translate(128*14,256)
    tex_ctx.fillStyle='rgb(255,255,255)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(117, 184, 235)'
    tex_ctx.fillRect(0,128-1,128,128/3)
    tex_ctx.fillRect(0,213,128,128/3+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*15,256)
    tex_ctx.fillStyle='rgb(27, 42, 53)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.lineWidth=6
    tex_ctx.translate(128/2,128/2)
    tex_ctx.fillStyle='rgb(243, 73, 45)'
    tex_ctx.strokeStyle='rgb(243, 73, 45)'
    tex_ctx.beginPath()
    tex_ctx.translate(0,10)
    tex_ctx.moveTo(-37,-47)
    tex_ctx.bezierCurveTo(-26,-36,-12,-45,-20,-36)
    tex_ctx.moveTo(37,-47)
    tex_ctx.bezierCurveTo(26,-36,12,-45,20,-36)
    tex_ctx.moveTo(-25,-37)
    tex_ctx.ellipse(-21,-31,6,10,0,0,7)
    tex_ctx.moveTo(25,-37)
    tex_ctx.ellipse(21,-31,6,10,3.141592,0,7)
    tex_ctx.translate(0,-3)
    
    for(let i=-1.2,j=0,inc=Math.PI*2/15;i<Math.PI-1.0;i+=inc,j++){
        
        let ri=(j-1)%2===0?15:30,r=j%2===0?15:30
        
        tex_ctx.moveTo(Math.sin(i-inc)*ri*1.25,Math.cos(i-inc)*ri+10)
        tex_ctx.lineTo(Math.sin(i)*r*1.25,Math.cos(i)*r+10)
    }
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    tex_ctx.translate(128*15,256)
    tex_ctx.fillStyle='rgb(243, 73, 45)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(27, 42, 53)'
    tex_ctx.fillRect(0,128-1,128,128/3)
    tex_ctx.fillRect(0,213,128,128/3+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*0,256*2)
    tex_ctx.fillStyle='rgb(150, 106, 85)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.translate(128/2,128/2)
    tex_ctx.lineWidth=6
    tex_ctx.fillStyle='rgb(255,255,255)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-37,-10)
    tex_ctx.bezierCurveTo(-35,-55,-4,-29,-15,-10)
    tex_ctx.bezierCurveTo(-16,-5,-36,-5,-37,-10)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(0,0,0)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-30,-7)
    tex_ctx.bezierCurveTo(-32,-22,-15,-22,-15,-10)
    tex_ctx.bezierCurveTo(-16,-5,-36,-5,-30,-7)
    tex_ctx.fill()
    tex_ctx.scale(-1,1)
    tex_ctx.fillStyle='rgb(255,255,255)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-37,-10)
    tex_ctx.bezierCurveTo(-35,-55,-4,-29,-15,-10)
    tex_ctx.bezierCurveTo(-16,-5,-36,-5,-37,-10)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(0,0,0)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-30,-7)
    tex_ctx.bezierCurveTo(-32,-22,-15,-22,-15,-10)
    tex_ctx.bezierCurveTo(-16,-5,-36,-5,-30,-7)
    tex_ctx.fill()
    tex_ctx.fillRect(30.6,1.6,25,12)
    tex_ctx.beginPath()
    tex_ctx.ellipse(1,2,4,4,0,0,7)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(-19,21)
    tex_ctx.bezierCurveTo(-6,34,9,32,19,21)
    tex_ctx.lineWidth=4
    tex_ctx.stroke()
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(255, 200, 18)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(150, 106, 85)'
    tex_ctx.fillRect(0,128-1,128,128/3)
    tex_ctx.fillRect(0,213,128,128/3+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*1,256*2)
    tex_ctx.fillStyle='rgb(229, 178, 56)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.translate(128/2,128/2)
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle='rgb(0,0,0)'
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.beginPath()
    tex_ctx.ellipse(-26,-21,8,12,0,0,7)
    tex_ctx.ellipse(26,-21,8,12,0,0,7)
    tex_ctx.fill()
    tex_ctx.beginPath()
    tex_ctx.moveTo(-40,-38)
    tex_ctx.lineTo(-21,-33)
    tex_ctx.moveTo(40,-38)
    tex_ctx.lineTo(21,-33)
    tex_ctx.moveTo(0,3)
    tex_ctx.lineTo(0,32)
    tex_ctx.bezierCurveTo(0,40,-26,40,-26,32)
    tex_ctx.moveTo(0,32)
    tex_ctx.bezierCurveTo(0,40,26,40,26,32)
    tex_ctx.stroke()
    ellipse(0,3,8,5,0,0,7)
    ellipse(24,10,3,3,0,0,7)
    ellipse(32,21,3,3,0,0,7)
    ellipse(16,21,3,3,0,0,7)
    ellipse(0,3,8,5,0,0,7)
    ellipse(-24,10,3,3,0,0,7)
    ellipse(-32,21,3,3,0,0,7)
    ellipse(-16,21,3,3,0,0,7)
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(229, 207, 56)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(229, 178, 56)'
    tex_ctx.fillRect(0,128-1,128,128/3)
    tex_ctx.fillRect(0,213,128,128/3+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*2,256*2)
    tex_ctx.fillStyle='rgb(27, 42, 53)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.translate(128/2,128/2)
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle='rgb(68, 152, 213)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-64,-50)
    tex_ctx.bezierCurveTo(-34,-24,34,-24,64,-50)
    tex_ctx.lineTo(64,-8)
    tex_ctx.bezierCurveTo(44,20,-44,20,-64,-8)
    tex_ctx.fill()
    tex_ctx.fillStyle='rgb(27, 42, 53)'
    ellipse(-27,-13,12,7,0.3)
    ellipse(27,-13,12,7,-0.3)
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(27, 42, 53)'
    tex_ctx.fillRect(0,128-1,128,128+2)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*3,256*2)
    tex_ctx.fillStyle='rgb(159, 159, 159)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.translate(128/2,128/2)
    tex_ctx.lineWidth=3
    tex_ctx.fillStyle='rgb(255,255,255)'
    tex_ctx.strokeStyle='rgb(255,0,0)'
    ellipse(-24,-23,5,5)
    ellipse(24,-23,5,5)
    tex_ctx.beginPath()
    tex_ctx.translate(-41,0)
    tex_ctx.moveTo(0,0)
    tex_ctx.lineTo(-5,5)
    tex_ctx.moveTo(0+7,0)
    tex_ctx.lineTo(-5+7,5)
    tex_ctx.moveTo(0+7+7,0)
    tex_ctx.lineTo(-5+7+7,5)
    tex_ctx.translate(70,0)
    tex_ctx.moveTo(0,0)
    tex_ctx.lineTo(-5,5)
    tex_ctx.moveTo(0+7,0)
    tex_ctx.lineTo(-5+7,5)
    tex_ctx.moveTo(0+7+7,0)
    tex_ctx.lineTo(-5+7+7,5)
    tex_ctx.translate(-29,0)
    tex_ctx.stroke()
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(159, 159, 159)'
    tex_ctx.fillRect(0,128-1,128,128+2)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*4,256*2)
    tex_ctx.fillStyle='rgb(27, 42, 53)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.translate(128/2,128/2)
    tex_ctx.fillStyle='rgb(229, 207, 56)'
    tex_ctx.fillRect(-10,-20,20,10)
    tex_ctx.fillRect(-64,-40,35,50)
    ellipse(-64+35,-15,25,25)
    tex_ctx.fillRect(64-35,-40,35,50)
    ellipse(64-35,-15,25,25)
    tex_ctx.fillStyle='rgb(27, 42, 53)'
    ellipse(-27,-15,8,12)
    ellipse(27,-15,8,12)
    tex_ctx.fillStyle='rgb(229, 207, 56)'
    ellipse(21,-16,4,6)
    ellipse(-32,-16,4,6)
    tex_ctx.translate(-128/2,-128/2)
    tex_ctx.fillStyle='rgb(229, 207, 56)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(27, 42, 53)'
    tex_ctx.fillRect(0,128-1,128,128/3)
    tex_ctx.fillRect(0,213,128,128/3+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*5,256*2)
    tex_ctx.fillStyle='rgb(27, 42, 53)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.translate(128/2,128/2-8)
    tex_ctx.lineWidth=6
    tex_ctx.fillStyle='rgb(241, 241, 241)'
    tex_ctx.strokeStyle='rgb(241, 241, 241)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-11,-33)
    tex_ctx.bezierCurveTo(-19,-26,-18,-20,-38,-16)
    tex_ctx.moveTo(6,-33)
    tex_ctx.bezierCurveTo(9,-26,11,-20,30,-16)
    tex_ctx.stroke()
    tex_ctx.lineWidth=4
    tex_ctx.beginPath()
    tex_ctx.moveTo(-13,40)
    tex_ctx.bezierCurveTo(-3,39,6,39,13,40)
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(159, 159, 159)'
    tex_ctx.strokeStyle='rgb(159, 159, 159)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-12,-4)
    tex_ctx.bezierCurveTo(-15,23,-41,14,-37,-3)
    tex_ctx.lineTo(-12,-4)
    tex_ctx.moveTo(12,-4)
    tex_ctx.bezierCurveTo(8,27,40,12,34,-3)
    tex_ctx.lineTo(12,-4)
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(241, 241, 241)'
    tex_ctx.strokeStyle='rgb(241, 241, 241)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-12,-4)
    tex_ctx.bezierCurveTo(-22,13,-32,3,-37,-3)
    tex_ctx.lineTo(-12,-4)
    tex_ctx.moveTo(12,-4)
    tex_ctx.bezierCurveTo(19,13,32,3,34,-3)
    tex_ctx.lineTo(12,-4)
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.translate(-128/2,-128/2+8)
    tex_ctx.fillStyle='rgb(159, 159, 159)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(27, 42, 53)'
    tex_ctx.fillRect(0,128-1,128,128/3)
    tex_ctx.fillRect(0,213,128,128/3+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*6,256*2)
    tex_ctx.fillStyle='rgb(27, 42, 53)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.translate(128/2,128/2-15)
    tex_ctx.lineWidth=6
    tex_ctx.fillStyle='rgb(241, 241, 241)'
    tex_ctx.strokeStyle='rgb(241, 241, 241)'
    ellipse(-20,-13,5,10)
    ellipse(20,-13,5,10)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-5)
    tex_ctx.bezierCurveTo(-25,-7,-29,-7,-34,-3)
    tex_ctx.moveTo(-20,-5)
    tex_ctx.bezierCurveTo(-25,1,-29,-7,-24,-3)
    tex_ctx.moveTo(20,-5)
    tex_ctx.bezierCurveTo(25,-7,29,-7,34,-3)
    tex_ctx.moveTo(20,-5)
    tex_ctx.bezierCurveTo(25,1,29,-7,24,-3)
    tex_ctx.moveTo(-10,50)
    tex_ctx.bezierCurveTo(-10,16,10,15,10,50)
    tex_ctx.bezierCurveTo(2,49,3,46,-10,50)
    tex_ctx.stroke()
    tex_ctx.lineWidth=3
    tex_ctx.beginPath()
    tex_ctx.moveTo(-2,24)
    tex_ctx.bezierCurveTo(-5,55,1,15,2,25)
    tex_ctx.moveTo(5,29)
    tex_ctx.bezierCurveTo(1,58,2,15,7,30)
    tex_ctx.stroke()
    tex_ctx.translate(-128/2,-128/2+15)
    tex_ctx.fillStyle='rgb(241, 241, 241)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(27, 42, 53)'
    tex_ctx.fillRect(0,128-1,128,128/3)
    tex_ctx.fillRect(0,213,128,128/3+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*7,256*2)
    tex_ctx.fillStyle='rgb(241, 241, 241)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.translate(128/2,128/2-5)
    tex_ctx.lineWidth=3.5
    tex_ctx.fillStyle='rgb(59, 142, 209)'
    tex_ctx.strokeStyle='rgb(241, 241, 241)'
    ellipse(-22,-20,9,12)
    ellipse(22,-20,9,12)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-32,-20)
    tex_ctx.lineTo(0,-18)
    tex_ctx.lineTo(32,-20)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.moveTo(0,-2)
    tex_ctx.lineTo(0,13)
    tex_ctx.lineTo(32,5)
    tex_ctx.fill()
    for(let i=0.18;i<Math.PI;i+=Math.PI/8){
        
        ellipse(Math.cos(i)*40,Math.sin(i)*30+15,6,6)
    }
    tex_ctx.translate(-128/2,-128/2+4)
    tex_ctx.fillStyle='rgb(59, 142, 209)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(241, 241, 241)'
    tex_ctx.fillRect(0,128-1,128,128/3)
    tex_ctx.fillRect(0,213,128,128/3+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*8,256*2)
    tex_ctx.fillStyle='rgb(27, 42, 53)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.translate(128/2,128/2-5)
    tex_ctx.lineWidth=4
    tex_ctx.fillStyle='rgb(245, 139, 222)'
    ellipse(-30,6,8,6)
    ellipse(30,6,8,6)
    tex_ctx.fillStyle='rgb(230,230,230)'
    ellipse(-20,-11,5,5)
    ellipse(20,-11,5,5)
    ellipse(0,4,3,3)
    tex_ctx.strokeStyle='rgb(230,230,230)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-9,19)
    tex_ctx.bezierCurveTo(0,24,0,23,9,20)
    tex_ctx.stroke()
    tex_ctx.translate(-128/2,-128/2+4)
    tex_ctx.fillStyle='rgb(136, 220, 232)'
    tex_ctx.fillRect(0,128,128,128)
    tex_ctx.fillStyle='rgb(27, 42, 53)'
    tex_ctx.fillRect(0,128-1,128,128/3)
    tex_ctx.fillStyle='rgb(241, 241, 241)'
    tex_ctx.fillRect(0,213,128,128/3+1)
    tex_ctx.setTransform(1,0,0,1,0,0)
}

window.textures_flowers=function(tex_ctx){

    let _COLORS={
        
        blue:'rgb(20,84,196)',
        red:'rgb(255, 35, 0)',
        white:'rgb(255,255,255)',
        blueArr:[20,84,186],
        redArr:[255,0,0],
        whiteArr:[255,255,255]
        
    }
    
    tex_ctx.fillStyle='rgb(0,153,0)'
    tex_ctx.fillRect(0,0,1024,1024)
    
    tex_ctx.translate(128,128)
    tex_ctx.scale(0.7,0.7)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(0,0,0,0.3)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle=_COLORS.red
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,25,0,6)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(157, 242, 100)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle='rgb(226, 255, 138)'
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*3,128)
    tex_ctx.scale(0.7,0.7)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(0,0,0,0.3)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle=_COLORS.blue
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,25,0,6)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(157, 242, 100)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle='rgb(226, 255, 138)'
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*5,128)
    tex_ctx.scale(0.7,0.7)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(0,0,0,0.3)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle=_COLORS.white
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,25,0,6)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(157, 242, 100)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle='rgb(226, 255, 138)'
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*7-51,108)
    tex_ctx.rotate(1)
    tex_ctx.scale(0.6,0.6)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(0,0,0,0.3)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle=_COLORS.red
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,25,0,6)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(157, 242, 100)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle='rgb(226, 255, 138)'
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    tex_ctx.translate(128*7+40,147)
    tex_ctx.rotate(-0.6)
    tex_ctx.scale(0.6,0.6)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(0,0,0,0.3)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle=_COLORS.red
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,25,0,6)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(157, 242, 100)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle='rgb(226, 255, 138)'
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128-51,87+256)
    tex_ctx.rotate(1)
    tex_ctx.scale(0.6,0.6)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(0,0,0,0.3)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle=_COLORS.blue
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,25,0,6)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(157, 242, 100)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle='rgb(226, 255, 138)'
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    tex_ctx.translate(40+128,128*2+129)
    tex_ctx.rotate(-0.6)
    tex_ctx.scale(0.6,0.6)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(0,0,0,0.3)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle=_COLORS.blue
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,25,0,6)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(157, 242, 100)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle='rgb(226, 255, 138)'
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*3-51,87+256)
    tex_ctx.rotate(1)
    tex_ctx.scale(0.6,0.6)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(0,0,0,0.3)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle=_COLORS.white
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,25,0,6)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(157, 242, 100)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle='rgb(226, 255, 138)'
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    tex_ctx.translate(40+128*3,128*2+129)
    tex_ctx.rotate(-0.6)
    tex_ctx.scale(0.6,0.6)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(0,0,0,0.3)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle=_COLORS.white
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,25,0,6)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(157, 242, 100)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle='rgb(226, 255, 138)'
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*5-55,87+263)
    tex_ctx.scale(0.65,0.65)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(0,0,0,0.3)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle=_COLORS.red
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,25,0,6)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(157, 242, 100)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle='rgb(226, 255, 138)'
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    tex_ctx.translate(-6+128*5,128*2+179)
    tex_ctx.rotate(-1.5)
    tex_ctx.scale(0.65,0.65)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(0,0,0,0.3)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle=_COLORS.red
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,25,0,6)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(157, 242, 100)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle='rgb(226, 255, 138)'
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    tex_ctx.translate(58+128*5,128*2+101)
    tex_ctx.rotate(-1.5)
    tex_ctx.scale(0.65,0.65)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(0,0,0,0.3)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle=_COLORS.red
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,25,0,6)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(157, 242, 100)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle='rgb(226, 255, 138)'
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*7-45,87+261)
    tex_ctx.scale(0.65,0.65)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(0,0,0,0.3)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle=_COLORS.blue
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,25,0,6)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(157, 242, 100)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle='rgb(226, 255, 138)'
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    tex_ctx.translate(12+128*7,128*2+177)
    tex_ctx.rotate(-1.5)
    tex_ctx.scale(0.65,0.65)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(0,0,0,0.3)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle=_COLORS.blue
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,25,0,6)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(157, 242, 100)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle='rgb(226, 255, 138)'
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    tex_ctx.translate(66+128*7,128*2+91)
    tex_ctx.rotate(0.1)
    tex_ctx.scale(0.65,0.65)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(0,0,0,0.3)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle=_COLORS.blue
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,25,0,6)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(157, 242, 100)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle='rgb(226, 255, 138)'
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128-63,128*3+235)
    tex_ctx.scale(0.65,0.65)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(0,0,0,0.3)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle=_COLORS.white
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,25,0,6)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(157, 242, 100)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle='rgb(226, 255, 138)'
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    tex_ctx.translate(2+121,128*4+189)
    tex_ctx.rotate(-1.6)
    tex_ctx.scale(0.65,0.65)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(0,0,0,0.3)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle=_COLORS.white
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,25,0,6)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(157, 242, 100)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle='rgb(226, 255, 138)'
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    tex_ctx.translate(17+166,128*4+111)
    tex_ctx.rotate(-1.5)
    tex_ctx.scale(0.65,0.65)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.rotate(Math.PI*0.5)
    tex_ctx.moveTo(-20,-20)
    tex_ctx.bezierCurveTo(-80,-100,80,-100,20,-20)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(0,0,0,0.3)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle=_COLORS.white
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,25,0,6)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(157, 242, 100)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle='rgb(226, 255, 138)'
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128+256,128+256*2)
    tex_ctx.scale(0.92,0.92)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-10)
    tex_ctx.bezierCurveTo(-95,-110,95,-110,20,-10)
    tex_ctx.rotate(Math.PI*2/5)
    tex_ctx.moveTo(-20,-10)
    tex_ctx.bezierCurveTo(-95,-110,95,-110,20,-10)
    tex_ctx.rotate(Math.PI*2/5)
    tex_ctx.moveTo(-20,-10)
    tex_ctx.bezierCurveTo(-95,-110,95,-110,20,-10)
    tex_ctx.rotate(Math.PI*2/5)
    tex_ctx.moveTo(-20,-10)
    tex_ctx.bezierCurveTo(-95,-110,95,-110,20,-10)
    tex_ctx.rotate(Math.PI*2/5)
    tex_ctx.moveTo(-20,-10)
    tex_ctx.bezierCurveTo(-95,-110,95,-110,20,-10)
    tex_ctx.rotate(Math.PI*2/5)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(0,0,0,0.3)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle=_COLORS.red
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.scale(0.9,0.9)
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,25,0,6)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(157, 242, 100)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle='rgb(226, 255, 138)'
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128+256*2,128+256*2)
    tex_ctx.scale(0.92,0.92)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-10)
    tex_ctx.bezierCurveTo(-95,-110,95,-110,20,-10)
    tex_ctx.rotate(Math.PI*2/5)
    tex_ctx.moveTo(-20,-10)
    tex_ctx.bezierCurveTo(-95,-110,95,-110,20,-10)
    tex_ctx.rotate(Math.PI*2/5)
    tex_ctx.moveTo(-20,-10)
    tex_ctx.bezierCurveTo(-95,-110,95,-110,20,-10)
    tex_ctx.rotate(Math.PI*2/5)
    tex_ctx.moveTo(-20,-10)
    tex_ctx.bezierCurveTo(-95,-110,95,-110,20,-10)
    tex_ctx.rotate(Math.PI*2/5)
    tex_ctx.moveTo(-20,-10)
    tex_ctx.bezierCurveTo(-95,-110,95,-110,20,-10)
    tex_ctx.rotate(Math.PI*2/5)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(0,0,0,0.3)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle=_COLORS.blue
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.scale(0.9,0.9)
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,25,0,6)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(157, 242, 100)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle='rgb(226, 255, 138)'
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128+256*3,128+256*2)
    tex_ctx.scale(0.92,0.92)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-10)
    tex_ctx.bezierCurveTo(-95,-110,95,-110,20,-10)
    tex_ctx.rotate(Math.PI*2/5)
    tex_ctx.moveTo(-20,-10)
    tex_ctx.bezierCurveTo(-95,-110,95,-110,20,-10)
    tex_ctx.rotate(Math.PI*2/5)
    tex_ctx.moveTo(-20,-10)
    tex_ctx.bezierCurveTo(-95,-110,95,-110,20,-10)
    tex_ctx.rotate(Math.PI*2/5)
    tex_ctx.moveTo(-20,-10)
    tex_ctx.bezierCurveTo(-95,-110,95,-110,20,-10)
    tex_ctx.rotate(Math.PI*2/5)
    tex_ctx.moveTo(-20,-10)
    tex_ctx.bezierCurveTo(-95,-110,95,-110,20,-10)
    tex_ctx.rotate(Math.PI*2/5)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(0,0,0,0.3)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle=_COLORS.white
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.scale(0.9,0.9)
    tex_ctx.beginPath()
    tex_ctx.arc(0,0,25,0,6)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(157, 242, 100)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle='rgb(226, 255, 138)'
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128,128+256*3)
    tex_ctx.scale(0.92,0.92)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-10)
    tex_ctx.bezierCurveTo(-95,-110,95,-110,20,-10)
    tex_ctx.rotate(Math.PI*2/5)
    tex_ctx.moveTo(-20,-10)
    tex_ctx.bezierCurveTo(-95,-110,95,-110,20,-10)
    tex_ctx.rotate(Math.PI*2/5)
    tex_ctx.moveTo(-20,-10)
    tex_ctx.bezierCurveTo(-95,-110,95,-110,20,-10)
    tex_ctx.rotate(Math.PI*2/5)
    tex_ctx.moveTo(-20,-10)
    tex_ctx.bezierCurveTo(-95,-110,95,-110,20,-10)
    tex_ctx.rotate(Math.PI*2/5)
    tex_ctx.moveTo(-20,-10)
    tex_ctx.bezierCurveTo(-95,-110,95,-110,20,-10)
    tex_ctx.rotate(Math.PI*2/5)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(0,0,0,0.3)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle=_COLORS.red
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.beginPath()
    
    for(let i=0,j=0;i<Math.PI*2;i+=Math.PI*2/10,j++){
        
        let r=j%2===0?20:50
        
        if(j===0){
            
            tex_ctx.moveTo(Math.sin(i)*r,Math.cos(i)*r)
            
        } else {
            
            tex_ctx.lineTo(Math.sin(i)*r,Math.cos(i)*r)
        }
    }
    
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(157, 242, 100)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle='rgb(255, 255,58)'
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128+256*1,128+256*3)
    tex_ctx.scale(0.92,0.92)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-10)
    tex_ctx.bezierCurveTo(-95,-110,95,-110,20,-10)
    tex_ctx.rotate(Math.PI*2/5)
    tex_ctx.moveTo(-20,-10)
    tex_ctx.bezierCurveTo(-95,-110,95,-110,20,-10)
    tex_ctx.rotate(Math.PI*2/5)
    tex_ctx.moveTo(-20,-10)
    tex_ctx.bezierCurveTo(-95,-110,95,-110,20,-10)
    tex_ctx.rotate(Math.PI*2/5)
    tex_ctx.moveTo(-20,-10)
    tex_ctx.bezierCurveTo(-95,-110,95,-110,20,-10)
    tex_ctx.rotate(Math.PI*2/5)
    tex_ctx.moveTo(-20,-10)
    tex_ctx.bezierCurveTo(-95,-110,95,-110,20,-10)
    tex_ctx.rotate(Math.PI*2/5)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(0,0,0,0.3)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle=_COLORS.blue
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.beginPath()
    
    for(let i=0,j=0;i<Math.PI*2;i+=Math.PI*2/10,j++){
        
        let r=j%2===0?20:50
        
        if(j===0){
            
            tex_ctx.moveTo(Math.sin(i)*r,Math.cos(i)*r)
            
        } else {
            
            tex_ctx.lineTo(Math.sin(i)*r,Math.cos(i)*r)
        }
    }
    
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(157, 242, 100)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle='rgb(255, 255,58)'
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128+256*2,128+256*3)
    tex_ctx.scale(0.92,0.92)
    tex_ctx.beginPath()
    tex_ctx.moveTo(-20,-10)
    tex_ctx.bezierCurveTo(-95,-110,95,-110,20,-10)
    tex_ctx.rotate(Math.PI*2/5)
    tex_ctx.moveTo(-20,-10)
    tex_ctx.bezierCurveTo(-95,-110,95,-110,20,-10)
    tex_ctx.rotate(Math.PI*2/5)
    tex_ctx.moveTo(-20,-10)
    tex_ctx.bezierCurveTo(-95,-110,95,-110,20,-10)
    tex_ctx.rotate(Math.PI*2/5)
    tex_ctx.moveTo(-20,-10)
    tex_ctx.bezierCurveTo(-95,-110,95,-110,20,-10)
    tex_ctx.rotate(Math.PI*2/5)
    tex_ctx.moveTo(-20,-10)
    tex_ctx.bezierCurveTo(-95,-110,95,-110,20,-10)
    tex_ctx.rotate(Math.PI*2/5)
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(0,0,0,0.3)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle=_COLORS.white
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.beginPath()
    
    for(let i=0,j=0;i<Math.PI*2;i+=Math.PI*2/10,j++){
        
        let r=j%2===0?20:50
        
        if(j===0){
            
            tex_ctx.moveTo(Math.sin(i)*r,Math.cos(i)*r)
            
        } else {
            
            tex_ctx.lineTo(Math.sin(i)*r,Math.cos(i)*r)
        }
    }
    
    tex_ctx.closePath()
    tex_ctx.strokeStyle='rgb(157, 242, 100)'
    tex_ctx.lineWidth=5
    tex_ctx.fillStyle='rgb(255, 255,58)'
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
}

window.textures_decals=function(tex_ctx){

    function e(x,y,w,h,r=0){
        tex_ctx.beginPath()
        tex_ctx.ellipse(x,y,w,h,r,0,7)
        tex_ctx.fill()
    }
    
    function r(x,y,w,h){
        tex_ctx.fillRect(x,y,w,h)
        tex_ctx.strokeRect(x,y,w,h)
    }
    
    tex_ctx.clearRect(0,0,1024,1024)
    
    tex_ctx.lineCap='butt'
    tex_ctx.lineJoin='butt'
    tex_ctx.translate(128*0+128*0.5,128*0+128*0.5)
    tex_ctx.lineWidth=7
    tex_ctx.fillStyle='rgb(255,80,40)'
    e(0,0,20,20)
    tex_ctx.fillStyle='rgb(255,255,255)'
    tex_ctx.strokeStyle='rgb(255,255,255)'
    e(0,0,4,4)
    let s=0.1
    tex_ctx.beginPath()
    tex_ctx.ellipse(0,0,13,13,0,-s,s+Math.PI*2/6)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.rotate(Math.PI*2*2/6)
    tex_ctx.ellipse(0,0,13,13,0,-s,s+Math.PI*2/6)
    tex_ctx.stroke()
    tex_ctx.beginPath()
    tex_ctx.rotate(Math.PI*2*2/6)
    tex_ctx.ellipse(0,0,13,13,0,-s,s+Math.PI*2/6)
    tex_ctx.stroke()
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*1,128*0)
    tex_ctx.fillStyle='rgb(255,255,255)'
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*2+128*0.5,128*0+128*0.5)
    tex_ctx.font='44px arial'
    tex_ctx.fillText('🌺',-33,15)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*3,128*0)
    let g=tex_ctx.createRadialGradient(128*0.5,128*0.5,0,128*0.5,128*0.5,128*0.5)
    tex_ctx.globalAlpha=0.5
    g.addColorStop(0,'rgb(255,255,255)')
    g.addColorStop(1,'rgb(255,255,255,0)')
    tex_ctx.fillStyle=g
    tex_ctx.fillRect(0,0,128,128)
    tex_ctx.globalAlpha=1
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.fillStyle='rgb(100,200,255)'
    tex_ctx.lineWidth=2.5
    tex_ctx.translate(128*4+128*0.5,128*0.5)
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.fillStyle='rgb(88, 227, 88)'
    tex_ctx.lineWidth=1.5
    a=new Path2D('M-14 7L10 6C15 6 15 -5 10 -5L 8 -3C12 -3 12 3 8 3z')
    let _s=tex_ctx.createLinearGradient(-9,-4,17,7)
    _s.addColorStop(0,'rgb(255,0,0)')
    _s.addColorStop(0.15,'rgb(255,0,0)')
    _s.addColorStop(0.15,'rgb(255,255,255)')
    _s.addColorStop(0.3,'rgb(255,255,255)')
    _s.addColorStop(0.3,'rgb(255,0,0)')
    _s.addColorStop(0.45,'rgb(255,0,0)')
    _s.addColorStop(0.45,'rgb(255,255,255)')
    _s.addColorStop(0.6,'rgb(255,255,255)')
    _s.addColorStop(0.6,'rgb(255,0,0)')
    _s.addColorStop(0.75,'rgb(255,0,0)')
    _s.addColorStop(0.75,'rgb(255,255,255)')
    _s.addColorStop(0.9,'rgb(255,255,255)')
    _s.addColorStop(0.9,'rgb(255,0,0)')
    tex_ctx.fillStyle=_s
    tex_ctx.strokeStyle='rgb(0,0,0)'
    tex_ctx.translate(-5,-9)
    tex_ctx.scale(3,3)
    tex_ctx.rotate(-0.2)
    tex_ctx.stroke(a)
    tex_ctx.fill(a)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*5+128*0.5,128*0.5)
    tex_ctx.strokeStyle='rgb(0,180,0)'
    tex_ctx.lineWidth=5
    tex_ctx.strokeRect(-18,-18,40,30)
    tex_ctx.fillStyle='rgb(19, 93, 212)'
    tex_ctx.strokeStyle='black'
    tex_ctx.lineWidth=2.5
    r(-29,-6,60,35)
    tex_ctx.fillStyle='rgb(251, 255, 0)'
    e(-11,8,8,8)
    tex_ctx.stroke()
    e(13,8,8,8)
    tex_ctx.stroke()
    tex_ctx.fillStyle='black'
    e(13,8,2,2)
    e(-11,8,2,2)
    tex_ctx.fillStyle='rgb(255,0,255)'
    tex_ctx.fillRect(-9,19,7,4)
    tex_ctx.fillStyle='rgb(255,0,0)'
    tex_ctx.fillRect(3,19,7,4)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*6+128*0.5,128*0.5-7)
    tex_ctx.rotate(0.3)
    tex_ctx.fillStyle='rgb(86, 252, 136)'
    tex_ctx.strokeStyle='black'
    tex_ctx.lineWidth=2
    r(-5,-21,10,55)
    tex_ctx.fillStyle='rgb(250, 110, 147)'
    r(-5,-33,10,10)
    tex_ctx.fillStyle='rgb(170,170,170)'
    r(-5,-25,10,5)
    tex_ctx.fillStyle='rgb(214, 193, 101)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-5,35)
    tex_ctx.lineTo(5,35)
    tex_ctx.lineTo(0,48)
    tex_ctx.closePath()
    tex_ctx.fill()
    tex_ctx.stroke()
    tex_ctx.fillStyle='rgb(0,0,0)'
    e(0,44,2,2)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*7+128*0.5+-5,128*0.5+28)
    tex_ctx.fillStyle='rgb(255, 204, 0)'
    tex_ctx.strokeStyle='black'
    tex_ctx.lineWidth=3
    tex_ctx.font='95px arial'
    tex_ctx.fillText('!',0,0)
    tex_ctx.strokeText('!',0,0)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*0+128*0.5,128*1+128*0.5)
    g=tex_ctx.createRadialGradient(0,0,5,0,0,45)
    g.addColorStop(0.1,'rgb(255,255,255,0.15)')
    g.addColorStop(1,'rgb(255,255,255,0)')
    tex_ctx.fillStyle=g
    e(0,0,7,7)
    e(33,14,4,4)
    e(-17,24,2,2)
    e(7,-26,3,3)
    for(let i=0;i<6.2831853;i+=6.2831853/7){
        
        tex_ctx.rotate(i)
        e(35,0,16+Math.sin(i*3.6)*15,Math.cos(i*8.5)+2)
        tex_ctx.rotate(-i)
    }
    
    tex_ctx.strokeStyle='black'
    tex_ctx.lineWidth=3
    tex_ctx.setTransform(1,0,0,1,0,0)
    
}

window.textures_bear=function(tex_ctx){

    function e(x,y,w,h,r=0){
        tex_ctx.beginPath()
        tex_ctx.ellipse(x,y,w,h,r,0,7)
        tex_ctx.fill()
    }
    
    function r(x,y,w,h){
        tex_ctx.fillRect(x,y,w,h)
        tex_ctx.strokeRect(x,y,w,h)
    }
    
    tex_ctx.clearRect(0,0,1024,1024)
    
    tex_ctx.lineCap='butt'
    tex_ctx.lineJoin='butt'
    
    tex_ctx.translate(128*0+128*0.5,256*0+128*0.5)
    tex_ctx.lineWidth=7
    tex_ctx.fillStyle='rgb(33, 35, 37)'
    tex_ctx.fillRect(-128*0.5,-128*0.5,128,128)
    tex_ctx.fillStyle='rgb(123, 105, 65)'
    e(-13,-23,6,6)
    e(13,-23,6,6)
    tex_ctx.fillStyle='rgb(45, 50, 53)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-64,64)
    tex_ctx.lineTo(-64,20)
    tex_ctx.bezierCurveTo(-66,-49,-18,-56,-10,-1)
    tex_ctx.lineTo(-10,64)
    tex_ctx.moveTo(64,64)
    tex_ctx.lineTo(64,20)
    tex_ctx.bezierCurveTo(66,-49,18,-56,10,-1)
    tex_ctx.lineTo(10,64)
    tex_ctx.fill()
    let g=tex_ctx.createLinearGradient(0,0,0,64)
    g.addColorStop(0,'rgb(33, 35, 37)')
    g.addColorStop(0.6,'rgb(123, 105, 65)')
    tex_ctx.fillStyle=g
    tex_ctx.beginPath()
    tex_ctx.moveTo(-12,-25)
    tex_ctx.bezierCurveTo(-11,49,-30,40,-12,64)
    tex_ctx.moveTo(12,-25)
    tex_ctx.bezierCurveTo(11,49,30,40,12,64)
    tex_ctx.fill()
    tex_ctx.fillRect(-12,-11,24,75)
    tex_ctx.fillStyle='rgb(45, 50, 53)'
    e(0,49,10,8)
    tex_ctx.fillStyle='rgb(33, 35, 37)'
    e(0,52,5,3)
    tex_ctx.fillStyle='rgb(20,20,20)'
    e(-19,-13,5,9)
    e(19,-13,5,9)
    tex_ctx.fillStyle='rgb(45, 50, 53)'
    e(16,-16,2,3)
    e(-22,-16,2,3)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*1+128*0.5,256*0+128*0.5)
    tex_ctx.lineWidth=7
    tex_ctx.fillStyle='rgb(240,240,240)'
    tex_ctx.fillRect(-128*0.5,-128*0.5,128,128)
    tex_ctx.fillStyle='rgb(200,200,200)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-64,64)
    tex_ctx.lineTo(-64,20)
    tex_ctx.bezierCurveTo(-66,-49,-18,-56,-10,-1)
    tex_ctx.lineTo(-10,64)
    tex_ctx.moveTo(64,64)
    tex_ctx.lineTo(64,20)
    tex_ctx.bezierCurveTo(66,-49,18,-56,10,-1)
    tex_ctx.lineTo(10,64)
    tex_ctx.fill()
    g=tex_ctx.createLinearGradient(0,0,0,64)
    g.addColorStop(0,'rgb(240,240,240)')
    g.addColorStop(0.6,'rgb(170,170,170)')
    tex_ctx.fillStyle=g
    tex_ctx.beginPath()
    tex_ctx.moveTo(-12,-25)
    tex_ctx.bezierCurveTo(-11,49,-30,40,-12,64)
    tex_ctx.moveTo(12,-25)
    tex_ctx.bezierCurveTo(11,49,30,40,12,64)
    tex_ctx.fill()
    tex_ctx.fillRect(-12,-11,24,75)
    tex_ctx.fillStyle='rgb(45, 50, 53)'
    e(0,49,10,8)
    tex_ctx.fillStyle='rgb(33, 35, 37)'
    e(0,52,5,3)
    tex_ctx.fillStyle='rgb(20,20,20)'
    e(-19,-13,5,9)
    e(19,-13,5,9)
    tex_ctx.fillStyle='rgb(200,200,200)'
    e(16,-16,2,3)
    e(-22,-16,2,3)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
    tex_ctx.translate(128*2+128*0.5,256*0+128*0.5)
    tex_ctx.lineWidth=7
    tex_ctx.fillStyle='rgb(99, 73, 41)'
    tex_ctx.fillRect(-128*0.5,-128*0.5,128,128)
    tex_ctx.fillStyle='rgb(85, 64, 38)'
    tex_ctx.beginPath()
    tex_ctx.moveTo(-64,64)
    tex_ctx.lineTo(-64,20)
    tex_ctx.bezierCurveTo(-66,-49,-18,-56,-10,-1)
    tex_ctx.lineTo(-10,64)
    tex_ctx.moveTo(64,64)
    tex_ctx.lineTo(64,20)
    tex_ctx.bezierCurveTo(66,-49,18,-56,10,-1)
    tex_ctx.lineTo(10,64)
    tex_ctx.fill()
    g=tex_ctx.createLinearGradient(0,0,0,64)
    g.addColorStop(0.1,'rgb(99, 73, 41)')
    g.addColorStop(1,'rgb(130, 114, 95)')
    tex_ctx.fillStyle=g
    tex_ctx.beginPath()
    tex_ctx.fill()
    tex_ctx.fillRect(-12,-11,24,75)
    tex_ctx.fillStyle='rgb(45, 50, 53)'
    e(0,49,10,8)
    tex_ctx.fillStyle='rgb(33, 35, 37)'
    e(0,52,5,3)
    tex_ctx.fillStyle='rgb(20,20,20)'
    e(-19,-13,5,9)
    e(19,-13,5,9)
    tex_ctx.fillStyle='rgb(200,200,200)'
    e(16,-16,2,3)
    e(-22,-16,2,3)
    tex_ctx.setTransform(1,0,0,1,0,0)
    
}