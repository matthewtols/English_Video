let cnv = document.getElementById("myCanvas")
let ctx = cnv.getContext("2d")
cnv.width = 800
cnv.height = 600
function path() {

    ctx.fillStyle = "rgb(100, 100, 255)"
    ctx.fillRect(0, 0, 800, 600)

    ctx.fillStyle = "darkgreen"
    ctx.beginPath()
    ctx.moveTo(750, 100)
    ctx.quadraticCurveTo(775, 75, 800, 75)
    ctx.lineTo(800, 125)
    ctx.lineTo(800, 600)
    ctx.lineTo(0, 600)
    ctx.lineTo(0, 50)
    ctx.quadraticCurveTo(150, 25, 200, 50)
    ctx.quadraticCurveTo(400, 150, 600, 75)
    ctx.quadraticCurveTo(700, 50, 750, 100)
    ctx.fill()

    ctx.beginPath()
    ctx.shadowBlur = 30
    ctx.shadowOffsetY = -30
    ctx.shadowColor = "green"
    ctx.fillStyle = "green"
    ctx.moveTo(0, 300)
    ctx.quadraticCurveTo(400, 250, 450, 175)
    ctx.lineTo(600, 125)
    ctx.lineTo(600, 600)
    ctx.lineTo(0, 600)
    ctx.fill()
    ctx.closePath()

    ctx.fillStyle = "green"
    ctx.beginPath()
    ctx.moveTo(800 / 3, 300)
    ctx.quadraticCurveTo(400, 150, 800 / 3 * 2, 150)
    ctx.lineTo(800 / 3 * 2, 195)
    ctx.quadraticCurveTo(380, 320, 353, 400)
    ctx.fill()

    ctx.beginPath()
    ctx.moveTo(750, 150)
    ctx.quadraticCurveTo(675, 175, 600, 125)
    ctx.lineTo(600, 600)
    ctx.lineTo(750, 600)
    ctx.fill()
    ctx.closePath()

    ctx.fillStyle = "rgba(250, 225, 137, 1)"
    ctx.beginPath()
    ctx.moveTo(655, 155)
    ctx.quadraticCurveTo(700, 100, 750, 100)
    ctx.quadraticCurveTo(712, 105, 670, 160)
    ctx.fill()

    ctx.fillStyle = "rgba(250, 225, 137, 1)"
    ctx.beginPath()
    ctx.moveTo(800 / 3, 600)
    ctx.quadraticCurveTo(400, 200, 650, 150)
    ctx.quadraticCurveTo(657, 155, 690, 158)
    ctx.quadraticCurveTo(500, 200, 800 / 3 * 2, 600)
    ctx.fill()

    ctx.shadowBlur = 30
    ctx.shadowOffsetY = -30
    ctx.shadowColor = "green"
    ctx.fillStyle = "green"
    ctx.fillRect(750, 150, 50, 450)

    ctx.shadowColor = "rgba(0, 0, 0, 0)"
    ctx.strokeStyle = "black"
    ctx.beginPath()
    ctx.moveTo(750, 150)
    ctx.quadraticCurveTo(675, 175, 600, 125)
    ctx.stroke()
    ctx.closePath()

    ctx.beginPath()
    ctx.moveTo(800 / 3, 300)
    ctx.quadraticCurveTo(400, 150, 800 / 3 * 2, 150)
    ctx.stroke()
    ctx.closePath()
}

let fourhund = 400 - 100
let frameCount = 0
let leftThighX = 395 - 100
let leftThighY = 450 + 350
let leftCalfX = 375 - 100
let leftCalfY = 475 + 350
let leftHeelX = 380 - 100
let leftHeelY = 480 + 350
let leftToeX = 385 - 100
let leftToeY = 480 + 350

let rightThighX = 430 - 100
let rightThighY = 430 + 350
let rightCalfX = 430 - 100
let rightCalfY = 450 + 350
let rightHeelX = 437 - 100
let rightHeelY = 450 + 350

let leftBicepX = 440 - 100
let leftBicepY = 340 + 350
let leftForearmX = 440 - 100
let leftForearmY = 300 + 350

let moveToX = 440 - 100
let moveToY = 300 + 350
let QuadCurve1Xa = 430 - 100
let QuadCurve1Ya = 300 + 350
let QuadCurve1X = 430 - 100
let QuadCurve1Y = 295 + 350
let QuadCurve2Xa = 430 - 100
let QuadCurve2Ya = 280 + 350
let QuadCurve2X = 440 - 100
let QuadCurve2Y = 285 + 350
let QuadCurve3Xa = 455 - 100
let QuadCurve3Ya = 300 + 350
let QuadCurve3X = 455 - 100
let QuadCurve3Y = 295 + 350
let ArcX = 455 - 100
let ArcY = 300 + 350
let QuadCurve4Xa = 440 - 100
let QuadCurve4Ya = 295 + 350
let QuadCurve4X = 440 - 100
let QuadCurve4Y = 300 + 350
let EatMarkX = 437 - 100
let EatMarkY = 292 + 350


