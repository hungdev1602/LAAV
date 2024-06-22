// ============================================= Di chuột vào social đổi màu và di ra trở lại màu cũ
document.addEventListener("DOMContentLoaded", function () {
  var button = document.querySelector(".section-2__contact");

  // Thêm sự kiện mouseover
  button.addEventListener("mouseover", function (event) {
    const listSocial = document.querySelectorAll(".fa-brands");
    for (let i = 0; i < listSocial.length; i++) {
      listSocial[i].style.color = "#000";
    }
  });

  // Thêm sự kiện mouseout
  button.addEventListener("mouseout", function (event) {
    const listSocial = document.querySelectorAll(".fa-brands");
    for (let i = 0; i < listSocial.length; i++) {
      listSocial[i].style.color = "";
    }
  });
});

// ============================================================ BÁO LỖI CÁC Ô INPUT KHI FOCUS VÀ BLUR=============================================
const inputError = () => {
  const inpSection2 = document.querySelectorAll(".form--inp");
  inpSection2.forEach((inp) => {
    inp.addEventListener("focus", () => {
      inp.style.borderColor = "#000";

      inp.addEventListener("blur", () => {
        if (inp.value !== "") {
          inp.style.borderColor = "#8e8e8e";
        } else {
          inp.style.borderColor = "#ff0000";
        }
      });
    });
  });
};

