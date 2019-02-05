<footer id="footer" class="footer d-flex">
    <div class="footer-image">
        <img src="img/footer.png" alt="footer">
    </div>
    <div class="footer-info">
        <div class="footer-info_logo">
            <img src="img/Logo.png" alt="logo">
        </div>
        <div class="footer-info_item">
            <h5>СТОИТ ЗНАТЬ</h5>
            <ul>
                <li>Познакомьтесь ближе с нашими софами</li>
                <li>Натуральная кожа и ткань</li>
                <li>Эксплуатация и уход</li>
                <li>Kонфигурация мебели</li>
                <li>Лаборатория G-LAB</li>
            </ul>
        </div>
    </div>
    <form action=contact.php" method="post" name="footer-form" id="footer-form">
        <div>У Вас остались вопросы? <br>
            Смело обращайтесь к нам</div>
        <input type="text" placeholder="Ваше имя" id="footer-name" name="footer-name"> <br>
        <div id="messageFooterName" style="text-align: center"><?=$error_footerName?></div>
        <input type="email" placeholder="Ваше email" id="footer-email" name="footer-email"> <br>
        <div id="messageFooterEmail" style="text-align: center"><?=$error_footerEmail?></div>
        <textarea name="question" id="question" rows="3" placeholder="Ваш вопрос"></textarea>
        <div id="messageQuestion" style="text-align: center"><?=$error_question?></div>
        <input class="footer-form-btn" type="submit" value="отправить вопрос" id="footer-send" name="footer-send">
    </form>
</footer>