let threetwentyfiveY = 325 + 350
let fourtwentyfiveY = 425 + 350
let threesixtyY = 360 + 350
let threeeightyX = 380 - 100
let threeninetyfiveX = 395 - 100
let threeninetyY = 390 + 350
let threeseventyfiveY = 375 + 350
let threehundY = 300 + 350

let frameCount2 = 0

let multiplier = 0

let blackout = 0
let whiteout = 0
let whiteout2 = 0
let whiteout3 = 0
let whiteout4 = 0
let whiteout5 = 0
let whiteout6 = 0
let whiteout7 = 0
let whiteout8 = 0
let whiteout9 = 0
let whiteout10 = 0
let whiteout11 = 0
let whiteout12 = 0

document.getElementById("play").addEventListener("click", loop)

function loop() {
    document.getElementById("play").classList.add("hide")
    frameCount2++

    if (frameCount2 < 395 || frameCount2 > 525 && frameCount2 < 660) {
        fourhund += 1
        frameCount++
        leftThighX += 1
        leftThighY -= 1.25
        leftCalfX += 1
        leftCalfY -= 1.25
        leftHeelX += 1
        leftHeelY -= 1.25
        leftToeX += 1
        leftToeY -= 1.25

        rightThighX += 1
        rightThighY -= 1.25
        rightCalfX += 1
        rightCalfY -= 1.25
        rightHeelX += 1
        rightHeelY -= 1.25

        leftBicepX += 1
        leftBicepY -= 1.25
        leftForearmX += 1
        leftForearmY -= 1.25

        moveToX += 1
        moveToY -= 1.25
        QuadCurve1Xa += 1
        QuadCurve1Ya -= 1.25
        QuadCurve1X += 1
        QuadCurve1Y -= 1.25
        QuadCurve2Xa += 1
        QuadCurve2Ya -= 1.25
        QuadCurve2X += 1
        QuadCurve2Y -= 1.25
        QuadCurve3Xa += 1
        QuadCurve3Ya -= 1.25
        QuadCurve3X += 1
        QuadCurve3Y -= 1.25
        ArcX += 1
        ArcY -= 1.25
        QuadCurve4Xa += 1
        QuadCurve4Ya -= 1.25
        QuadCurve4X += 1
        QuadCurve4Y -= 1.25
        EatMarkX += 1
        EatMarkY -= 1.25


        threetwentyfiveY -= 1.25
        fourtwentyfiveY -= 1.25
        threesixtyY -= 1.25
        threeeightyX += 1
        threeninetyfiveX += 1
        threeninetyY -= 1.25
        threeseventyfiveY -= 1.25
        threehundY -= 1.25
        if (frameCount < 20) {
            leftThighX += 0.5
            leftCalfY -= 2
            leftHeelY -= 1.75
            leftHeelX -= 0.5
            leftToeX -= 0.9
            leftToeY -= 1.5

            rightThighX -= 1
            rightThighY += 1
            rightCalfY += 0.75
            rightCalfX -= 2
            rightHeelY += 0.75
            rightHeelX -= 1.75
            path()
            flint()
        } else if (frameCount < 25) {
            leftThighX += 1
            leftCalfX += 1
            leftHeelX += 1
            leftToeX += 1

            rightThighX -= 1.9
            rightThighY -= 0.25
            rightCalfY -= 0.5
            rightCalfX -= 3.5
            rightHeelY += 0
            rightHeelX -= 4
            path()
            flint()
        } else if (frameCount < 45) {
            leftThighX += 1
            leftThighY -= 1
            leftCalfY += 1
            leftCalfX += 1.5
            leftHeelY += 0.75
            leftHeelX += 2
            leftToeX += 2.25
            leftToeY += 0.5

            rightThighX += 0.5
            rightCalfY -= 2
            rightHeelY -= 1.75
            rightHeelX -= 0.5
            path()
            flint()
        } else if (frameCount < 65) {
            leftThighY += 0.5
            leftCalfY += 0.5
            leftCalfX += 2
            leftHeelY += 0.25
            leftHeelX += 2
            leftToeX += 2
            leftToeY += 0.25

            rightThighX += 1
            rightCalfX += 1
            rightHeelX += 1
            path()
            flint()
        } else if (frameCount < 85) {
            leftThighX -= 1
            leftThighY += 1
            leftCalfY += 0.75
            leftCalfX -= 2
            leftHeelY += 0.75
            leftHeelX -= 1.75
            leftToeX -= 1.75
            leftToeY += 0.75

            rightThighX += 0
            rightThighY -= 1
            rightCalfY += 1.2
            rightCalfX += 0.75
            rightHeelY += 1
            rightHeelX += 1
            path()
            flint()
        } else if (frameCount < 95) {
            leftThighX -= 1.9
            leftThighY -= 0.25
            leftCalfY -= 0.5
            leftCalfX -= 3.5
            leftHeelY += 0
            leftHeelX -= 4
            leftToeX -= 4
            leftToeY += 0

            rightThighY += 0.5
            rightCalfY += 0.5
            rightCalfX += 2
            rightHeelY += 0.25
            rightHeelX += 2
            path()
            flint()
        } else {
            multiplier++
            frameCount = 0
            leftThighX = (395 - 100) + (95 * (multiplier))
            leftThighY = (450 + 350) - (95 * (multiplier * 1.25))
            leftCalfX = (375 - 100) + (95 * (multiplier))
            leftCalfY = (475 + 350) - (95 * (multiplier * 1.25))
            leftHeelX = (380 - 100) + (95 * (multiplier))
            leftHeelY = (480 + 350) - (95 * (multiplier * 1.25))
            leftToeX = (385 - 100) + (95 * (multiplier))
            leftToeY = (480 + 350) - (95 * (multiplier * 1.25))

            rightThighX = (430 - 100) + (95 * (multiplier))
            rightThighY = (430 + 350) - (95 * (multiplier * 1.25))
            rightCalfX = (430 - 100) + (95 * (multiplier))
            rightCalfY = (450 + 350) - (95 * (multiplier * 1.25))
            rightHeelX = (437 - 100) + (95 * (multiplier))
            rightHeelY = (450 + 350) - (95 * (multiplier * 1.25))
            flint()
        }
    } else if (frameCount2 < 430 && frameCount2 > 395) {
        rightThighX -= 0.45
        rightThighY += 0.45
        rightCalfX -= 0.1
        rightCalfY += 0.25
        rightHeelY += 0.25
        leftCalfX += 0.5
        leftCalfY += 0.5
        leftHeelX += 0.5
        leftHeelY += 0.5
        leftToeX += 0.75
        leftToeY += 0.5
        path()
        flint()
    } else if (frameCount2 < 465) {
        leftForearmX -= 0.75
        leftForearmY += 0.25
        leftBicepY += 0.25
        moveToX -= 0.75
        moveToY += 0.25
        QuadCurve1Xa -= 0.75
        QuadCurve1Ya += 0.25
        QuadCurve1X -= 0.75
        QuadCurve1Y += 0.25
        QuadCurve2Xa -= 0.75
        QuadCurve2Ya += 0.25
        QuadCurve2X -= 0.75
        QuadCurve2Y += 0.25
        QuadCurve3Xa -= 0.75
        QuadCurve3Ya += 0.25
        QuadCurve3X -= 0.75
        QuadCurve3Y += 0.25
        ArcX -= 0.75
        ArcY += 0.25
        QuadCurve4Xa -= 0.75
        QuadCurve4Ya += 0.25
        QuadCurve4X -= 0.75
        QuadCurve4Y += 0.25
        EatMarkX -= 0.75
        EatMarkY += 0.25
        path()
        flint()
    } else if (frameCount2 > 490 && frameCount2 < 525) {
        leftForearmX += 0.75
        leftForearmY -= 0.25
        leftBicepY -= 0.25

        moveToX += 0.75
        moveToY -= 0.25
        QuadCurve1Xa += 0.75
        QuadCurve1Ya -= 0.25
        QuadCurve1X += 0.75
        QuadCurve1Y -= 0.25
        QuadCurve2Xa += 0.75
        QuadCurve2Ya -= 0.25
        QuadCurve2X += 0.75
        QuadCurve2Y -= 0.25
        QuadCurve3Xa += 0.75
        QuadCurve3Ya -= 0.25
        QuadCurve3X += 0.75
        QuadCurve3Y -= 0.25
        ArcX += 0.75
        ArcY -= 0.25
        QuadCurve4Xa += 0.75
        QuadCurve4Ya -= 0.25
        QuadCurve4X += 0.75
        QuadCurve4Y -= 0.25
        EatMarkX += 0.75
        EatMarkY -= 0.25
        path()
        flint()
    } else if (frameCount2 > 660 && frameCount2 < 720) {
        blackout += (1 / 6) / 30
    } else if (frameCount2 > 720 && frameCount2 < 780) {
        whiteout += (1 / 6) / 30
    } else if (frameCount2 > 870 && frameCount2 < 900) {
        whiteout -= (1 / 3) / 30
    } else if (frameCount2 > 900 && frameCount2 < 930) {
        whiteout2 += (1 / 3) / 30
    } else if (frameCount2 > 930 && frameCount2 < 960) {
        whiteout3 += (1 / 3) / 30
    } else if (frameCount2 > 960 && frameCount2 < 990) {
        whiteout3 -= (1 / 3) / 30
    } else if (frameCount2 > 990 && frameCount2 < 1020) {
        whiteout4 += (1 / 3) / 30
    } else if (frameCount2 > 1020 && frameCount2 < 1050) {
        whiteout4 -= (1 / 3) / 30
    } else if (frameCount2 > 1050 && frameCount2 < 1080) {
        whiteout5 += (1 / 3) / 30
    } else if (frameCount2 > 1080 && frameCount2 < 1110) {
        whiteout5 -= (1 / 3) / 30
    } else if (frameCount2 > 1110 && frameCount2 < 1140) {
        whiteout6 += (1 / 3) / 30
    } else if (frameCount2 > 1140 && frameCount2 < 1170) {
        whiteout6 -= (1 / 3) / 30
    } else if (frameCount2 > 1170 && frameCount2 < 1200) {
        whiteout7 += (1 / 3) / 30
    } else if (frameCount2 > 1260 && frameCount2 < 1200) {
        whiteout7 -= (1 / 3) / 30
        whiteout2 -= (1 / 3) / 30
    } else if (frameCount2 == 1200) {
        blackout = 0
        whiteout = 0
        whiteout2 = 0
        whiteout3 = 0
        whiteout4 = 0
        whiteout5 = 0
        whiteout6 = 0
        whiteout7 = 0
        path()
    } else if (frameCount2 == 1260) {
        ctx.fillStyle = "rgb(100, 100, 255)"
        ctx.fillRect(0, 0, 800, 600)

        ctx.fillStyle = "darkgreen"
        ctx.beginPath()
        ctx.moveTo(750, 150)
        ctx.quadraticCurveTo(775, 125, 800, 125)
        ctx.lineTo(800, 175)
        ctx.lineTo(800, 600)
        ctx.lineTo(0, 600)
        ctx.lineTo(0, 100)
        ctx.quadraticCurveTo(150, 75, 200, 100)
        ctx.quadraticCurveTo(400, 200, 600, 125)
        ctx.quadraticCurveTo(700, 100, 750, 150)
        ctx.fill()

        ctx.shadowBlur = 30
        ctx.shadowOffsetY = -30
        ctx.shadowColor = "green"
        ctx.fillStyle = "green"
        ctx.fillRect(750, 200, 50, 450)

        ctx.beginPath()
        ctx.shadowBlur = 30
        ctx.shadowOffsetY = -30
        ctx.shadowColor = "green"
        ctx.fillStyle = "green"
        ctx.moveTo(0, 350)
        ctx.quadraticCurveTo(400, 250, 450, 225)
        ctx.lineTo(600, 175)
        ctx.lineTo(600, 600)
        ctx.lineTo(0, 600)
        ctx.fill()
        ctx.closePath()

        ctx.fillStyle = "green"
        ctx.beginPath()
        ctx.moveTo(800 / 3, 350)
        ctx.quadraticCurveTo(400, 150, 800 / 3 * 2, 200)
        ctx.lineTo(800 / 3 * 2, 195)
        ctx.quadraticCurveTo(380, 320, 353, 450)
        ctx.fill()

        ctx.beginPath()
        ctx.moveTo(750, 200)
        ctx.quadraticCurveTo(675, 125, 600, 175)
        ctx.lineTo(600, 600)
        ctx.lineTo(750, 600)
        ctx.fill()
        ctx.closePath()

        ctx.fillStyle = "rgba(250, 225, 137, 1)"
        ctx.beginPath()
        ctx.moveTo(655, 205)
        ctx.quadraticCurveTo(700, 100, 750, 150)
        ctx.quadraticCurveTo(712, 105, 670, 210)
        ctx.fill()

        ctx.fillStyle = "rgba(250, 225, 137, 1)"
        ctx.beginPath()
        ctx.moveTo(800 / 3, 600)
        ctx.quadraticCurveTo(400, 200, 650, 200)
        ctx.quadraticCurveTo(657, 205, 690, 208)
        ctx.quadraticCurveTo(500, 200, 800 / 3 * 2, 600)
        ctx.fill()

        ctx.shadowColor = "rgba(0, 0, 0, 0)"
        ctx.strokeStyle = "black"
        ctx.beginPath()
        ctx.moveTo(750, 200)
        ctx.quadraticCurveTo(675, 225, 600, 175)
        ctx.stroke()
        ctx.closePath()

        ctx.beginPath()
        ctx.moveTo(800 / 3, 350)
        ctx.quadraticCurveTo(400, 200, 800 / 3 * 2, 200)
        ctx.stroke()
        ctx.closePath()
    } else if (frameCount2 == 1290) {
        path2()
        function path2() {
            ctx.fillStyle = "rgb(100, 100, 255)"
            ctx.fillRect(0, 0, 800, 600)

            ctx.fillStyle = "darkgreen"
            ctx.beginPath()
            ctx.moveTo(750, 200)
            ctx.quadraticCurveTo(775, 175, 800, 175)
            ctx.lineTo(800, 225)
            ctx.lineTo(800, 600)
            ctx.lineTo(0, 600)
            ctx.lineTo(0, 150)
            ctx.quadraticCurveTo(150, 125, 200, 150)
            ctx.quadraticCurveTo(400, 250, 600, 175)
            ctx.quadraticCurveTo(700, 150, 750, 200)
            ctx.fill()

            ctx.fillStyle = "green"
            ctx.beginPath()
            ctx.moveTo(0, 300)
            ctx.quadraticCurveTo(400, 175, 800, 285)
            ctx.lineTo(800, 600)
            ctx.lineTo(0, 600)
            ctx.fill()
            ctx.closePath()

            ctx.fillStyle = "rgba(250, 225, 137, 1)"
            ctx.beginPath()
            ctx.moveTo(655, 250)
            ctx.quadraticCurveTo(700, 150, 750, 200)
            ctx.quadraticCurveTo(712, 155, 670, 255)
            ctx.fill()

            ctx.fillStyle = "rgba(250, 225, 137, 1)"
            ctx.beginPath()
            ctx.moveTo(800 / 3, 600)
            ctx.quadraticCurveTo(400, 200, 650, 250)
            ctx.quadraticCurveTo(657, 255, 690, 258)
            ctx.quadraticCurveTo(500, 200, 800 / 3 * 2, 600)
            ctx.fill()

            ctx.strokeWidth = 3
            ctx.shadowColor = "rgba(0, 0, 0, 0)"
            ctx.strokeStyle = "black"
            ctx.beginPath()
            ctx.moveTo(0, 300)
            ctx.quadraticCurveTo(400, 175, 800, 285)
            ctx.stroke()
            ctx.closePath()
        }

        fourhund = 400 - 100
        frameCount = 0
        leftThighX = 395 - 100
        leftThighY = 450 + 350
        leftCalfX = 375 - 100
        leftCalfY = 475 + 350
        leftHeelX = 380 - 100
        leftHeelY = 480 + 350
        leftToeX = 385 - 100
        leftToeY = 480 + 350
        rightThighX = 430 - 100
        rightThighY = 430 + 350
        rightCalfX = 430 - 100
        rightCalfY = 450 + 350
        rightHeelX = 437 - 100
        rightHeelY = 450 + 350
        leftBicepX = 440 - 100
        leftBicepY = 340 + 350
        leftForearmX = 440 - 100
        leftForearmY = 300 + 350
        moveToX = 440 - 100
        moveToY = 300 + 350
        QuadCurve1Xa = 430 - 100
        QuadCurve1Ya = 300 + 350
        QuadCurve1X = 430 - 100
        QuadCurve1Y = 295 + 350
        QuadCurve2Xa = 430 - 100
        QuadCurve2Ya = 280 + 350
        QuadCurve2X = 440 - 100
        QuadCurve2Y = 285 + 350
        QuadCurve3Xa = 455 - 100
        QuadCurve3Ya = 300 + 350
        QuadCurve3X = 455 - 100
        QuadCurve3Y = 295 + 350
        ArcX = 455 - 100
        ArcY = 300 + 350
        QuadCurve4Xa = 440 - 100
        QuadCurve4Ya = 295 + 350
        QuadCurve4X = 440 - 100
        QuadCurve4Y = 300 + 350
        EatMarkX = 437 - 100
        EatMarkY = 292 + 350
        threetwentyfiveY = 325 + 350
        fourtwentyfiveY = 425 + 350
        threesixtyY = 360 + 350
        threeeightyX = 380 - 100
        threeninetyfiveX = 395 - 100
        threeninetyY = 390 + 350
        threeseventyfiveY = 375 + 350
        threehundY = 300 + 350
        frameCount3 = 0
        multiplier = 0

        requestAnimationFrame(round2)

        function round2() {
            frameCount3++
            if (frameCount3 < 395 || frameCount3 > 525 && frameCount3 < 660) {
                fourhund += 1
                frameCount++
                leftThighX += 1
                leftThighY -= 1.25
                leftCalfX += 1
                leftCalfY -= 1.25
                leftHeelX += 1
                leftHeelY -= 1.25
                leftToeX += 1
                leftToeY -= 1.25

                rightThighX += 1
                rightThighY -= 1.25
                rightCalfX += 1
                rightCalfY -= 1.25
                rightHeelX += 1
                rightHeelY -= 1.25

                leftBicepX += 1
                leftBicepY -= 1.25
                leftForearmX += 1
                leftForearmY -= 1.25

                moveToX += 1
                moveToY -= 1.25
                QuadCurve1Xa += 1
                QuadCurve1Ya -= 1.25
                QuadCurve1X += 1
                QuadCurve1Y -= 1.25
                QuadCurve2Xa += 1
                QuadCurve2Ya -= 1.25
                QuadCurve2X += 1
                QuadCurve2Y -= 1.25
                QuadCurve3Xa += 1
                QuadCurve3Ya -= 1.25
                QuadCurve3X += 1
                QuadCurve3Y -= 1.25
                ArcX += 1
                ArcY -= 1.25
                QuadCurve4Xa += 1
                QuadCurve4Ya -= 1.25
                QuadCurve4X += 1
                QuadCurve4Y -= 1.25
                EatMarkX += 1
                EatMarkY -= 1.25


                threetwentyfiveY -= 1.25
                fourtwentyfiveY -= 1.25
                threesixtyY -= 1.25
                threeeightyX += 1
                threeninetyfiveX += 1
                threeninetyY -= 1.25
                threeseventyfiveY -= 1.25
                threehundY -= 1.25
                if (frameCount < 20) {
                    leftThighX += 0.5
                    leftCalfY -= 2
                    leftHeelY -= 1.75
                    leftHeelX -= 0.5
                    leftToeX -= 0.9
                    leftToeY -= 1.5

                    rightThighX -= 1
                    rightThighY += 1
                    rightCalfY += 0.75
                    rightCalfX -= 2
                    rightHeelY += 0.75
                    rightHeelX -= 1.75
                    path2()
                    flint()
                } else if (frameCount < 25) {
                    leftThighX += 1
                    leftCalfX += 1
                    leftHeelX += 1
                    leftToeX += 1

                    rightThighX -= 1.9
                    rightThighY -= 0.25
                    rightCalfY -= 0.5
                    rightCalfX -= 3.5
                    rightHeelY += 0
                    rightHeelX -= 4
                    path2()
                    flint()
                } else if (frameCount < 45) {
                    leftThighX += 1
                    leftThighY -= 1
                    leftCalfY += 1
                    leftCalfX += 1.5
                    leftHeelY += 0.75
                    leftHeelX += 2
                    leftToeX += 2.25
                    leftToeY += 0.5

                    rightThighX += 0.5
                    rightCalfY -= 2
                    rightHeelY -= 1.75
                    rightHeelX -= 0.5
                    path2()
                    flint()
                } else if (frameCount < 65) {
                    leftThighY += 0.5
                    leftCalfY += 0.5
                    leftCalfX += 2
                    leftHeelY += 0.25
                    leftHeelX += 2
                    leftToeX += 2
                    leftToeY += 0.25

                    rightThighX += 1
                    rightCalfX += 1
                    rightHeelX += 1
                    path2()
                    flint()
                } else if (frameCount < 85) {
                    leftThighX -= 1
                    leftThighY += 1
                    leftCalfY += 0.75
                    leftCalfX -= 2
                    leftHeelY += 0.75
                    leftHeelX -= 1.75
                    leftToeX -= 1.75
                    leftToeY += 0.75

                    rightThighX += 0
                    rightThighY -= 1
                    rightCalfY += 1.2
                    rightCalfX += 0.75
                    rightHeelY += 1
                    rightHeelX += 1
                    path2()
                    flint()
                } else if (frameCount < 95) {
                    leftThighX -= 1.9
                    leftThighY -= 0.25
                    leftCalfY -= 0.5
                    leftCalfX -= 3.5
                    leftHeelY += 0
                    leftHeelX -= 4
                    leftToeX -= 4
                    leftToeY += 0

                    rightThighY += 0.5
                    rightCalfY += 0.5
                    rightCalfX += 2
                    rightHeelY += 0.25
                    rightHeelX += 2
                    path2()
                    flint()
                } else {
                    multiplier++
                    frameCount = 0
                    leftThighX = (395 - 100) + (95 * (multiplier))
                    leftThighY = (450 + 350) - (95 * (multiplier * 1.25))
                    leftCalfX = (375 - 100) + (95 * (multiplier))
                    leftCalfY = (475 + 350) - (95 * (multiplier * 1.25))
                    leftHeelX = (380 - 100) + (95 * (multiplier))
                    leftHeelY = (480 + 350) - (95 * (multiplier * 1.25))
                    leftToeX = (385 - 100) + (95 * (multiplier))
                    leftToeY = (480 + 350) - (95 * (multiplier * 1.25))

                    rightThighX = (430 - 100) + (95 * (multiplier))
                    rightThighY = (430 + 350) - (95 * (multiplier * 1.25))
                    rightCalfX = (430 - 100) + (95 * (multiplier))
                    rightCalfY = (450 + 350) - (95 * (multiplier * 1.25))
                    rightHeelX = (437 - 100) + (95 * (multiplier))
                    rightHeelY = (450 + 350) - (95 * (multiplier * 1.25))
                    flint()
                }
            } else if (frameCount3 < 430) {
                rightThighX -= 0.45
                rightThighY += 0.45
                rightCalfX -= 0.1
                rightCalfY += 0.25
                rightHeelY += 0.25
                leftCalfX += 0.5
                leftCalfY += 0.5
                leftHeelX += 0.5
                leftHeelY += 0.5
                leftToeX += 0.75
                leftToeY += 0.5
                path2()
                flint()
            } else if (frameCount3 < 465) {
                leftForearmX -= 0.75
                leftForearmY += 0.25
                leftBicepY += 0.25
                moveToX -= 0.75
                moveToY += 0.25
                QuadCurve1Xa -= 0.75
                QuadCurve1Ya += 0.25
                QuadCurve1X -= 0.75
                QuadCurve1Y += 0.25
                QuadCurve2Xa -= 0.75
                QuadCurve2Ya += 0.25
                QuadCurve2X -= 0.75
                QuadCurve2Y += 0.25
                QuadCurve3Xa -= 0.75
                QuadCurve3Ya += 0.25
                QuadCurve3X -= 0.75
                QuadCurve3Y += 0.25
                ArcX -= 0.75
                ArcY += 0.25
                QuadCurve4Xa -= 0.75
                QuadCurve4Ya += 0.25
                QuadCurve4X -= 0.75
                QuadCurve4Y += 0.25
                EatMarkX -= 0.75
                EatMarkY += 0.25
                path2()
                flint()
            } else if (frameCount3 > 490 && frameCount3 < 525) {
                leftForearmX += 0.75
                leftForearmY -= 0.25
                leftBicepY -= 0.25

                moveToX += 0.75
                moveToY -= 0.25
                QuadCurve1Xa += 0.75
                QuadCurve1Ya -= 0.25
                QuadCurve1X += 0.75
                QuadCurve1Y -= 0.25
                QuadCurve2Xa += 0.75
                QuadCurve2Ya -= 0.25
                QuadCurve2X += 0.75
                QuadCurve2Y -= 0.25
                QuadCurve3Xa += 0.75
                QuadCurve3Ya -= 0.25
                QuadCurve3X += 0.75
                QuadCurve3Y -= 0.25
                ArcX += 0.75
                ArcY -= 0.25
                QuadCurve4Xa += 0.75
                QuadCurve4Ya -= 0.25
                QuadCurve4X += 0.75
                QuadCurve4Y -= 0.25
                EatMarkX += 0.75
                EatMarkY -= 0.25
                path2()
                flint()
            }
            requestAnimationFrame(round2)
        }
    } else if (frameCount2 > 1950 && frameCount2 < 1980) {
        blackout += (1 / 6) / 30
    } else if (frameCount2 > 1980 && frameCount2 < 2010) {
        whiteout8 += (1 / 3) / 30
    } else if (frameCount2 > 2130 && frameCount2 < 2160) {
        whiteout8 -= (1 / 3) / 30
    } else if (frameCount2 > 2160 && frameCount2 < 2190) {
        whiteout10 += 0.3
    } else if (frameCount2 > 2220 && frameCount2 < 2250) {
        whiteout10 -= 0.3
    } else if (frameCount2 > 2250 && frameCount2 < 2280) {
        whiteout11 += 0.3
    } else if (frameCount2 > 2310 && frameCount2 < 2340) {
        whiteout11 -= 0.3
    } else if (frameCount2 > 2340) {
        whiteout12 += 0.3
    }



    ctx.strokeStyle = "black"
    ctx.strokeWidth = 3
    ctx.beginPath()
    ctx.arc(fourhund, threehundY, 25, 0, 2 * Math.PI)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(fourhund, threetwentyfiveY)
    ctx.lineTo(fourhund, fourtwentyfiveY)
    ctx.lineTo(leftThighX, leftThighY)
    ctx.lineTo(leftCalfX, leftCalfY)
    ctx.lineTo(leftHeelX, leftHeelY)
    ctx.lineTo(leftToeX, leftToeY)
    ctx.moveTo(fourhund, fourtwentyfiveY)
    ctx.lineTo(rightThighX, rightThighY)
    ctx.lineTo(rightCalfX, rightCalfY)
    ctx.lineTo(rightHeelX, rightHeelY)
    ctx.moveTo(fourhund, threesixtyY)
    ctx.lineTo(leftBicepX, leftBicepY)
    ctx.lineTo(leftForearmX, leftForearmY)
    ctx.moveTo(fourhund, threesixtyY)
    ctx.lineTo(threeeightyX, threeninetyY)
    ctx.lineTo(threeninetyfiveX, threeseventyfiveY)
    ctx.stroke()
    ctx.closePath()

    function flint() {
        ctx.fillStyle = "rgb(95, 0, 0)"
        ctx.beginPath()
        ctx.arc(fourhund, threehundY, 25, 0, 2 * Math.PI)
        ctx.fill()
    }

    ctx.beginPath()
    ctx.moveTo(moveToX, moveToY)
    ctx.quadraticCurveTo(QuadCurve1Xa, QuadCurve1Ya, QuadCurve1X, QuadCurve1Y)
    ctx.quadraticCurveTo(QuadCurve2Xa, QuadCurve2Ya, QuadCurve2X, QuadCurve2Y)
    ctx.quadraticCurveTo(QuadCurve3Xa, QuadCurve3Ya, QuadCurve3X, QuadCurve3Y)
    ctx.arc(ArcX, ArcY, 5, 1.5 * Math.PI, 2.5 * Math.PI)
    ctx.quadraticCurveTo(QuadCurve4Xa, QuadCurve4Ya, QuadCurve4X, QuadCurve4Y)
    ctx.stroke()
    ctx.closePath()

    ctx.fillStyle = "brown"
    ctx.beginPath()
    ctx.moveTo(moveToX, moveToY)
    ctx.quadraticCurveTo(QuadCurve1Xa, QuadCurve1Ya, QuadCurve1X, QuadCurve1Y)
    ctx.quadraticCurveTo(QuadCurve2Xa, QuadCurve2Ya, QuadCurve2X, QuadCurve2Y)
    ctx.quadraticCurveTo(QuadCurve3Xa, QuadCurve3Ya, QuadCurve3X, QuadCurve3Y)
    ctx.arc(ArcX, ArcY, 5, 1.5 * Math.PI, 2.5 * Math.PI)
    ctx.quadraticCurveTo(QuadCurve4Xa, QuadCurve4Ya, QuadCurve4X, QuadCurve4Y)
    ctx.fill()
    ctx.closePath()


    ctx.fillStyle = "rgb(200, 170, 170)"
    ctx.beginPath()
    ctx.arc(EatMarkX, EatMarkY, 3, 0, 2 * Math.PI)
    ctx.fill()

    if (frameCount2 > 490) {
        ctx.fillStyle = "rgb(200, 170, 170)"
        ctx.beginPath()
        ctx.arc(EatMarkX + 4, EatMarkY, 3, 0, 2 * Math.PI)
        ctx.fill()
    }

    ctx.fillStyle = "rgba(0, 0, 0, " + blackout + ")"
    ctx.fillRect(0, 0, 800, 600)

    ctx.font = "42px Comic Sans MS"
    ctx.fillStyle = "rgba(255, 255, 255, " + whiteout + ")"
    ctx.fillText("Did that look half decent?", 100, 100)

    ctx.font = "42px Comic Sans MS"
    ctx.fillStyle = "rgba(255, 255, 255, " + whiteout + ")"
    ctx.fillText("Well, something was wrong...", 100, 200)

    ctx.font = "42px Comic Sans MS"
    ctx.fillStyle = "rgba(255, 255, 255, " + whiteout + ")"
    ctx.fillText("other than his legs glitching out. :)", 100, 300)

    ctx.font = "42px Comic Sans MS"
    ctx.fillStyle = "rgba(255, 255, 255, " + whiteout2 + ")"
    ctx.fillText("You have five seconds to guess,", 100, 100)

    ctx.font = "42px Comic Sans MS"
    ctx.fillStyle = "rgba(255, 255, 255, " + whiteout2 + ")"
    ctx.fillText("reload the page to look again!", 100, 200)

    ctx.font = "84px Comic Sans MS"
    ctx.fillStyle = "rgba(255, 255, 255, " + whiteout7 + ")"
    ctx.fillText("1", 350, 400)

    ctx.font = "84px Comic Sans MS"
    ctx.fillStyle = "rgba(255, 255, 255, " + whiteout6 + ")"
    ctx.fillText("2", 350, 400)

    ctx.font = "84px Comic Sans MS"
    ctx.fillStyle = "rgba(255, 255, 255, " + whiteout5 + ")"
    ctx.fillText("3", 350, 400)

    ctx.font = "84px Comic Sans MS"
    ctx.fillStyle = "rgba(255, 255, 255, " + whiteout4 + ")"
    ctx.fillText("4", 350, 400)

    ctx.font = "84px Comic Sans MS"
    ctx.fillStyle = "rgba(255, 255, 255, " + whiteout3 + ")"
    ctx.fillText("5", 350, 400)

    ctx.font = "42px Comic Sans MS"
    ctx.fillStyle = "rgba(255, 255, 255, " + whiteout8 + ")"
    ctx.fillText("Did you catch it with the", 100, 100)

    ctx.font = "42px Comic Sans MS"
    ctx.fillStyle = "rgba(255, 255, 255, " + whiteout8 + ")"
    ctx.fillText("second angle?", 200, 175)

    ctx.font = "42px Comic Sans MS"
    ctx.fillStyle = "rgba(255, 255, 255, " + whiteout8 + ")"
    ctx.fillText('The stick man was "climbing"', 100, 250)

    ctx.font = "42px Comic Sans MS"
    ctx.fillStyle = "rgba(255, 255, 255, " + whiteout8 + ")"
    ctx.fillText('invisible stairs!', 200, 325)

    ctx.font = "42px Comic Sans MS"
    ctx.fillStyle = "rgba(255, 255, 255, " + whiteout8 + ")"
    ctx.fillText('If you missed it, reload and', 100, 400)

    ctx.font = "42px Comic Sans MS"
    ctx.fillStyle = "rgba(255, 255, 255, " + whiteout8 + ")"
    ctx.fillText('try to catch it.', 200, 475)

    ctx.font = "42px Comic Sans MS"
    ctx.fillStyle = "rgba(255, 255, 255, " + whiteout9 + ")"
    ctx.fillText('AN ANONYMOUS CORPORATION', 100, 200)

    ctx.font = "106px Comic Sans MS"
    ctx.fillStyle = "rgba(255, 255, 255, " + whiteout9 + ")"
    ctx.fillText('PRESENTS:', 200, 400)

    ctx.font = "42px Comic Sans MS"
    ctx.fillStyle = "rgba(255, 255, 255, " + whiteout10 + ")"
    ctx.fillText('Not Everything', 200, 100)

    ctx.font = "42px Comic Sans MS"
    ctx.fillStyle = "rgba(255, 255, 255, " + whiteout10 + ")"
    ctx.fillText('Is As It', 300, 300)

    ctx.font = "42px Comic Sans MS"
    ctx.fillStyle = "rgba(255, 255, 255, " + whiteout10 + ")"
    ctx.fillText('SEEMS', 400, 500)

    ctx.font = "42px Comic Sans MS"
    ctx.fillStyle = "rgba(255, 255, 255, " + whiteout11 + ")"
    ctx.fillText('Betcha I tricked You', 200, 100)
    
    ctx.font = "42px Comic Sans MS"
    ctx.fillStyle = "rgba(255, 255, 255, " + whiteout11 + ")"
    ctx.fillText('Miss Baker!!!', 200, 200)

    ctx.font = "42px Comic Sans MS"
    ctx.fillStyle = "rgba(255, 255, 255, " + whiteout12 + ")"
    ctx.fillText('Thanks For Watching', 200, 100)

    ctx.font = "42px Comic Sans MS"
    ctx.fillStyle = "rgba(255, 255, 255, " + whiteout12 + ")"
    ctx.fillText('Made and Edited by: Matthew Tolsma', 200, 400)

    requestAnimationFrame(loop)
}