// ============================================= show popup =================================
// popup услуги
const popupButtons = () => {
  const buttons = document.querySelectorAll(".section-5__details");
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      let htmls = "";
      if (index === 0) {
        htmls = `
        <div class="section-5__popup-box">
            <img class="section-5__popup-img" src="./assets/img/img_test.jpg" alt="">
            <div class="section-5__popup-title">Полноценное создание коротких роликов</div>
            <div class="section-5__popup-desc">Мы продвигаем ваш бренд за счет создания коротких роликов в таких
                соцсетях, как Инстаграм, Ютуб, Тик-Ток и др. Такой формат является наиболее популярным и
                востребованным среди аудитории.</div>
            <div class="section-5__popup-button contact-button">Рассказать о проекте</div>
            <div class="section-5__popup-close">&times;</div>
        </div>
      `;
      }
      if (index === 1) {
        htmls = `
        <div class="section-5__popup-box">
            <img class="section-5__popup-img" src="./assets/img/img_test.jpg" alt="">
            <div class="section-5__popup-title">Креативная съемка</div>
            <div class="section-5__popup-desc">Креативная съемка повысит узнаваемость бренда и покажет его позиционирование на рынке, выделит среди конкурентов.
                Мы составим креативную концепцию и реализуем ваши задумки.</div>
            <div class="section-5__popup-button contact-button">Рассказать о проекте</div>
            <div class="section-5__popup-close">&times;</div>
        </div>
      `;
      }
      if (index === 2) {
        htmls = `
        <div class="section-5__popup-box">
            <img class="section-5__popup-img" src="./assets/img/img_test.jpg" alt="">
            <div class="section-5__popup-title">Создание рекламных роликов</div>
            <div class="section-5__popup-desc">Один из наиболее эффективных способов продвижения вашего бизнеса - это создание качественного промо-видео.<br><br>
                — мы берем на себя все этапы производства: от сбора команды и подготовки материалов до контроля за всем процессом<br><br>
                — вы получаете приток клиентов и повышение узнаваемости вашего бренда</div>
            <div class="section-5__popup-button contact-button">Рассказать о проекте</div>
            <div class="section-5__popup-close">&times;</div>
        </div>
      `;
      }
      if (index === 3) {
        htmls = `
        <div class="section-5__popup-box">
            <img class="section-5__popup-img" src="./assets/img/img_test.jpg" alt="">
            <div class="section-5__popup-title">Youtube шоу, подкасты, интервью</div>
            <div class="section-5__popup-desc">Для прокачки личного бренды и охвата широкой аудитории предлагаем полноценное курирование данной услуги: мы подготовим креативную идею, сценарий, локации, образы, а также организуем весь продакшн от начала до конца.<br><br>
                С вас — присутствие в кадре!</div>
            <div class="section-5__popup-button contact-button">Рассказать о проекте</div>
            <div class="section-5__popup-close">&times;</div>
        </div>
      `;
      }
      if (index === 4) {
        htmls = `
        <div class="section-5__popup-box">
            <img class="section-5__popup-img" src="./assets/img/img_test.jpg" alt="">
            <div class="section-5__popup-title">Обучающие видеоролики</div>
            <div class="section-5__popup-desc">Вы хотите запустить свой образовательный продукт? Поможем записать видео-лекции, мастер-классы и др. Сформируем вашу подачу, визуал и продемонстрируем вашу экспертность.</div>
            <div class="section-5__popup-button contact-button">Рассказать о проекте</div>
            <div class="section-5__popup-close">&times;</div>
        </div>
      `;
      }
      if (index === 5) {
        htmls = `
        <div class="section-5__popup-box">
            <img class="section-5__popup-img" src="./assets/img/img_test.jpg" alt="">
            <div class="section-5__popup-title">Создание сниппетов и клипов</div>
            <div class="section-5__popup-desc">Професисональная команда занимается видео предпродакшеном и продакшеном клипов и сниппетов, весь процесс на нас от “камера мотор” до “снято”.<br><br>
                Реализуем все ваши задумки!</div>
            <div class="section-5__popup-button contact-button">Рассказать о проекте</div>
            <div class="section-5__popup-close">&times;</div>
        </div>
      `;
      }
      if (index === 6) {
        htmls = `
        <div class="section-5__popup-box">
            <img class="section-5__popup-img" src="./assets/img/img_test.jpg" alt="">
            <div class="section-5__popup-title">Единичная услуга</div>
            <div class="section-5__popup-desc">Проводим съемку ваших мероприятий: мастер-классы, выступления и др.<br><br>
                Монтаж<br><br>
                Создаем полноценное видео из вашего готового материала.<br><br>
                Написание сценариев<br><br>
                — создание идеи под вашу цель от видео<br><br>
                — создание сценариев</div>
            <div class="section-5__popup-button contact-button">Рассказать о проекте</div>
            <div class="section-5__popup-close">&times;</div>
        </div>
      `;
      }
      const popup = document.querySelector(".section-5__popup");
      popup.innerHTML = htmls;
      const closePopup = document.querySelector(".section-5__popup-close");
      popup.style.display = "flex";
      setTimeout(() => {
        popup.classList.toggle("active");
      }, 10);
      const scrollButton = document.querySelector(".section-5__popup-button");
      scrollButton.addEventListener("click", () => {
        const section9 = document.querySelector(".section-9");
        popup.style.display = "none";
        popup.classList.toggle("active");
        section9.scrollIntoView({ behavior: "smooth" });
      });
      closePopup.addEventListener("click", () => {
        popup.style.display = "none";
        popup.classList.toggle("active");
      });
    });
  });
};

// popup discount and nothing to choose
const contactButton = () => {
  const buttons = document.querySelectorAll(".contact-button");
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      let htmls = "";
      if (index === 0) {
        htmls = `
          <div class="contact-popup__box">
            <div class="contact-popup__top">
                <div class="contact-popup__box-title">
                    <h4>Не нашли подходящую для вас услугу?</h4>
                    <p>Свяжитесь с нами и мы поможем выбрать подходящую</p>
                </div>
            </div>
            <div class="contact-popup__wrap">
                <div class="contact-popup__left">
                    <form class="contact-popup__form" action="">
                        <input class="contact-popup__form--child form--inp" type="text" placeholder="Имя">
                        <input class="contact-popup__form--child form--inp" type="email" placeholder="Email">
                        <input class="contact-popup__form--child form--inp" type="tel" placeholder="Телефон">
                        <select class="contact-popup__form--child" name="services" id="">
                            <option value="">Услуга</option>
                            <option value="val1">Полноценное создание коротких роликов</option>
                            <option value="val2">Создание рекламных роликов</option>
                            <option value="val3">Youtube шоу, подкасты, интервью</option>
                            <option value="val4">Креативная съемка</option>
                            <option value="val5">Обучающие видеоролики</option>
                            <option value="val6">Создание снипетов и клипов</option>
                            <option value="val7">Единичная услуга</option>
                            <option value="val8">Другое</option>
                        </select>
                    </form>
                </div>

                <div class="contact-popup__right">
                    <div class="contact-popup__content">
                        <h4>Расскажите</h4>
                        <div class="contact-popup__subtitle">
                            <div class="contact-popup__line"></div>
                            <span>о проекте</span>
                        </div>
                    </div>
                    <div class="contact-popup__subcontent">
                        <div class="contact-popup__desc">Оставьте заявку и мы свяжемся с вами, чтобы обсудить проект и
                            ответить на ваши вопросы</div>
                        <div class="contact-popup__confirm">Отправляя заявку, вы даете согласие на обработку своих
                            персональных данных в соответствии с политикой конфиденциальности.</div>
                    </div>

                    <button class="contact-popup__button">Рассказать о проекте</button>

                </div>
            </div>
            <button class="contact-popup__close">&times;</button>
        </div>
        `;
      }
      if (index === 1) {
        htmls = `
          <div class="contact-popup__box">
            <div class="contact-popup__top">
                <img src="./assets/img/discount.svg" alt="">
                <div class="contact-popup__box-title">
                    <h4>Скидка 10%</h4>
                    <p>при заключение договора в течение 2-х дней</p>
                </div>
            </div>
            <div class="contact-popup__wrap">
                <div class="contact-popup__left">
                    <form class="contact-popup__form" action="">
                        <input class="contact-popup__form--child form--inp" type="text" placeholder="Имя">
                        <input class="contact-popup__form--child form--inp" type="email" placeholder="Email">
                        <input class="contact-popup__form--child form--inp" type="tel" placeholder="Телефон">
                        <select class="contact-popup__form--child" name="services" id="">
                            <option value="">Услуга</option>
                            <option value="val1">Полноценное создание коротких роликов</option>
                            <option value="val2">Создание рекламных роликов</option>
                            <option value="val3">Youtube шоу, подкасты, интервью</option>
                            <option value="val4">Креативная съемка</option>
                            <option value="val5">Обучающие видеоролики</option>
                            <option value="val6">Создание снипетов и клипов</option>
                            <option value="val7">Единичная услуга</option>
                            <option value="val8">Другое</option>
                        </select>
                    </form>
                </div>

                <div class="contact-popup__right">
                    <div class="contact-popup__content">
                        <h4>Расскажите</h4>
                        <div class="contact-popup__subtitle">
                            <div class="contact-popup__line"></div>
                            <span>о проекте</span>
                        </div>
                    </div>
                    <div class="contact-popup__subcontent">
                        <div class="contact-popup__desc">Оставьте заявку и мы свяжемся с вами, чтобы обсудить проект и
                            ответить на ваши вопросы</div>
                        <div class="contact-popup__confirm">Отправляя заявку, вы даете согласие на обработку своих
                            персональных данных в соответствии с политикой конфиденциальности.</div>
                    </div>

                    <button class="contact-popup__button">Рассказать о проекте</button>

                </div>
            </div>
            <button class="contact-popup__close">&times;</button>
        </div>
        `;
      }
      const contactPopup = document.querySelector(".contact-popup");
      contactPopup.innerHTML = htmls;
      const contactPopupClose = document.querySelector(".contact-popup__close");
      contactPopup.style.display = "flex";
      setTimeout(() => {
        contactPopup.classList.toggle("active");
      }, 10);
      // contactPopup.addEventListener("click", () => {
      //   contactPopup.style.display = "none";
      // });
      contactPopupClose.addEventListener("click", () => {
        contactPopup.style.display = "none";
        contactPopup.classList.toggle("active");
      });
      inputError();
    });
  });
};

// ============================================= Sự kiện khi scroll đến section 9 cho chạy animation =================================
window.addEventListener("scroll", function () {
  var targetElement = document.querySelector(".section-9__wrap");
  var rect = targetElement.getBoundingClientRect();

  // Kiểm tra xem phần tử có nằm trong viewport chưa
  if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
    targetElement.style.animation = "appear 1.5s linear forwards";
  }
});

// ============================================= Sự kiện xem thêm và ẩn bớt ở mục кейсы =================================
const watchMore = () => {
  const buttonWatchMore = document.querySelector(".button-more");
  buttonWatchMore.addEventListener("click", () => {
    const items = document.querySelectorAll(".search");
    items.forEach((item) => {
      item.classList.toggle("non-active");
      setTimeout(() => {
        item.classList.toggle("active");
      }, 100);
    });
  });
};

// ============================================= Sự kiện khi ấn vào nút xem sản phẩm của Кейсы =================================

const caseButton = () => {
  const buttons = document.querySelectorAll(".button");
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      let htmls = "";
      if (index === 0) {
        htmls = `
        <div class="embed-video__label"></div>

        <div class="embed-video__box">
            <iframe src="https://player.vimeo.com/video/965536708?h=6e1d9eaaff&loop=1"
                style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
            <script src="https://player.vimeo.com/api/player.js"></script>
        </div>
        `;
      }
      if (index === 1) {
        htmls = `
        <div class="embed-video__label"></div>

        <div class="embed-video__box">
            <iframe src="https://player.vimeo.com/video/965539649?h=48b6ccca34&loop=1" 
                style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" 
                allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                <script src="https://player.vimeo.com/api/player.js"></script>
        </div>
        `;
      }
      if (index === 2) {
        htmls = `
        <div class="embed-video__label"></div>

        <div class="embed-video__box">
            <iframe src="https://player.vimeo.com/video/965543611?h=1327ef04f8&loop=1" 
            style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" 
            allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
            <script src="https://player.vimeo.com/api/player.js"></script>
        </div>
        `;
      }
      if (index === 3) {
        htmls = `
        <div class="embed-video__label"></div>

        <div class="embed-video__box">
            <iframe src="https://player.vimeo.com/video/965538273?h=023aac89fb&loop=1" 
            style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" 
            allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
            <script src="https://player.vimeo.com/api/player.js"></script>
        </div>
        `;
      }
      if (index === 4) {
        htmls = `
        <div class="embed-video__label"></div>

        <div class="embed-video__box">
            <iframe src="https://player.vimeo.com/video/965538879?h=90778083bb&loop=1" 
            style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" 
            allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
            <script src="https://player.vimeo.com/api/player.js"></script>
        </div>
        `;
      }
      if (index === 5) {
        htmls = `
        <div class="embed-video__label"></div>

        <div class="embed-video__box">
            <img src="./assets/img/collage.png" alt="collage" style="width:100%;height:100%;object-fit:contain;">
        </div>
        `;
      }
      const embedVideo = document.querySelector(".embed-video");
      embedVideo.innerHTML = htmls;
      embedVideo.style.display = "block";
      setTimeout(() => {
        embedVideo.classList.toggle("active");
      }, 100);
      const embedLabel = document.querySelector(".embed-video__label");
      embedLabel.addEventListener("click", () => {
        embedVideo.classList.remove("active");
        embedVideo.style.display = "none";
        embedVideo.innerHTML = "";
      });
    });
  });
};

// GỌi các hàm mặc định =============================================

popupButtons();
contactButton();
inputError();
watchMore();
caseButton();
