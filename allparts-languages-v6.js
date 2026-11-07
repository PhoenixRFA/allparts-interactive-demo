/* ======================= THE LANGUAGE PACKS =======================

   WHAT THIS FILE IS. All eleven interface languages of
   allparts-rfq-prototype-v2.html, and nothing else. It was cut out of that
   file on 1 October 2026 and is loaded by it as a plain classic script,
   before the page's own script:

       <script src="./allparts-languages.js"></script>

   WHY IT IS A SEPARATE FILE. Eleven languages is the second largest block of
   text in the product, it is read by nobody except the code that prints it,
   and it is the block a translator touches. Taking it out means an edit to the
   interface no longer scrolls past a hundred and fifty kilobytes of Romanian.

   THE LANGUAGES. en, ru, zh, it, de, lt, pt, es, pl, fr, ro -- in that order
   in every pack, so a language missing from one pack is visible by reading
   down rather than by diffing.

   THE STRUCTURE, and why it is eleven objects rather than one. The main pack
   carries en and ru, the full page. The other nine start from a compact pack
   that inherits the whole en pack, and each surface that added its own copy --
   the manual picker, the note row, the photo editor, the VIN field, the
   registration field, the cabinet, the account tiles, the account panel, the
   cookie banner -- merged its keys in underneath with the loop that follows it.
   The order of the blocks below is the order the merges run in, and it is the
   order of this file, so a key defined twice ends up with the same value here
   as it did there.

   THE MERGE, not the object, is the contract. The page reads translations[lang],
   never the individual packs, so what leaves this file is a single object with
   every key already folded in. currentLang, the switcher and the fall-back to
   English stayed in the page; they are behaviour.

   ENCODING. UTF-8, no BOM, CRLF, exactly as the page it came out of.
   ================================================================== */

const translations = {
    en: {
        login: "Log In", subtitle: "Find Car Parts", homeLabel: "Start a new request",
        find: "Search", change: "Change",
        altManual: 'Or select by Make & Model',
        altBack: 'Back to Registration/VIN',
        labelPart: "What part do you need?", placeholderPart: "Type part name or OEM number...", partFieldLabel: "Enter part name or article", voiceBtn: "Voice Search", photoBtn: "Photo Search", partEnglishOnly: "Type the part name in English, or use Voice Search or Photo Search.", partPickFromList: "⚠️ Choose a part from the TecDoc list before sending.",
        notePlaceholder: "Add a note for suppliers (e.g. left side, mirror glass only)...",
        translateBtn: "Translate to English (AI)",
        transDone: "✨ EN Translated",
        attachPhoto: "Add photo",
        addPart: "Add another part", removePart: "Remove", sendRfq: "Send Request to Suppliers",
        searching: "Finding vehicle...",
        sendTo: "Send request to",
        warranty: "Return warranty required only",
        dismantlers: "Dismantlers", motorfactors: "Motorfactors", dealers: "Dealers",
        sendToInfoLabel: "What each category receives", optionsInfoLabel: "What each option does",
        // The two window titles and the privacy line. English and Russian only,
        // read through T() by the other nine, on the same seam as the four
        // optionInfo strings below and the routing sheet's three descriptions:
        // an untranslated title is a bad title, an empty grey band at the top
        // of the window is worse. They are written with T() and not t. for
        // that reason -- t.someKey is undefined in a pack that does not have
        // it, and undefined in a heading is a heading that renders the word.
        optionsSheetTitle: "Additional Request Parameters",
        routingSheetTitle: "Request Recipients",
        contactsHiddenNote: "🔒 Your contact details are hidden and will not be shared with suppliers until you choose to contact them directly.",
        // errReg and regFieldLabel now live in regFieldTranslations, so that
        // all eleven languages get a real sentence instead of nine of them
        // showing this one.
        succTitle: "Request Sent!",
        succDesc: "Verified suppliers can now review your request. New quotes arrive instantly in your inbox.",
        succSuppliers: "Sent to selected suppliers",
        newReq: "+ Create New Request",
        viewRequest: "View My Request ➔",
        errorCardHint: "⚠️ Please fill in or select this part before adding a new one.",
        quickVoiceTitle: "Call to Place Request", quickVoiceSubtitle: "Create a request by phone",
        quickScrapTitle: "Sell a damaged vehicle", quickScrapSubtitle: "Private offers from verified buyers",
        requestOptions: "Request options",
        businessName: "Business name", vatNumber: "VAT number (optional, adds trust)",
        optionWarranty: "Guarantee", optionDelivery: "Delivery", optionVat: "Invoice", optionUrgent: "Express",
    optionNameWarranty: "Return guarantee", optionNameDelivery: "Delivery only", optionNameVat: "VAT invoice", optionNameUrgent: "Urgent (24 h)",
    // What the four options promise, read in the info sheet beside the box. The
    // four names on the line above are the sheet's own titles: they are the fuller
    // wording of the same four options whose one-word labels are on the buttons
    // above them, so the two surfaces can name one thing at two lengths but they
    // cannot name two different things. The PRO / PRO+ marks on the two PRO rows
    // are markup, exactly as the PRO tags on those buttons are.
    optionInfoWarranty: "Requires the seller to state their return terms when they reply. Suppliers who do not accept this condition cannot send you an offer.",
    optionInfoDelivery: "Requires suppliers to include courier delivery, ruling out listings that are collection only.",
    optionInfoVat: "Flags the request as priority so that you can receive an official VAT invoice. Available on PRO accounts. See the Terms & Conditions for details.",
    // "within 24 hours" is written in two places on purpose: in this paragraph and
    // in the sheet's title for the same option, "Urgent (24 h)". Shortening the four
    // button labels to a single word each -- the one-line rule needed one -- deleted
    // "Urgent (24h)" from the button, so the button carries the promise only through
    // the sheet. It is one clause inside a sentence that already said "the fastest
    // reply available", so it adds a number rather than a second idea.
    // The ru pack keeps the same promise in the same two places, with the clause
    // left out of the paragraph because its title already carries it. All eleven
    // packs define optionInfoUrgent; an earlier version of this comment claimed
    // nine of them did not and fell back to this string, which was wrong.
    optionInfoUrgent: "Pins the request to the top of suppliers' feeds with a priority mark, for the fastest reply available — within 24 hours. Available on PRO accounts. See the Terms & Conditions for details.",
    optionsPlatformNote: "🔒 Allparts.ie is an information platform that puts the two sides in touch. Sellers carry the responsibility for the warranty, VAT and delivery they advertise, under Irish and EU law.",
        auto: "Auto", placeSuggestionsLabel: "Location suggestions",
        // Thirteen keys used to sit between here and privacyNote and are gone:
        // locationTitle, countyRequired, locationLead, county, selectCounty,
        // area, allDublin, northside, southside, west, postcodeOptional,
        // postcodePlaceholder and toastLocation. All thirteen belonged to the
        // home page's location block, which was deleted two rounds ago, and none
        // had a reader left. Eleven of them were dropped from all eleven packs
        // and the two multi-line ones from en and ru, so no pack is now half
        // removed. `county` and `area` were also prototypeState properties and
        // still are -- prototypeState.county is written by applyPlaceSuggestion
        // and read by updateRoutingPreview -- which is why the removal matched
        // `key: "a string"` and not the bare word.
        //
        // Two keys on the same original list were NOT dead and were kept:
        // toastLocationFound and toastLocationDenied, both read inside
        // useCurrentLocation as translations[currentLang].toastLocationFound.
        // An audit that searched only for T('key') calls them dead; a read
        // through a property is still a read. Their wording still says
        // "county", which no longer exists as a control -- the honest fix is
        // rewording them, which is reported rather than done here because it
        // is a wording change the owner should make.
        //
        // locationRequired is new and is the standing note under the one field,
        // which is required. It says what the field accepts (a town or an
        // Eircode, not "your location", because naming only one of the two
        // would make a buyer who typed a town think they had answered it
        // wrongly) and it says why, because the reason is the promise in the
        // lock note directly beneath it. The failed-submit message is a
        // different string and stays different: this one is about the field,
        // that one is about the click.
        locationRequired: "Required — a town or an Eircode, so nearby suppliers can be matched.",
        /* The same requirement, said as a TOAST after a refused submit, and it
           is a separate key on purpose.

           toastLocation used to exist and said "Select your county before
           sending the request". It was removed with the other twelve dead
           location keys and then this call site -- the one place the
           requirement is enforced -- was left pointing at it, so the toast
           rendered the word "undefined" in every language. probe-auth caught
           it: the check for a refusal that names the action passed on a
           string that named nothing at all, because the failure was reported
           as the detail rather than as the assertion. Two things are fixed
           here and one of them is the check.

           Two keys rather than one, because the two surfaces are read at
           different moments: the note is read BEFORE the buyer has done
           anything and explains the field; the toast is read AFTER a click
           that was refused and names the action to take. The old string was
           the toast's grammar and had no business in a standing note -- which
           is one of the reasons they were split rather than shared.
           Neither names a county, because there is no county control left to
           name. */
        toastLocationRequired: "Tell us your town or Eircode before sending the request.",
        // The cabinet's email error. Shown under the field in the field's own
        // red, and it is the message rather than the tint that has to carry
        // the meaning: a red box tells a buyer something is wrong and nothing
        // about what. "Invalid email address format" says the shape of the
        // problem, which is the only thing the buyer can act on -- and it does
        // NOT say what a valid one looks like, because the field already did
        // that with type=email before this message existed.
        emailInvalidFormat: "Invalid email address format.",
        /* The wording of this one is the USER'S, not mine, and it is stated
           here because the alternatives were all worse: it is the only
           validation message in the panel that has to name BOTH accepted
           shapes, since a buyer who typed "Coolock" and one who typed
           "D02 XY45" have to be able to read their own case out of it.
           "We could not find that location" would be wrong for "SSDDFF" --
           it implies a lookup ran and missed, and what actually happened is
           that the text is not a place -- and a message naming only the
           Eircode would send a buyer who typed their town backwards to the
           code field. It names both, in the order the field's own hint
           names them. */
        locationInvalid: "Enter an Irish town, area or street, or a 7-character Eircode (for example D02 XY45).",
        // The GDPR confirmation, verbatim as specified. It is a key rather
        // than an inline literal so all eleven packs can say it in their own
        // language; the nine single-line packs omit it and fall back to this
        // English through T(), which is the same mechanism every other key
        // they omit already uses. Nine machine translations of a GDPR notice
        // would be worse than nine English ones, so none were invented.
        deleteConfirmGdpr: "Are you sure you want to permanently delete your AllParts.ie account under the GDPR rules? This action cannot be undone.",
        privacyNote: "🔒 Your location helps us find the right sellers. Nearby suppliers see you first. Your exact address is never shared.",
        routeDismantlers: "All verified ROI & NI dismantlers", routeDismantlersCopy: "Verified ROI & NI dismantlers receive a broadcast; distance does not limit reach.",
        routeMotorfactors: "Nearby motor factors first", routeMotorfactorsCopy: "Closest branches are prioritised first; the search can widen if needed.",
        routeDealersCopy: "BrandScope matched by vehicle make — distance does not limit delivery.",
        authTitle: "Get your quotes", authSubtitle: "",
        authName: "Your name",
        // authPhone/authPhoneHint/authEmail/authContinue described the old
        // sign-in form and are no longer read by any call site. They are left
        // in place rather than deleted from two of eleven packs: T() falls
        // back to English, so a key that nothing calls cannot mislead a
        // screen, and deleting it from only en/ru would make the two packs
        // disagree with the other nine about what exists. authPhoneShort
        // IS still live -- it is the mobile field's floating label.
        authPhone: "Mobile number", authPhoneShort: "Mobile number", authPhoneHint: "🔒 Hidden from suppliers until you decide to share it.", authEmail: "Email for quotes and updates", authContinue: "Continue with phone",
        authLegal: "Your phone number stays hidden from suppliers until you choose to share it. By continuing, you agree to the T&C and Privacy Policy.",
        otpLabel: "Enter the 4-digit code sent by SMS", demoCode: "Prototype code: 1234", verifySend: "Verify & Send Request",
        // One sheet, one heading, no subtitle. The two scenarios are told
        // apart by the fields on screen, not by a sentence above them, so
        // there is one title key and no authSubtitle* at all. The green
        // button still differs, because that is the action and it does
        // differ: Scenario A is "get going", Scenario B is "continue".
        authTitleMain: "Sign In / Register",
        authLabelEmail: "Email", authLabelEircode: "Location / Eircode", authLabelBusiness: "Business Name", authLabelCro: "CRO Number",
        authContinueLogin: "Continue", authSendRequest: "Send Request", getOffers: "Get Offers",
        authDividerText: "or fill in manually",
        // Accessible name for the (x) in a field. The field's own label is
        // appended at paint time, so the name reads "Clear Email" rather
        // than the same "Clear" three times over.
        authClearField: "Clear",
        
        accountPasswordLabel: "Password",
        upgradeTitle: "Upgrade to PRO", upgradeSubtitle: "AI-powered platform to connect car owners and parts suppliers in Ireland. Unlock advanced filtering tools, request up to 10 parts simultaneously, and get priority visibility in the suppliers' feed.",
        benefitParts: "✓ Up to 10 parts in one request", benefitOptions: "VAT invoice and Urgent (24h) options", benefitMedia: "Add one short video to each part",
        activatePro: "Try PRO for Free", featureGotIt: "Got it",
        inboxTitle: "your requests", inboxSubtitle: "Quotes arrive here in real time.",
        inboxRoleCaption: "Status", inboxPrivateShort: "Private", inboxGarageShort: "Trade",
        socialGoogle: "Continue with Google", socialApple: "Continue with Apple",
        reportRequestShort: "Report request",
        supportTitle: "How can we help you today?", supportSubtitle: "Tell us what happened. We keep the request context private.", supportIssue: "Issue / question", supportDispute: "Report / dispute", supportOrder: "Order & Quotes", supportOrderCaption: "Request, quote or delivery", supportDisputeCaption: "Report a problem", supportFeedback: "Feature request / Feedback", supportFeedbackCaption: "Help us improve", supportCategories: "Support categories", supportChooseBranch: "Choose the closest topic", branchNoReply: "Supplier didn't reply", branchWrongPart: "Wrong part received", branchOther: "Something else", supportResolutionTitle: "Suggested next step", supportResolutionNoReply: "We can remind the supplier and keep your request open while we check the timeline.", supportResolutionWrongPart: "Please keep the quote and delivery details. Support can help document the issue before a dispute is opened.", supportResolutionOther: "Use the form below and our team will route the request to the right Allparts.ie specialist.", supportWhatsApp: "Chat with us on WhatsApp", supportWhatsAppDemo: "WhatsApp fallback is enabled here for this prototype; production routing is rate-limited.", supportTopic: "Topic", supportMessage: "Message", supportMessagePlaceholder: "Describe the issue (do not include payment details)...", supportSend: "Send to support", supportSuccess: "Thanks — our support team will review this request.", reportQuote: "⚠️ Report quote", reportRequest: "⚠️ Report Request", supplierPreview: "Supplier-side safety preview", supplierPreviewCaption: "Buyer contact stays hidden until the lead is purchased.", supplierContactLabel: "Supplier contact", supplierPhoneLabel: "Call supplier", supplierWhatsAppLabel: "WhatsApp",
        legalTitle: "Terms & Privacy", legalSubtitle: "Prototype information notice", legalTerms: "Terms & Conditions (prototype preview)", legalPrivacy: "Privacy notice (prototype preview)", legalTermsText: "This prototype demonstrates the Allparts.ie RFQ flow. In production, buyers send part details to verified suppliers, suppliers return quotes, and the platform records consent, request status and communications according to the published Terms & Conditions.", legalPrivacyText: "Your exact address is not shared with suppliers. The county and optional routing key are used to match relevant suppliers; precise geolocation is used transiently and is not stored in this prototype. An ephemeral risk signal may be used for abuse prevention, but it is not a permanent device identity. Contact details remain private unless you choose to share them.", profanityHint: "⚠️ Please remove abusive language before sending this request.", toastProfanity: "Please remove abusive language before sending.", toastSafeSearch: "This photo was not passed by the SafeSearch demo check.",
        toastSupplier: "Keep at least one supplier type selected.",
        toastBuyerMode: "Choose who this request is for first.",
        toastVoiceAuth: "Sign in before using the voice request assistant.",
        toastName: "Enter your name.",
        toastPartLimit: "Your current plan has reached its parts limit.",
        toastPhone: "Enter a valid 9-digit Irish mobile number.",
        toastEmail: "Enter a valid email address.",
        toastOtp: "Enter the 4-digit code.",
        toastInvalidOtp: "Use prototype code 1234.",
        toastLocationFound: "Location detected. Please confirm your county.",
        toastLocationDenied: "Location unavailable. Select your county manually."
    },
    ru: {
        login: "Войти", subtitle: "Поиск автозапчастей", homeLabel: "Начать новый запрос",
        find: "Поиск", change: "Изменить",
        altManual: 'Или выбрать марку и модель',
        altBack: 'Назад к госномеру/VIN',
        labelPart: "Какая запчасть вам нужна?", placeholderPart: "Введите название детали или артикул...", partFieldLabel: "Название или артикул", voiceBtn: "Голосовой поиск", photoBtn: "Поиск по фото", partEnglishOnly: "Введите название детали на английском или воспользуйтесь голосовым поиском или поиском по фото.", partPickFromList: "⚠️ Выберите деталь из списка TecDoc перед отправкой.",
        notePlaceholder: "Примечание для поставщиков (например, левая сторона, только стекло)...",
        translateBtn: "Перевести на английский (ИИ)",
        transDone: "✨ EN Translated",
        attachPhoto: "Добавить фото",
        addPart: "Добавить еще запчасть", removePart: "Удалить", sendRfq: "Отправить запрос поставщикам",
        searching: "Поиск автомобиля...",
        sendTo: "Отправить запрос",
        warranty: "Только с гарантией возврата",
        dismantlers: "Разборки", motorfactors: "Магазины запчастей", dealers: "Дилеры",
        sendToInfoLabel: "Что получает каждая категория", optionsInfoLabel: "Что делает каждый параметр",
        // The Russian half of the two window titles and the privacy line. See
        // the note on the same three keys in the English pack.
        optionsSheetTitle: "Дополнительные параметры запроса",
        routingSheetTitle: "Получатели запроса",
        contactsHiddenNote: "🔒 Ваши контактные данные скрыты и не передаются поставщикам, пока вы сами не решите связаться с ними напрямую.",
        // See regFieldTranslations.
        succTitle: "Запрос отправлен!",
        succDesc: "Проверенные поставщики уже могут изучить запрос. Новые предложения появляются в вашем inbox мгновенно.",
        succSuppliers: "Отправлено выбранным поставщикам",
        newReq: "+ Создать новый запрос",
        viewRequest: "Мои предложения ➔",
        errorCardHint: "⚠️ Заполните или выберите эту деталь перед добавлением новой.",
        quickVoiceTitle: "Заказать по телефону", quickVoiceSubtitle: "Создайте запрос голосом",
        quickScrapTitle: "Продать повреждённый автомобиль", quickScrapSubtitle: "Частные предложения проверенных покупателей",
        requestOptions: "Параметры запроса",
        businessName: "Название компании", vatNumber: "VAT (необязательно, добавляет доверия)",
        optionWarranty: "Гарантия", optionDelivery: "Доставка", optionVat: "Чек", optionUrgent: "Срочно",
    optionNameWarranty: "Гарантия возврата", optionNameDelivery: "Только доставка", optionNameVat: "Счёт с НДС", optionNameUrgent: "Срочно (24 ч)",
    // Что обещает каждая из четырёх опций, для окна рядом с боксом. Четыре
    // названия на строке выше — собственные заголовки окна: это развёрнутая
    // формулировка тех же четырёх опций, чьи однословные подписи стоят на кнопках
    // выше, поэтому две поверхности называют одно и то же разными длинами, но
    // не могут назвать разное. Пометки PRO / PRO+ у двух PRO-строк — разметка, ровно
    // как теги PRO на этих же кнопках.
    optionInfoWarranty: "Обязывает продавца предоставить условия возврата при ответе. Поставщики, не согласные с этим условием, не смогут отправить вам предложение.",
    optionInfoDelivery: "Обязывает поставщиков включать возможность курьерской доставки, исключая варианты с обязательным самовывозом.",
    optionInfoVat: "Запрос с приоритетной пометкой для получения официального VAT-инвойса. Доступно для PRO-аккаунтов. Подробнее — в Terms & Conditions.",
    // «в течение 24 часов» убрано из этого абзаца: обещание срока переехало в
    // заголовок той же строки окна, «Срочно (24 ч)», чтобы не повторяться дважды
    // подряд в одном экране. Абзац сократился с 181 до 160 символов. Обещание
    // осталось в файле — в заголовке и в том же виде в английском паке.
    optionInfoUrgent: "Закрепляет запрос вверху ленты поставщиков с пометкой приоритета для максимальной скорости ответа. Доступно для PRO-аккаунтов. Подробнее — в Terms & Conditions.",
    optionsPlatformNote: "🔒 Allparts.ie — информационная платформа для связи сторон. Продавцы самостоятельно несут ответственность за выполнение заявленных гарантий, НДС и доставки согласно законам Ирландии и ЕС.",
        auto: "Авто", placeSuggestionsLabel: "Варианты местоположения",
        locationRequired: "Обязательно — укажите город или Eircode, чтобы мы подобрали ближайших поставщиков.",
        toastLocationRequired: "Укажите город или Eircode перед отправкой запроса.",
        emailInvalidFormat: "Некорректный формат email адреса.",
        locationInvalid: "Введите ирландский город, район или улицу либо 7-значный индекс Eircode (например D02 XY45).",
        deleteConfirmGdpr: "Вы уверены, что хотите безвозвратно удалить свой аккаунт AllParts.ie согласно правилам GDPR? Данное действие нельзя отменить",
        privacyNote: "🔒 Локация помогает найти подходящих продавцов. Ближайшие поставщики видят запрос первыми. Точный адрес никогда не передаётся.",
        routeDismantlers: "Все проверенные разборки ROI и NI", routeDismantlersCopy: "Проверенные разборки ROI и NI получают широковещательный запрос; расстояние не ограничивает охват.",
        routeMotorfactors: "Сначала ближайшие магазины", routeMotorfactorsCopy: "Ближайшие филиалы получают приоритет; при необходимости поиск расширяется.",
        routeDealersCopy: "Подбор BrandScope по марке автомобиля — расстояние не ограничивает доставку.",
        authTitle: "Получите предложения", authSubtitle: "",
        authName: "Ваше имя", authPhone: "Мобильный номер", authPhoneShort: "Мобильный номер", authPhoneHint: "🔒 Скрыт от поставщиков, пока вы сами его не откроете.", authEmail: "Email для предложений и уведомлений", authContinue: "Продолжить по телефону",
        authLegal: "Поставщики не видят ваш номер, пока вы сами его не откроете. Продолжая, вы принимаете T&C и Privacy Policy.",
        otpLabel: "Введите 4-значный код из SMS", demoCode: "Код прототипа: 1234", verifySend: "Подтвердить и отправить",
        authTitleMain: "Вход / Регистрация",
        authLabelEmail: "Email", authLabelEircode: "Местоположение / Eircode", authLabelBusiness: "Название компании", authLabelCro: "Номер CRO",
        authContinueLogin: "Продолжить", authSendRequest: "Отправить запрос", getOffers: "Получить предложения",
        authDividerText: "или заполните вручную",
        authClearField: "Очистить",
        
        accountPasswordLabel: "Пароль",
        upgradeTitle: "Перейти на PRO", upgradeSubtitle: "Платформа на базе ИИ, которая соединяет владельцев автомобилей и поставщиков запчастей в Ирландии. Расширенные инструменты фильтрации, до 10 запчастей в одном запросе и приоритетная видимость в ленте поставщиков.",
        benefitParts: "✓ До 10 запчастей в одном запросе", benefitOptions: "Счёт с НДС и срочный режим 24 ч", benefitMedia: "Одно короткое видео к каждой детали",
        activatePro: "Активировать PRO бесплатно", featureGotIt: "Понятно",
        inboxTitle: "ваши запросы", inboxSubtitle: "Новые предложения появляются здесь в реальном времени.",
        inboxRoleCaption: "Статус", inboxPrivateShort: "Private", inboxGarageShort: "Trade",
        socialGoogle: "Продолжить с Google", socialApple: "Продолжить с Apple",
        reportRequestShort: "Пожаловаться на запрос",
        supportTitle: "Как мы можем помочь?",  supportSubtitle: "Расскажите, что произошло. Контекст запроса останется конфиденциальным.", supportIssue: "Вопрос / проблема", supportDispute: "Жалоба / спор", supportOrder: "Заказ и предложения", supportOrderCaption: "Запрос, предложение или доставка", supportDisputeCaption: "Сообщить о проблеме", supportFeedback: "Предложение функции / отзыв", supportFeedbackCaption: "Помогите нам улучшить сервис", supportCategories: "Категории поддержки", supportChooseBranch: "Выберите ближайшую тему", branchNoReply: "Поставщик не ответил", branchWrongPart: "Пришла не та деталь", branchOther: "Другой вопрос", supportResolutionTitle: "Следующий шаг", supportResolutionNoReply: "Мы можем напомнить поставщику и оставить запрос открытым, пока проверяем сроки.", supportResolutionWrongPart: "Сохраните предложение и данные доставки. Поддержка поможет оформить спор.", supportResolutionOther: "Опишите проблему ниже — команда направит обращение нужному специалисту Allparts.ie.", supportWhatsApp: "Написать нам в WhatsApp", supportWhatsAppDemo: "Fallback в WhatsApp включён в демо; в рабочей версии он ограничен по частоте.", supportTopic: "Тема", supportMessage: "Сообщение", supportMessagePlaceholder: "Опишите проблему (не указывайте платёжные данные)...", supportSend: "Отправить в поддержку", supportSuccess: "Спасибо — команда поддержки рассмотрит запрос.", reportQuote: "⚠️ Пожаловаться на предложение", reportRequest: "⚠️ Пожаловаться на запрос", supplierPreview: "Предпросмотр безопасности поставщика", supplierPreviewCaption: "Контакты покупателя скрыты до покупки лида.", supplierContactLabel: "Контакт поставщика", supplierPhoneLabel: "Позвонить поставщику", supplierWhatsAppLabel: "WhatsApp",
        legalTitle: "Условия и конфиденциальность", legalSubtitle: "Информация прототипа", legalTerms: "Условия использования (предпросмотр)", legalPrivacy: "Политика конфиденциальности (предпросмотр)", legalTermsText: "Этот прототип демонстрирует RFQ-сценарий Allparts.ie. В рабочей версии покупатели отправляют сведения о деталях проверенным поставщикам, поставщики возвращают предложения, а платформа записывает согласие, статус запроса и переписку в соответствии с опубликованными Условиями.", legalPrivacyText: "Точный адрес не передаётся поставщикам. Графство и необязательный routing key используются для подбора поставщиков; точные координаты используются временно и не сохраняются в прототипе. Эфемерный сигнал риска может использоваться для защиты от злоупотреблений, но он не является постоянной идентификацией устройства. Контактные данные остаются скрытыми, пока вы не решите их раскрыть.", profanityHint: "⚠️ Уберите оскорбительные слова перед отправкой запроса.", toastProfanity: "Уберите оскорбительные слова перед отправкой.", toastSafeSearch: "Фотография не прошла демо-проверку SafeSearch.",
        toastSupplier: "Оставьте выбранным хотя бы один тип поставщика.",
        toastBuyerMode: "Сначала выберите, для кого этот запрос.",
        toastVoiceAuth: "Войдите перед использованием голосового помощника.",
        toastName: "Введите ваше имя.",
        toastPartLimit: "Достигнут лимит запчастей текущего тарифа.",
        toastPhone: "Введите корректный 9-значный ирландский номер.",
        toastEmail: "Введите корректный email.",
        toastOtp: "Введите 4-значный код.",
        toastInvalidOtp: "Используйте код прототипа 1234.",
        toastLocationFound: "Локация определена. Подтвердите графство.",
        toastLocationDenied: "Локация недоступна. Выберите графство вручную."
    }
};

// Core labels for the remaining supported languages. Production builds can replace
// this small prototype dictionary with the full i18n files without changing the flow.
const additionalTranslations = {
    zh: { altManual: "或按品牌和车型选择", altBack: "返回车牌/VIN", login: "登录", subtitle: "汽车配件搜索", homeLabel: "开始新的询价请求", find: "搜索", change: "修改", labelPart: "您需要什么零件？", placeholderPart: "输入零件名称或 OEM 编号...", partFieldLabel: "输入零件名称或编号", voiceBtn: "语音搜索", photoBtn: "照片搜索", partEnglishOnly: "请用英文输入零件名称，或使用语音搜索或照片搜索。", partPickFromList: "⚠️ 发送前请从 TecDoc 列表中选择零件。", attachPhoto: "添加照片", addPart: "添加另一零件", removePart: "删除", sendRfq: "向供应商发送请求", searching: "正在查找车辆…", sendTo: "发送请求至", dismantlers: "拆车厂", motorfactors: "汽配商", dealers: "经销商", requestOptions: "请求选项", optionWarranty: "保障", optionDelivery: "配送", optionVat: "发票", optionUrgent: "加急", optionNameWarranty: "退货保障", optionNameDelivery: "仅配送", optionNameVat: "增值税发票", optionNameUrgent: "加急（24 小时）", optionInfoWarranty: "要求卖家在回复中说明退货条款。不接受该条款的供应商将无法向您报价。", optionInfoDelivery: "要求供应商提供快递配送，排除仅支持自提的报价。", optionInfoVat: "为此请求加上优先标记，以便您收到合规的增值税发票。PRO 账户可用。详情见 Terms & Conditions。", optionInfoUrgent: "为此请求在供应商信息流顶部加上优先标记，以获得最快的回复 — 24 小时内。PRO 账户可用。详情见 Terms & Conditions。", optionsPlatformNote: "🔒 Allparts.ie 是一个信息平台，将买卖双方连接起来。卖家需对所声明的质保、增值税和配送负责，并遵守爱尔兰及欧盟法律。", auto: "自动", placeSuggestionsLabel: "位置建议", privacyNote: "🔒 您的位置用于帮助我们找到合适的供应商。附近供应商会优先看到请求。您的确切地址不会共享。", authTitle: "获取报价", authSubtitle: "验证手机后发送请求并接收供应商回复。", authPhone: "爱尔兰手机号码", authEmail: "接收报价和更新的邮箱", authContinue: "使用手机继续", otpLabel: "输入短信发送的 4 位代码", demoCode: "原型代码：1234", verifySend: "验证并发送请求", upgradeTitle: "升级到 PRO", upgradeSubtitle: "每个请求可添加更多零件。", activatePro: "免费试用 PRO", inboxTitle: "您的请求列表", inboxSubtitle: "报价会实时出现在这里。", toastSupplier: "请至少保留一种供应商。", toastPhone: "请输入有效的 9 位爱尔兰手机号码。", toastOtp: "请输入 4 位代码。", toastInvalidOtp: "请使用原型代码 1234。", sendToInfoLabel: "每类供应商收到什么", optionsInfoLabel: "每个选项的作用" },
    it: { altManual: "O seleziona per marca e modello", altBack: "Torna a matricola/VIN", login: "Accedi", subtitle: "Ricerca ricambi", homeLabel: "Inizia una nuova richiesta", find: "Cerca", change: "Modifica", labelPart: "Quale ricambio ti serve?", placeholderPart: "Inserisci il nome del ricambio o il numero OEM...", partFieldLabel: "Nome del ricambio o codice", voiceBtn: "Ricerca vocale", photoBtn: "Ricerca foto", partEnglishOnly: "Scrivi il nome del ricambio in inglese, oppure usa la ricerca vocale o la ricerca foto.", partPickFromList: "⚠️ Scegli un ricambio dall'elenco TecDoc prima di inviare.", attachPhoto: "Aggiungi foto", addPart: "Aggiungi altro ricambio", removePart: "Rimuovi", sendRfq: "Invia richiesta ai fornitori", searching: "Ricerca auto…", sendTo: "Invia a", dismantlers: "Demolitori", motorfactors: "Ricambi auto", dealers: "Concessionarie", requestOptions: "Opzioni richiesta", optionWarranty: "Garanzia", optionDelivery: "Consegna", optionVat: "Fattura", optionUrgent: "Urgente", optionNameWarranty: "Garanzia di reso", optionNameDelivery: "Solo consegna", optionNameVat: "Fattura con IVA", optionNameUrgent: "Urgente (24 h)", optionInfoWarranty: "Obbliga il venditore a indicare le condizioni di reso nella sua risposta. I fornitori che non accettano questa condizione non potranno inviarti un'offerta.", optionInfoDelivery: "Obbliga i fornitori a includere la consegna tramite corriere, escludendo gli annunci disponibili solo per il ritiro in sede.", optionInfoVat: "Contrassegna la richiesta come prioritaria, così puoi ricevere una fattura con IVA in regola. Disponibile sugli account PRO. Per i dettagli, vedi i Terms & Conditions.", optionInfoUrgent: "Fissa la richiesta in cima ai feed dei fornitori con un contrassegno di priorità, per ottenere la risposta più rapida possibile — entro 24 ore. Disponibile sugli account PRO. Per i dettagli, vedi i Terms & Conditions.", optionsPlatformNote: "🔒 Allparts.ie è una piattaforma di informazioni che mette in contatto le due parti. I venditori si assumono la responsabilità della garanzia, dell'IVA e della consegna che offrono, ai sensi del diritto irlandese e dell'UE.", auto: "Auto", placeSuggestionsLabel: "Suggerimenti di posizione", privacyNote: "🔒 La posizione aiuta a trovare i fornitori giusti. I fornitori vicini vedono prima la richiesta. Il tuo indirizzo esatto non viene condiviso.", authTitle: "Ricevi offerte", authSubtitle: "Verifica il telefono per inviare la richiesta e ricevere risposte.", authPhone: "Numero irlandese", authEmail: "Email per offerte e aggiornamenti", authContinue: "Continua con telefono", otpLabel: "Inserisci il codice SMS di 4 cifre", demoCode: "Codice prototipo: 1234", verifySend: "Verifica e invia", upgradeTitle: "Passa a PRO", upgradeSubtitle: "Più ricambi per ogni richiesta.", activatePro: "Attiva PRO gratis", inboxTitle: "Le tue richieste", inboxSubtitle: "Le offerte arrivano qui in tempo reale.", toastSupplier: "Lascia selezionato almeno un fornitore.", toastPhone: "Inserisci un numero irlandese valido di 9 cifre.", toastOtp: "Inserisci il codice di 4 cifre.", toastInvalidOtp: "Usa il codice prototipo 1234.", sendToInfoLabel: "Cosa riceve ogni categoria", optionsInfoLabel: "Cosa fa ogni opzione" },
    de: { altManual: "Oder nach Marke & Modell auswählen", altBack: "Zurück zu Kennzeichen/VIN", login: "Anmelden", subtitle: "Teile finden", homeLabel: "Neue Anfrage starten", find: "Suchen", change: "Ändern", labelPart: "Welches Teil benötigen Sie?", placeholderPart: "Teilname oder OEM-Nummer eingeben...", partFieldLabel: "Teilname oder Artikelnummer", voiceBtn: "Sprachsuche", photoBtn: "Foto-Suche", partEnglishOnly: "Geben Sie den Teilnamen auf Englisch ein oder nutzen Sie Sprachsuche bzw. Foto-Suche.", partPickFromList: "⚠️ Wählen Sie vor dem Senden ein Teil aus der TecDoc-Liste.", attachPhoto: "Foto hinzufügen", addPart: "Weiteres Teil hinzufügen", removePart: "Entfernen", sendRfq: "Anfrage an Lieferanten senden", searching: "Fahrzeug wird gesucht…", sendTo: "Anfrage senden an", dismantlers: "Autoverwerter", motorfactors: "Autoteilehändler", dealers: "Händler", requestOptions: "Anfrageoptionen", optionWarranty: "Garantie", optionDelivery: "Lieferung", optionVat: "Rechn.", optionUrgent: "Express", optionNameWarranty: "Rückgabegarantie", optionNameDelivery: "Nur Versand", optionNameVat: "MwSt.-Rechnung", optionNameUrgent: "Dringend (24 h)", optionInfoWarranty: "Verpflichtet den Verkäufer, bei seiner Antwort die Rückgabebedingungen anzugeben. Lieferanten, die diese Bedingung nicht akzeptieren, können Ihnen kein Angebot machen.", optionInfoDelivery: "Verpflichtet Lieferanten dazu, die Zustellung per Kurier anzubieten, und schließt Angebote aus, die nur zur Abholung verfügbar sind.", optionInfoVat: "Kennzeichnet die Anfrage mit einer Prioritätsmarkierung, damit Sie eine offizielle Rechnung mit ausgewiesener Mehrwertsteuer erhalten können. Verfügbar für PRO-Konten. Einzelheiten in den Terms & Conditions.", optionInfoUrgent: "Setzt die Anfrage mit einer Prioritätsmarkierung an die Spitze der Lieferanten-Feeds — für die schnellstmögliche Antwort, innerhalb von 24 Stunden. Verfügbar für PRO-Konten. Einzelheiten in den Terms & Conditions.", optionsPlatformNote: "🔒 Allparts.ie ist eine Informationsplattform, die beide Seiten miteinander verbindet. Verkäufer tragen die Verantwortung für die Garantie, die Mehrwertsteuer und die Lieferung, die sie anbieten, gemäß irischem und EU-Recht.", auto: "Automatisch", placeSuggestionsLabel: "Standortvorschläge", privacyNote: "🔒 Ihr Standort hilft, die richtigen Lieferanten zu finden. Nahegelegene Lieferanten sehen die Anfrage zuerst. Ihre genaue Adresse wird nicht geteilt.", authTitle: "Angebote erhalten", authSubtitle: "Bestätigen Sie Ihre Telefonnummer, um die Anfrage zu senden.", authPhone: "Irische Mobilnummer", authEmail: "E-Mail für Angebote und Updates", authContinue: "Mit Telefon fortfahren", otpLabel: "4-stelligen SMS-Code eingeben", demoCode: "Prototype-Code: 1234", verifySend: "Prüfen und senden", upgradeTitle: "PRO aktivieren", upgradeSubtitle: "Mehr Teile pro Anfrage.", activatePro: "PRO kostenlos aktivieren", inboxTitle: "Ihre Anfragen", inboxSubtitle: "Angebote erscheinen hier in Echtzeit.", toastSupplier: "Wählen Sie mindestens einen Lieferanten.", toastPhone: "Geben Sie eine gültige 9-stellige irische Nummer ein.", toastOtp: "Geben Sie den 4-stelligen Code ein.", toastInvalidOtp: "Verwenden Sie den Prototypcode 1234.", sendToInfoLabel: "Was jede Kategorie erhält", optionsInfoLabel: "Was jede Option bewirkt" },
    lt: { altManual: "Arba pasirinkti pagal markę ir modelį", altBack: "Grįžti į numerį / VIN", login: "Prisijungti", subtitle: "Autodalių paieška", homeLabel: "Pradėti naują užklausą", find: "Ieškoti", change: "Keisti", labelPart: "Kokia detalė reikalinga?", placeholderPart: "Įveskite detalės pavadinimą arba OEM numerį...", partFieldLabel: "Pavadinimas arba kodas", voiceBtn: "Balso paieška", photoBtn: "Nuotraukų paieška", partEnglishOnly: "Įveskite detalės pavadinimą anglų kalba arba naudokite balso paiešką arba nuotraukų paiešką.", partPickFromList: "⚠️ Prieš siųsdami pasirinkite detalę iš „TecDoc“ sąrašo.", attachPhoto: "Pridėti nuotrauką", addPart: "Pridėti kitą detalę", removePart: "Pašalinti", sendRfq: "Siųsti užklausą tiekėjams", searching: "Ieškoma automobilio…", sendTo: "Siųsti užklausą", dismantlers: "Autolaužynai", motorfactors: "Autodalys", dealers: "Dileriai", requestOptions: "Užklausos parinktys", optionWarranty: "Garantija", optionDelivery: "Pristatymas", optionVat: "Sąskaita", optionUrgent: "Skubu", optionNameWarranty: "Grąžinimo garantija", optionNameDelivery: "Tik pristatymas", optionNameVat: "PVM faktūra", optionNameUrgent: "Skubus (24 val.)", optionInfoWarranty: "Reikalauja, kad pardavėjas atsakyme nurodytų savo grąžinimo sąlygas. Tiekėjai, nepriimantys šios sąlygos, negalės jums pateikti pasiūlymo.", optionInfoDelivery: "Reikalauja, kad tiekėjai numatytų pristatymą kurieriu, todėl neįtraukiami skelbimai, kuriuose galimas tik paėmimas iš vietos.", optionInfoVat: "Pažymi užklausą kaip prioritetinę, kad galėtumėte gauti tinkamai išrašytą PVM sąskaitą. Galima PRO paskyromis. Detalės — Terms & Conditions.", optionInfoUrgent: "Prisega užklausą tiekėjų srautų viršuje su prioriteto žyme, kad gautumėte greičiausią atsakymą — per 24 valandas. Galima PRO paskyromis. Detalės — Terms & Conditions.", optionsPlatformNote: "🔒 Allparts.ie yra informacinė platforma, kuri sujungia abi puses. Pardavėjai atsako už savo reklamuojamą garantiją, PVM ir pristatymą pagal Airijos ir ES teisę.", auto: "Automatiškai", placeSuggestionsLabel: "լietos pasišulymai", privacyNote: "🔒 Jūsų vieta padeda rasti tinkamus tiekėjus. Netoli esantys tiekėjai mato užklausą pirmiausia. Tikslus adresas nebendraunamas.", authTitle: "Gaukite pasiūlymus", authSubtitle: "Patvirtinkite telefoną, kad išsiųstumėte užklausą.", authPhone: "Airijos mobilusis numeris", authEmail: "El. paštas pasiūlymams ir naujienoms", authContinue: "Tęsti telefonu", otpLabel: "Įveskite 4 skaitmenų SMS kodą", demoCode: "Prototipo kodas: 1234", verifySend: "Patvirtinti ir siųsti", upgradeTitle: " Pereiti į PRO", upgradeSubtitle: "Daugiau detalių viename užklausime.", activatePro: "Nemokamai aktyvuoti PRO", inboxTitle: "Jūsų užklausos", inboxSubtitle: "Pasiūlymai čia rodomi realiu laiku.", toastSupplier: "Palikite bent vieną tiekėją.", toastPhone: "Įveskite tinkamą 9 skaitmenų Airijos numerį.", toastOtp: "Įveskite 4 skaitmenų kodą.", toastInvalidOtp: "Naudokite protipo kodą 1234.", sendToInfoLabel: "Ką gauna kiekviena kategorija", optionsInfoLabel: "Ką daro kiekvienas pasirinkimas" },
    pt: { altManual: "Ou selecionar por marca e modelo", altBack: "Voltar para matrícula/VIN", login: "Entrar", subtitle: "Encontrar peças", homeLabel: "Iniciar um novo pedido", find: "Pesquisar", change: "Alterar", labelPart: "Que peça precisa?", placeholderPart: "Indique o nome da peça ou o número OEM...", partFieldLabel: "Nome da peça ou referência", voiceBtn: "Pesquisa por voz", photoBtn: "Pesquisa por foto", partEnglishOnly: "Escreva o nome da peça em inglês ou use a pesquisa por voz ou por foto.", partPickFromList: "⚠️ Escolha uma peça da lista TecDoc antes de enviar.", attachPhoto: "Adicionar foto", addPart: "Adicionar outra peça", removePart: "Remover", sendRfq: "Enviar pedido aos fornecedores", searching: "A procurar veículo…", sendTo: "Enviar pedido a", dismantlers: "Desmanteladores", motorfactors: "Lojas de peças", dealers: "Concessionários", requestOptions: "Opções do pedido", optionWarranty: "Garantia", optionDelivery: "Entrega", optionVat: "Fatura", optionUrgent: "Urgente", optionNameWarranty: "Garantia de devolução", optionNameDelivery: "Apenas entrega", optionNameVat: "Fatura com IVA", optionNameUrgent: "Urgente (24 h)", optionInfoWarranty: "Obriga o vendedor a indicar as suas condições de devolução ao responder. Fornecedores que não aceitem esta condição não lhe podem enviar uma cotação.", optionInfoDelivery: "Obriga os fornecedores a incluírem a entrega por transportadora, o que exclui os anúncios disponíveis apenas para levantamento.", optionInfoVat: "Marca o pedido como prioritário para que possa receber uma fatura com IVA em regra. Disponível em contas PRO. Consulte os Terms & Conditions.", optionInfoUrgent: "Fixa o pedido no topo dos feeds dos fornecedores com uma marca de prioridade, para obter a resposta mais rápida possível — dentro de 24 horas. Disponível em contas PRO. Consulte os Terms & Conditions.", optionsPlatformNote: "🔒 Allparts.ie é uma plataforma de informação que liga as duas partes. Os vendedores assumem a responsabilidade pela garantia, pelo IVA e pela entrega que anunciam, ao abrigo do direito irlandês e do direito da UE.", auto: "Automático", placeSuggestionsLabel: "Sugestões de localização", privacyNote: "🔒 A localização ajuda a encontrar fornecedores. Fornecedores próximos veem primeiro. O seu endereço exato nunca é partilhado.", authTitle: "Receber cotações", authSubtitle: "Verifique o telefone para enviar o pedido e receber respostas.", authPhone: "Número móvel irlandês", authEmail: "Email para cotações e atualizações", authContinue: "Continuar com telefone", otpLabel: "Introduza o código SMS de 4 dígitos", demoCode: "Código do protótipo: 1234", verifySend: "Verificar e enviar", upgradeTitle: "Mudar para PRO", upgradeSubtitle: "Mais peças por pedido.", activatePro: "Ativar PRO grátis", inboxTitle: "Os seus pedidos", inboxSubtitle: "As cotações aparecem aqui em tempo real.", toastSupplier: "Selecione pelo menos um fornecedor.", toastPhone: "Introduza um número irlandês válido de 9 dígitos.", toastOtp: "Introduza o código de 4 dígitos.", toastInvalidOtp: "Use o código do protótipo 1234.", sendToInfoLabel: "O que cada categoria recebe", optionsInfoLabel: "O que faz cada opção" },
    es: { altManual: "O seleccionar por marca y modelo", altBack: "Volver a matrícula/VIN", login: "Entrar", subtitle: "Buscar piezas", homeLabel: "Iniciar una nueva solicitud", find: "Buscar", change: "Cambiar", labelPart: "¿Qué pieza necesitas?", placeholderPart: "Escribe el nombre de la pieza o el número OEM...", partFieldLabel: "Nombre o referencia", voiceBtn: "Búsqueda por voz", photoBtn: "Búsqueda por foto", partEnglishOnly: "Escribe el nombre de la pieza en inglés o usa la búsqueda por voz o por foto.", partPickFromList: "⚠️ Elige una pieza de la lista TecDoc antes de enviar.", attachPhoto: "Añadir foto", addPart: "Añadir otra pieza", removePart: "Eliminar", sendRfq: "Enviar solicitud a proveedores", searching: "Buscando vehículo…", sendTo: "Enviar solicitud a", dismantlers: "Desmontistas", motorfactors: "Tiendas de repuestos", dealers: "Concesionarios", requestOptions: "Opciones de la solicitud", optionWarranty: "Garantía", optionDelivery: "Envío", optionVat: "Factura", optionUrgent: "Urgente", optionNameWarranty: "Garantía de devolución", optionNameDelivery: "Solo entrega", optionNameVat: "Factura con IVA", optionNameUrgent: "Urgente (24 h)", optionInfoWarranty: "Obliga al vendedor a indicar sus condiciones de devolución al responder. Los proveedores que no acepten esta condición no podrán enviarte una oferta.", optionInfoDelivery: "Obliga a los proveedores a incluir el envío por mensajería, lo que descarta los anuncios disponibles solo para recogida.", optionInfoVat: "Marca la solicitud como prioritaria para que puedas recibir una factura de IVA en regla. Disponible en cuentas PRO. Consulta los Terms & Conditions.", optionInfoUrgent: "Fija la solicitud arriba en los flujos de los proveedores con una marca de prioridad, para obtener la respuesta más rápida posible — en un plazo de 24 horas. Disponible en cuentas PRO. Consulta los Terms & Conditions.", optionsPlatformNote: "🔒 Allparts.ie es una plataforma de información que pone en contacto a ambas partes. Los vendedores asumen la responsabilidad de la garantía, el IVA y el envío que ofrecen, conforme al derecho irlandés y de la UE.", auto: "Automático", placeSuggestionsLabel: "Sugerencias de ubicación", privacyNote: "🔒 Tu ubicación ayuda a encontrar proveedores. Los cercanos ven primero la solicitud. Tu dirección exacta nunca se comparte.", authTitle: "Recibe ofertas", authSubtitle: "Verifica tu teléfono para enviar la solicitud y recibir respuestas.", authPhone: "Móvil irlandés", authEmail: "Email para ofertas y novedades", authContinue: "Continuar con teléfono", otpLabel: "Introduce el código SMS de 4 dígitos", demoCode: "Código del prototipo: 1234", verifySend: "Verificar y enviar", upgradeTitle: "Actualizar a PRO", upgradeSubtitle: "Más piezas por solicitud.", activatePro: "Activar PRO gratis", inboxTitle: "Tus solicitudes", inboxSubtitle: "Las ofertas aparecen aquí en tiempo real.", toastSupplier: "Deja seleccionado al menos un proveedor.", toastPhone: "Introduce un móvil irlandés válido de 9 dígitos.", toastOtp: "Introduce el código de 4 dígitos.", toastInvalidOtp: "Usa el código del prototipo 1234.", sendToInfoLabel: "Lo que recibe cada categoría", optionsInfoLabel: "Qué hace cada opción" },
    pl: { altManual: "Lub wybrać markę i model", altBack: "Powrót do numeru rejestracyjnego/VIN", login: "Zaloguj się", subtitle: "Znajdź czĘści", homeLabel: "Rozpocznij nowe zapytanie", find: "Szukaj", change: "Zmień", labelPart: "Jakiej części potrzebujesz?", placeholderPart: "Wpisz nazwę części lub numer OEM...", partFieldLabel: "Nazwa cz̤ści lub numer", voiceBtn: "Wyszukiwanie głosowe", photoBtn: "Wyszukiwanie zdjęciem", partEnglishOnly: "Wpisz nazwę części po angielsku lub skorzystaj z wyszukiwania głosowego albo zdjęciem.", partPickFromList: "⚠️ Przed wysłaniem wybierz część z listy TecDoc.", attachPhoto: "Dodaj zdjęcie", addPart: "Dodaj kolejną część", removePart: "Usuń", sendRfq: "Wyślij zapytanie do dostawców", searching: "Szukanie samochodu…", sendTo: "Wyślij zapytanie do", dismantlers: "Złomowiska", motorfactors: "Sklepy części", dealers: "Dealerzy", requestOptions: "Opcje zapytania", optionWarranty: "Gwarancja", optionDelivery: "Dostawa", optionVat: "Faktura", optionUrgent: "Pilne", optionNameWarranty: "Gwarancja zwrotu", optionNameDelivery: "Tylko dostawa", optionNameVat: "Faktura z VAT", optionNameUrgent: "Pilne (24 h)", optionInfoWarranty: "Wymaga, aby sprzedawca podał w odpowiedzi warunki zwrotu. Dostawcy, którzy nie akceptują tego warunku, nie mogą wysłać Ci oferty.", optionInfoDelivery: "Wymaga uwzględnienia przez dostawców dostawy kurierskiej, co wyklucza oferty dostępne wyłącznie do odbioru osobistego.", optionInfoVat: "Oznacza zapytanie jako pilne, abyś mógł otrzymać prawidłowo wystawioną fakturę z VAT. Dostępne dla kont PRO. Szczegóły w Terms & Conditions.", optionInfoUrgent: "Przypina zapytanie na początku kanałów dostawców z oznaczeniem pilności, aby uzyskać najszybszą możliwą odpowiedź — w ciągu 24 godzin. Dostępne dla kont PRO. Szczegóły w Terms & Conditions.", optionsPlatformNote: "🔒 Allparts.ie to platforma informacyjna, która łączy obie strony. Sprzedawcy ponoszą odpowiedzialność za gwarancję, VAT i dostawę, które oferują, zgodnie z prawem irlandzkim i unijnym.", auto: "Auto", placeSuggestionsLabel: "Sugestie lokalizacji", privacyNote: "🔒 Twoja lokalizacja pomaga znaleźć odpowiednich dostawców. Najbliżsi widzą zapytanie pierwsze. Dokładny adres nie jest udostępniany.", authTitle: "Otrzymaj oferty", authSubtitle: "Zweryfikuj telefon, aby wysłać zapytanie i otrzymywać odpowiedzi.", authPhone: "Irlandijski numer telefonu", authEmail: "E-mail na oferty i aktualizacje", authContinue: "Kontynuuj telefonem", otpLabel: "Wpisz 4-cyfrowy kod SMS", demoCode: "Kod prototypu: 1234", verifySend: "Zweryfikuj i wyślij", upgradeTitle: "Przejdź na PRO", upgradeSubtitle: "Więcej części w jednym zapytaniu.", activatePro: "Aktywuj PRO za darmo", inboxTitle: "Twoje zapytania", inboxSubtitle: "Oferty pojawiają się tutaj w czasie rzeczywistym.", toastSupplier: "Zostaw wybranego co najmniej jednego dostawcę.", toastPhone: "Wpisz prawidłowy 9-cyfrowy numer irlandijski.", toastOtp: "Wpisz 4-cyfrowy kod.", toastInvalidOtp: "Użyj kodu prototypu 1234.", sendToInfoLabel: "Co otrzymuje każda kategoria", optionsInfoLabel: "Co robi każda opcja" },
    fr: { altManual: "Ou sélectionner par marque et modèle", altBack: "Retour à l'immatriculation/VIN", login: "Connexion", subtitle: "Trouver des pièces", homeLabel: "Démarrer une nouvelle demande", find: "Rechercher", change: "Modifier", labelPart: "Quelle pièce recherchez-vous ?", placeholderPart: "Saisissez le nom de la pièce ou le numéro OEM...", partFieldLabel: "Nom de la pièce ou référence", voiceBtn: "Recherche vocale", photoBtn: "Recherche par photo", partEnglishOnly: "Saisissez le nom de la pièce en anglais, ou utilisez la recherche vocale ou par photo.", partPickFromList: "⚠️ Choisissez une pièce dans la liste TecDoc avant d'envoyer.", attachPhoto: "Ajouter une photo", addPart: "Ajouter une autre pièce", removePart: "Supprimer", sendRfq: "Envoyer la demande aux fournisseurs", searching: "Recherche du véhicule…", sendTo: "Envoyer à", dismantlers: "Casse automobile", motorfactors: "Magasins de pièces", dealers: "Concessionnaires", requestOptions: "Options de la demande", optionWarranty: "Garantie", optionDelivery: "Livraison", optionVat: "Facture", optionUrgent: "Express", optionNameWarranty: "Garantie de retour", optionNameDelivery: "Livraison uniquement", optionNameVat: "Facture TVA", optionNameUrgent: "Urgent (24 h)", optionInfoWarranty: "Oblige le vendeur à indiquer ses conditions de retour dans sa réponse. Les fournisseurs qui n'acceptent pas cette condition ne peuvent pas vous envoyer d'offre.", optionInfoDelivery: "Oblige les fournisseurs à proposer une livraison par courier, ce qui écarte les annonces disponibles uniquement en retrait.", optionInfoVat: "Signale la demande comme prioritaire afin que vous puissiez recevoir une facture de TVA en bonne et due forme. Disponible sur les comptes PRO. Voir les Terms & Conditions.", optionInfoUrgent: "Épingle la demande en haut des flux des fournisseurs avec une marque de priorité, pour obtenir la réponse la plus rapide possible — sous 24 heures. Disponible sur les comptes PRO. Voir les Terms & Conditions.", optionsPlatformNote: "🔒 Allparts.ie est une plateforme d'information qui met les deux parties en relation. Les vendeurs assument la responsabilité de la garantie, de la TVA et de la livraison qu'ils proposent, conformément au droit irlandais et au droit de l'UE.", auto: "Auto", placeSuggestionsLabel: "Suggestions de localisation", privacyNote: "🔒 Votre localisation aide à trouver les bons fournisseurs. Les plus proches voient la demande en premier. Votre adresse exacte n'est jamais partagée.", authTitle: "Recevoir des devis", authSubtitle: "Vérifiez votre téléphone pour envoyer la demande et recevoir les réponses.", authPhone: "Numéro mobile irlandais", authEmail: "E-mail pour les devis et notifications", authContinue: "Continuer avec le téléphone", otpLabel: "Saisissez le code SMS à 4 chiffres", demoCode: "Code du prototype : 1234", verifySend: "Vérifier et envoyer", upgradeTitle: "Passer à PRO", upgradeSubtitle: "Plus de pièces par demande.", activatePro: "Essayer PRO gratuitement", inboxTitle: "Vos demandes", inboxSubtitle: "Les devis apparaissent ici en temps réel.", toastSupplier: "Laissez au moins un fournisseur sélectionné.", toastPhone: "Saisissez un numéro irlandais valide à 9 chiffres.", toastOtp: "Saisissez le code à 4 chiffres.", toastInvalidOtp: "Utilisez le code du prototype 1234.", sendToInfoLabel: "Ce que reçoit chaque catégorie", optionsInfoLabel: "Ce que fait chaque option" },
    ro: { altManual: "Sau selectați după marcă și model", altBack: "Înapoi la număr de înmatrare/VIN", login: "Conectare", subtitle: "Găsește piese", homeLabel: "Începe o cerere nouă", find: "Caută", change: "Schimbă", labelPart: "Ce piesă ai nevoie?", placeholderPart: "Scrieți numele piesei sau codul OEM...", partFieldLabel: "Denumirea piesei sau codul", voiceBtn: "Căutare vocală", photoBtn: "Căutare după fotografie", partEnglishOnly: "Scrieți denumirea piesei în engleză sau folosiți căutarea vocală ori după fotografie.", partPickFromList: "⚠️ Alegeți o piesă din lista TecDoc înainte de a trimite.", attachPhoto: "Adaugă fotografie", addPart: "Adaugă altă piesă", removePart: "Șterge", sendRfq: "Trimite cererea furnizorilor", searching: "Se caută vehiculul…", sendTo: "Trimite către", dismantlers: "Centre de dezmembrări", motorfactors: "Magazine de piese", dealers: "Dealeri", requestOptions: "Opțiuni cerere", optionWarranty: "Garanție", optionDelivery: "Livrare", optionVat: "Factură", optionUrgent: "Urgent", optionNameWarranty: "Garanție de retur", optionNameDelivery: "Doar livrare", optionNameVat: "Factură cu TVA", optionNameUrgent: "Urgent (24 h)", optionInfoWarranty: "Obligă vânzătorul să precizeze condițiile de retur în răspuns. Furnizorii care nu acceptă această condiție nu vă pot trimite o ofertă.", optionInfoDelivery: "Obligă furnizorii să includă livrarea prin curier, ceea ce exclude anunțurile disponibile doar pentru ridicare de la punctul de livrare.", optionInfoVat: "Marchează cererea ca prioritară, pentru a putea primi o factură fiscală corectă. Disponibil pentru conturile PRO. Detalii în Terms & Conditions.", optionInfoUrgent: "Fixează cererea în vârful fluxurilor furnizorilor, cu marcaj de prioritate, pentru cel mai rapid răspuns posibil — în 24 de ore. Disponibil pentru conturile PRO. Detalii în Terms & Conditions.", optionsPlatformNote: "🔒 Allparts.ie este o platformă de informare care pune în legătură cele două părți. Vânzătorii își asumă responsabilitatea pentru garanția, facturarea și livrările pe care le anunță, conform legislației irlandeze și a Uniunii Europene.", auto: "Auto", placeSuggestionsLabel: "Sugestii de locație", privacyNote: "🔒 Locația vă ajută să găsiți furnizorii potriviți. Furnizorii apropiați văd cererea primii. Adresa exactă nu este partajată.", authTitle: "Primiți oferte", authSubtitle: "Verificați telefonul pentru a trimite cererea și a primi răspunsuri.", authPhone: "Număr mobil irlandez", authEmail: "E-mail pentru oferte și actualizări", authContinue: "Continuă cu telefonul", otpLabel: "Introdu codul SMS de 4 cifre", demoCode: "Cod prototip: 1234", verifySend: "Verifică și trimite", upgradeTitle: "Trece la PRO", upgradeSubtitle: "Mai multe piese într-o cerere.", activatePro: "Activeăză PRO gratuit", inboxTitle: "Cererile tale", inboxSubtitle: "Ofertele apar aici în timp real.", toastSupplier: "Lasă cel puțin un furnizor selectat.", toastPhone: "Introdu un număr irlandez valid de 9 cifre.", toastOtp: "Introdu codul de 4 cifre.", toastInvalidOtp: "Folosește codul prototipului 1234.", sendToInfoLabel: "Ce primește fiecare categorie", optionsInfoLabel: "Ce face fiecare opțiune" }
};
Object.keys(additionalTranslations).forEach(language => {
    translations[language] = { ...translations.en, ...additionalTranslations[language] };
});

// The four progressive steps of the manual vehicle picker and the button that
// ends them. In its own pack because these are prompts, not prose: each one is
// both the visible label in the field and its accessible name, so they are short
// on purpose and they are read side by side rather than buried in the main pack.
const manualSelectTranslations = {
    en: { msMake: "Select Make", msModel: "Select Model", msYear: "Select Year", msType: "Select Modification / Engine", msSubmit: "Select Vehicle", msNoMatch: "No match" },
    ru: { msMake: "Выберите марку", msModel: "Выберите модель", msYear: "Выберите год", msType: "Выберите модификацию и двигатель", msSubmit: "Выбрать автомобиль", msNoMatch: "Ничего не найдено" },
    zh: { msMake: "选择品牌", msModel: "选择车型", msYear: "选择年份", msType: "选择配置和发动机", msSubmit: "选择车辆", msNoMatch: "无匹配结果" },
    it: { msMake: "Seleziona marca", msModel: "Seleziona modello", msYear: "Seleziona anno", msType: "Seleziona allestimento / motore", msSubmit: "Seleziona veicolo", msNoMatch: "Nessun risultato" },
    de: { msMake: "Marke auswählen", msModel: "Modell auswählen", msYear: "Jahr auswählen", msType: "Variante / Motor wählen", msSubmit: "Fahrzeug auswählen", msNoMatch: "Keine Treffer" },
    lt: { msMake: "Pasirinkite markę", msModel: "Pasirinkite modelį", msYear: "Pasirinkite metus", msType: "Pasirinkite modifikaciją / variklį", msSubmit: "Pasirinkite automobilį", msNoMatch: "Nėra atitikimų" },
    pt: { msMake: "Selecionar marca", msModel: "Selecionar modelo", msYear: "Selecionar ano", msType: "Selecionar versão / motor", msSubmit: "Selecionar veículo", msNoMatch: "Sem resultados" },
    es: { msMake: "Selecciona la marca", msModel: "Selecciona el modelo", msYear: "Selecciona el año", msType: "Selecciona la versión / motor", msSubmit: "Seleccionar vehículo", msNoMatch: "Sin resultados" },
    pl: { msMake: "Wybierz markę", msModel: "Wybierz model", msYear: "Wybierz rok", msType: "Wybierz wersję i silnik", msSubmit: "Wybierz pojazd", msNoMatch: "Brak wyników" },
    fr: { msMake: "Sélectionnez la marque", msModel: "Sélectionnez le modèle", msYear: "Sélectionnez l'année", msType: "Sélectionnez la version / moteur", msSubmit: "Sélectionner le véhicule", msNoMatch: "Aucun résultat" },
    ro: { msMake: "Selectați marca", msModel: "Selectați modelul", msYear: "Selectați anul", msType: "Selectați versiunea / motorul", msSubmit: "Selectați vehiculul", msNoMatch: "Niciun rezultat" }
};
Object.keys(manualSelectTranslations).forEach(language => {
    translations[language] = { ...translations[language], ...manualSelectTranslations[language] };
});

/* The note row: the translate button's own label, the three things the row
   can say instead of it (working, done, failed), the hint shown while the
   button is disabled, and the microphone. It is its own pack because the
   button and the microphone were the only controls in the file still
   showing English in nine languages -- the compact packs inherit the whole
   en pack (see the merge above), and neither pack overrides translateBtn
   or transDone, so a German, French, Spanish, Italian, Portuguese, Polish,
   Romanian, Lithuanian or Chinese buyer read "Translate to English (AI)"
   and the same EN-translated status. The microphone was worse: its title was a literal
   English string in the markup, in all eleven languages including Russian.
   transFail is deliberately a sentence and not a word: the one thing the
   buyer must not do after a failed translation is assume their note was
   lost, so the message says the note is still there. */
const noteToolTranslations = {
    en: { translateBtn: "Translate to English (AI)", transWorking: "Translating…", transDone: "✨ EN Translated", transAlready: "Already in English", transFail: "Could not translate — your note is unchanged", transEmpty: "Type a note first", micTitle: "Voice input for note", micListening: "Listening…", transFailVoice: "Kept as you spoke it — not translated to English" },
    ru: { translateBtn: "Перевести на английский (ИИ)", transWorking: "Переводим…", transDone: "✨ EN Translated", transAlready: "Уже на английском", transFail: "Не удалось перевести — заметка не изменена", transEmpty: "Сначала введите заметку", micTitle: "Голосовой ввод заметки", micListening: "Слушаем…", transFailVoice: "Оставлено как продиктовано — без перевода на английский" },
    zh: { translateBtn: "翻译成英语（AI）", transWorking: "翻译中…", transDone: "✨ EN Translated", transAlready: "已是英文", transFail: "无法翻译 — 备注未更改", transEmpty: "请先输入备注", micTitle: "语音输入备注", micListening: "正在聆听…", transFailVoice: "已按口述保留 — 未翻译成英文" },
    it: { translateBtn: "Traduci in inglese (IA)", transWorking: "Traduzione…", transDone: "✨ EN Translated", transAlready: "Già in inglese", transFail: "Traduzione non riuscita — la nota non è cambiata", transEmpty: "Scrivi prima una nota", micTitle: "Dettatura per la nota", micListening: "In ascolto…", transFailVoice: "Lasciato come dettato — non tradotto in inglese" },
    de: { translateBtn: "Ins Englische übersetzen (KI)", transWorking: "Wird übersetzt…", transDone: "✨ EN Translated", transAlready: "Schon auf Englisch", transFail: "Übersetzung nicht möglich — die Notiz bleibt unverändert", transEmpty: "Zuerst eine Notiz eingeben", micTitle: "Spracheingabe für die Notiz", micListening: "Ich höre zu…", transFailVoice: "So belassen, wie gesprochen — nicht ins Englische übersetzt" },
    lt: { translateBtn: "Versti į anglų (DI)", transWorking: "Verkiama…", transDone: "✨ EN Translated", transAlready: "Jau anglų kalba", transFail: "Nepavyko išversti — pastra nepakitusi", transEmpty: "Pirmiausia įrašykite pastrą", micTitle: "Balso įvestis į pastrą", micListening: "Klausomasi…", transFailVoice: "Palikta taip, kaip pasakyta — nepatversta į anglų" },
    pt: { translateBtn: "Traduzir para inglês (IA)", transWorking: "A traduzir…", transDone: "✨ EN Translated", transAlready: "Já está em inglês", transFail: "Não foi possível traduzir — a nota não foi alterada", transEmpty: "Escreva primeiro uma nota", micTitle: "Entrada de voz na nota", micListening: "A ouvir…", transFailVoice: "Mantido como foi dito — não traduzido para inglês" },
    es: { translateBtn: "Traducir al inglés (IA)", transWorking: "Traduciendo…", transDone: "✨ EN Translated", transAlready: "Ya está en inglés", transFail: "No se pudo traducir: la nota sigue igual", transEmpty: "Escribe primero una nota", micTitle: "Entrada de voz en la nota", micListening: "Escuchando…", transFailVoice: "Se mantiene tal como se dictó — sin traducir al inglés" },
    pl: { translateBtn: "Przetłumacz na angielski (AI)", transWorking: "Tłumaczenie…", transDone: "✨ EN Translated", transAlready: "Już po angielsku", transFail: "Nie udało się przetłumaczyć — notatka bez zmian", transEmpty: "Najpierw wpisz notatkę", micTitle: "Dyktowanie notatki", micListening: "Słucham…", transFailVoice: "Zachowano dokładnie tak, jak powiedziane — bez tłumaczenia" },
    fr: { translateBtn: "Traduire en anglais (IA)", transWorking: "Traduction…", transDone: "✨ EN Translated", transAlready: "Déjà en anglais", transFail: "Traduction impossible — la note est inchangée", transEmpty: "Saisissez d'abord une note", micTitle: "Saisie vocale pour la note", micListening: "J'écoute…", transFailVoice: "Conservé tel que dit — non traduit en anglais" },
    ro: { translateBtn: "Traduce în engleză (IA)", transWorking: "Se traduce…", transDone: "✨ EN Translated", transAlready: "Deja este în engleză", transFail: "Traducerea nu a reușit — nota rămâne neschimbată", transEmpty: "Scrie mai întâi o notă", micTitle: "Intrare vocală pentru notă", micListening: "Ascult…", transFailVoice: "Păstrat exact cum a fost spus — netradus în engleză" }
};
Object.keys(noteToolTranslations).forEach(language => {
    translations[language] = { ...translations[language], ...noteToolTranslations[language] };
});

/* The photo editor's own copy, for the same reason as the pack above: the
   thumbnail's remove button carried a hardcoded English title in the template
   string, and the editor is new surface that would otherwise be the only part
   of the file still speaking English in nine languages. photoOpen is the
   thumbnail's accessible name once the cross is gone -- a 64px photo with no
   name is not something a screen reader can offer as a control, and "Edit
   photo" is what tapping it actually does. photoCropFrame is the name of
   the frame toggle, and it stays a noun in all eleven languages: a toggle
   is announced as its own name plus its pressed state, so a verb here
   would promise an action the button does not perform. photoRotateRight
   names a direction rather than just saying "rotate", because a buyer who
   taps it three times and the picture is still the wrong way up has learned
   nothing from the word "rotate" alone. photoApply reads as a confirmation
   now rather than as an action, and it is translated like everything else
   here: an English "Ok" over a Lithuanian dialog is the exact defect this
   pack was added to remove. */
const photoEditTranslations = {
    en: { photoOpen: "Edit photo", photoEditTitle: "Edit photo", photoCropFrame: "Crop frame", photoCropHint: "Drag the frame to choose what to keep", photoRotateRight: "Rotate right", photoApply: "OK", photoDelete: "Delete photo", removePhoto: "Remove photo", removeVideo: "Remove video", close: "Close", photoLoadFail: "That photo could not be opened" },
    ru: { photoOpen: "Изменить фото", photoEditTitle: "Изменение фото", photoCropFrame: "Рамка кадра", photoCropHint: "Двигайте рамку, чтобы выбрать, что оставить", photoRotateRight: "Повернуть вправо", photoApply: "OK", photoDelete: "Удалить фото", removePhoto: "Удалить фото", removeVideo: "Удалить видео", close: "Закрыть", photoLoadFail: "Не удалось открыть это фото" },
    zh: { photoOpen: "编辑照片", photoEditTitle: "编辑照片", photoCropFrame: "裁剪框", photoCropHint: "拖动边框选择要保留的部分", photoRotateRight: "向右旋转", photoApply: "OK", photoDelete: "删除照片", removePhoto: "删除照片", removeVideo: "删除视频", close: "关闭", photoLoadFail: "无法打开这张照片" },
    it: { photoOpen: "Modifica foto", photoEditTitle: "Modifica foto", photoCropFrame: "Riquadro di ritaglio", photoCropHint: "Trascina la cornice per scegliere cosa tenere", photoRotateRight: "Ruota a destra", photoApply: "OK", photoDelete: "Elimina foto", removePhoto: "Rimuovi foto", removeVideo: "Rimuovi video", close: "Chiudi", photoLoadFail: "Impossibile aprire la foto" },
    de: { photoOpen: "Foto bearbeiten", photoEditTitle: "Foto bearbeiten", photoCropFrame: "Zuschneiderahmen", photoCropHint: "Ziehen Sie den Rahmen, um auszuwählen, was bleibt", photoRotateRight: "Nach rechts drehen", photoApply: "OK", photoDelete: "Foto löschen", removePhoto: "Foto entfernen", removeVideo: "Video entfernen", close: "Schließen", photoLoadFail: "Dieses Foto konnte nicht geöffnet werden" },
    lt: { photoOpen: "Redaguoti nuotrauką", photoEditTitle: "Nuotraukos redagavimas", photoCropFrame: "Kadro rėmelis", photoCropHint: "Traukite rėmelį, kad pasirinktumėte, kas liks", photoRotateRight: "Pasukti į dešinę", photoApply: "OK", photoDelete: "Ištrinti nuotrauką", removePhoto: "Pašalinti nuotrauką", removeVideo: "Pašalinti vaizdą", close: "Uždaryti", photoLoadFail: "Nepavyko atverti šios nuotraukos" },
    pt: { photoOpen: "Editar foto", photoEditTitle: "Editar foto", photoCropFrame: "Moldura de recorte", photoCropHint: "Arraste a moldura para escolher o que manter", photoRotateRight: "Rodar para a direita", photoApply: "OK", photoDelete: "Eliminar foto", removePhoto: "Remover foto", removeVideo: "Remover vídeo", close: "Fechar", photoLoadFail: "Não foi possível abrir essa foto" },
    es: { photoOpen: "Editar foto", photoEditTitle: "Editar foto", photoCropFrame: "Marco de recorte", photoCropHint: "Arrastra el marco para elegir qué conservar", photoRotateRight: "Girar a la derecha", photoApply: "OK", photoDelete: "Eliminar foto", removePhoto: "Quitar foto", removeVideo: "Quitar vídeo", close: "Cerrar", photoLoadFail: "No se pudo abrir esa foto" },
    pl: { photoOpen: "Edytuj zdjęcie", photoEditTitle: "Edycja zdjęcia", photoCropFrame: "Ramka kadrowania", photoCropHint: "Przeciągnij ramkę, aby wybrać, co zostawić", photoRotateRight: "Obróć w prawo", photoApply: "OK", photoDelete: "Usuń zdjęcie", removePhoto: "Usuń zdjęcie", removeVideo: "Usuń wideo", close: "Zamknij", photoLoadFail: "Nie udało się otworzyć tego zdjęcia" },
    fr: { photoOpen: "Modifier la photo", photoEditTitle: "Modifier la photo", photoCropFrame: "Cadre de recadrage", photoCropHint: "Faites glisser le cadre pour choisir ce que vous gardez", photoRotateRight: "Tourner à droite", photoApply: "OK", photoDelete: "Supprimer la photo", removePhoto: "Retirer la photo", removeVideo: "Retirer la vidéo", close: "Fermer", photoLoadFail: "Impossible d’ouvrir cette photo" },
    ro: { photoOpen: "Editează fotografia", photoEditTitle: "Editarea fotografiei", photoCropFrame: "Cadru de decupare", photoCropHint: "Trage cadrul pentru a alege ce păstrezi", photoRotateRight: "Rotește la dreapta", photoApply: "OK", photoDelete: "Șterge fotografia", removePhoto: "Elimină fotografia", removeVideo: "Elimină videoclipul", close: "Închide", photoLoadFail: "Fotografia nu a putut fi deschisă" },
};
Object.keys(photoEditTranslations).forEach(language => {
    translations[language] = { ...translations[language], ...photoEditTranslations[language] };
});

// The prompt in the VIN field. A list of the two forms it takes: not a sample
// and not an instruction; see the comment on the input itself.
// Length is a hard constraint, not a style choice. At a 320px screen the
// field leaves 111px once the slot, the two 16px insets, the frame and the
// magnifier are taken off, and the prompt may never go below the 12px floor,
// so a prompt over 111px does not fit at any size. Measured in the
// placeholder's own font at 320px, these run 62-95px, German the longest at
// 95px with 16px to spare -- German is "VIN / Fahrgestell" because
// "Fahrgestellnummer" by itself is 142px. Two rejected alternatives, same
// measurement: keeping a verb fits three of the eleven (German, 164px), and
// keeping the noun whole but swapping the verb's "or" for the slash fits four
// (Spanish, 144px). Hence the bare noun in every language and one slash
// character that needs no translating, which also means the prompt reads the
// same in all eleven.
//
// vinFieldLabel is the accessible name. It is where the 9-to-17 range is
// written down -- the prompt has to stay short enough to fit 320px, and a
// range is what a screen reader user needs to hear before typing -- and where
// the instruction went when the prompt stopped saying "enter".
// errVin moved here from the base pack: it used to exist in English and
// Russian only, so the other nine languages showed an English sentence in the
// one message a mistyped number produces. One pack, eleven languages.
const vinFieldTranslations = {
    en: { vinPlaceholder: "VIN / Chassis", vinFieldLabel: "VIN or chassis number, 9 to 17 characters", errVin: "VIN or chassis number must be 9 to 17 characters." },
    ru: { vinPlaceholder: "VIN / кузов", vinFieldLabel: "VIN или номер кузова, от 9 до 17 символов", errVin: "VIN или номер кузова: от 9 до 17 символов." },
    zh: { vinPlaceholder: "VIN / 车架号", vinFieldLabel: "VIN 或车架号，9 至 17 个字符", errVin: "VIN 或车架号须为 9 至 17 个字符。" },
    it: { vinPlaceholder: "VIN / telaio", vinFieldLabel: "VIN o numero di telaio, da 9 a 17 caratteri", errVin: "Il VIN o il numero di telaio deve avere da 9 a 17 caratteri." },
    de: { vinPlaceholder: "VIN / Fahrgestell", vinFieldLabel: "VIN oder Fahrgestellnummer, 9 bis 17 Zeichen", errVin: "VIN oder Fahrgestellnummer muss 9 bis 17 Zeichen haben." },
    lt: { vinPlaceholder: "VIN / kėsos nr.", vinFieldLabel: "VIN arba kėsos numeris, nuo 9 iki 17 simbolių", errVin: "VIN arba kėsos numeris turi būti nuo 9 iki 17 simbolių." },
    pt: { vinPlaceholder: "VIN / chassis", vinFieldLabel: "VIN ou número de chassis, 9 a 17 caracteres", errVin: "O VIN ou número de chassis deve ter entre 9 e 17 caracteres." },
    es: { vinPlaceholder: "VIN / bastidor", vinFieldLabel: "VIN o número de bastidor, de 9 a 17 caracteres", errVin: "El VIN o número de bastidor debe tener entre 9 y 17 caracteres." },
    pl: { vinPlaceholder: "VIN / nadwozie", vinFieldLabel: "VIN lub numer nadwozia, od 9 do 17 znaków", errVin: "Numer VIN lub nadwozia musi mieć od 9 do 17 znaków." },
    fr: { vinPlaceholder: "VIN / châssis", vinFieldLabel: "VIN ou numéro de châssis, de 9 à 17 caractères", errVin: "Le VIN ou le numéro de châssis doit comporter de 9 à 17 caractères." },
    ro: { vinPlaceholder: "VIN / șasiu", vinFieldLabel: "VIN sau număr de șasiu, de la 9 la 17 caractere", errVin: "VIN-ul sau numărul de șasiu trebuie să aibă între 9 și 17 caractere." }
};
Object.keys(vinFieldTranslations).forEach(language => {
    translations[language] = { ...translations[language], ...vinFieldTranslations[language] };
});

// The registration field's own pack, for the same reason as the VIN one, plus
// the live-format hint shown when a character cannot continue any supported plate.
// regFieldLabel is the accessible name, and it is the only place the three
// countries are named. The prompt is stuck on the Irish sample because it has
// to fit 111px at 320px, and a buyer whose car came from Belfast or Manchester
// needs to hear before typing that this box will take their number too --
// otherwise the Irish sample is read as the only thing this field accepts,
// which is exactly what the old one-line name said.
// Nothing about the shapes is written here: four sets of numbers and a length
// range would be read out before every keystroke of every search, and the
// error message is the right place for what is wrong with a particular number.
// errReg moved here for the reason errVin did: it existed in English and
// Russian only, so nine languages showed an English sentence in the one
// message a mistyped number produces.
const regFieldTranslations = {
    en: { regFieldLabel: "Registration number, Irish, Northern Irish or British", errReg: "Invalid number format", platePrefixRejected: "That character can't continue a supported plate format.", jpChassisFieldLabel: "Japanese chassis or frame number" },
    ru: { regFieldLabel: "Регистрационный номер: Ирландия, Северная Ирландия или Великобритания", errReg: "Неверный формат номера", platePrefixRejected: "Этот символ не подходит для поддерживаемого формата номера.", jpChassisFieldLabel: "Номер кузова или шасси японского автомобиля" },
    zh: { regFieldLabel: "车牌号码：爱尔兰、北爱尔兰或英国", errReg: "号码格式错误", platePrefixRejected: "此字符不符合受支持的车牌格式。", jpChassisFieldLabel: "日本车辆车身或底盘编号" },
    it: { regFieldLabel: "Numero di immatricolazione: irlandese, dell'Irlanda del Nord o britannico", errReg: "Formato del numero non valido", platePrefixRejected: "Questo carattere non è compatibile con i formati di targa supportati.", jpChassisFieldLabel: "Numero di telaio di un veicolo giapponese" },
    de: { regFieldLabel: "Kennzeichen: irisch, nordirisch oder britisch", errReg: "Ungültiges Nummernformat", platePrefixRejected: "Dieses Zeichen passt zu keinem unterstützten Kennzeichenformat.", jpChassisFieldLabel: "Japanische Fahrgestell- oder Rahmennummer" },
    lt: { regFieldLabel: "Registracijos numeris: airiškas, Šiaurės Airijos arba britas", errReg: "Neteisingas numerio formatas", platePrefixRejected: "Šis simbolis netinka palaikomam valstybinio numerio formatui.", jpChassisFieldLabel: "Japoniško automobilio kėbulo arba važiuoklės numeris" },
    pt: { regFieldLabel: "Matrícula: irlandesa, da Irlanda do Norte ou britânica", errReg: "Formato de matrícula inválido", platePrefixRejected: "Este caractere não corresponde a um formato de matrícula suportado.", jpChassisFieldLabel: "Número do chassis de um veículo japonês" },
    es: { regFieldLabel: "Matrícula: irlandesa, de Irlanda del Norte o británica", errReg: "Formato de matrícula no válido", platePrefixRejected: "Este carácter no encaja con un formato de matrícula admitido.", jpChassisFieldLabel: "Número de chasis de un vehículo japonés" },
    pl: { regFieldLabel: "Numer rejestracyjny: irlandzki, z Irlandii Północnej lub brytyjski", errReg: "Nieprawidłowy format numeru", platePrefixRejected: "Ten znak nie pasuje do obsługiwanego formatu numeru rejestracyjnego.", jpChassisFieldLabel: "Numer nadwozia lub podwozia pojazdu japońskiego" },
    fr: { regFieldLabel: "Numéro d'immatriculation : irlandais, d'Irlande du Nord ou britannique", errReg: "Format de numéro invalide", platePrefixRejected: "Ce caractère ne correspond à aucun format d’immatriculation pris en charge.", jpChassisFieldLabel: "Numéro de châssis d’un véhicule japonais" },
    ro: { regFieldLabel: "Număr de înregistrare: irlandez, din Irlanda de Nord sau britanic", errReg: "Format de număr invalid", platePrefixRejected: "Acest caracter nu se potrivește unui format de număr acceptat.", jpChassisFieldLabel: "Numărul de șasiu al unui vehicul japonez" }
};
Object.keys(regFieldTranslations).forEach(language => {
    translations[language] = { ...translations[language], ...regFieldTranslations[language] };
});

// Account / cabinet wording. Kept in its own pack because these strings only
// exist in the cabinet; `views` and `replies` hold one/few/many forms.
const cabinetTranslations = {
    en: {
        account: "Account", accountGreeting: "Hi, {name}", accountGreetingAnon: "Your account",
        tabAccount: "Account", tabRequests: "Requests", tabMyRequests: "My Requests", tabReplies: "Replies", tabSaved: "Saved",
        croNumber: "CRO Number", emailLabel: "Email", languageLabel: "Language",
        emailInvalidFormat: "Invalid email address format.",
        emailChecking: "Checking...",
        emailDisposable: "Sign-up with disposable email addresses is not allowed.",
        emailDomainNotFound: "That email domain does not exist.",
        phoneInvalidFormat: "Invalid Irish mobile number format (10 digits required).",
        passwordRuleHint: "Minimum 10 characters, capital letter, lowercase letter, digit, special symbol",

        /* --- wizard step 3: registration, one place for all nineteen strings ---

           NINETEEN KEYS IN FIVE GROUPS, and the grouping is the point: this wave
           added the tabs, the sub-role heading, the country of the phone field,
           the @-domains, the password lock, the mandatory T&C checkbox and the
           country-shaped phone error, and every one of those groups would have
           been a second block of its own further down the file. One block means
           one reader can check the whole step without hunting.

           THE COUNTRY TABLE LIVES IN THE PROTOTYPE, NOT HERE. COUNTRY_CONFIG holds
           the flags, the dial codes, the number shape and the mail domains, and
           this pack holds only the two NAMES the list prints. A third country
           therefore costs two strings here and one entry there -- which is the
           whole point of the config, and would be exactly one thing per country
           to edit if the flags were translated here too. They are emoji, and an
           emoji is the same in all eleven languages, so translating it would be
           inventing eleven ways to spell the same picture.

           THE T&C SENTENCE IS FIVE KEYS, NOT ONE, and that is not tidiness. Word
           order inside the sentence differs in every language, and the two links
           inside it have to stay buttons -- getText() writes innerText and would
           destroy them. One string per language would have frozen the English
           order for all eleven; five pieces per language lets each one put its
           own connective between them, which is what termsAgreeMid is FOR.

           authAddressLabel names the pin, not the pin's old caption. The caption
           "Auto" still exists inside the button for the screen reader --
           useCurrentLocation writes "Locating..." there while it waits for a fix
           -- but a visible word was dropped because the brief puts an icon there,
           and a one-word name for a glyph nobody has seen is no name at all. */
        registerTab: "Register",
        authCreateAccount: "Create Account",
        authBackLabel: "Back",
        countryIreland: "Ireland",
        countryUnitedKingdom: "United Kingdom",
        phoneCountryLabel: "Country code",
        phoneCountryLocked: "Only sellers can change the country code",
        emailDomainLabel: "Email domains",
        authAddressLabel: "Use my location",
        authPasswordEmpty: "Password not entered yet",
        authPasswordHide: "Hide password",
        authPasswordInvalid: "Password does not meet the requirements yet",
        authPasswordShow: "Show password",
        authPasswordValid: "Password meets the requirements",
        passNeedLength: "Add at least 10 characters",
        passNeedUpper: "Add an uppercase letter (A-Z)",
        passNeedLower: "Add a lowercase letter (a-z)",
        passNeedDigit: "Add a digit (0-9)",
        passNeedSpec: "Add a special character",
        termsAgreeLead: "«I agree to the ",
        termsAgreeTerms: "Terms of Use",
        termsAgreeMid: " and the ",
        termsAgreePrivacy: "Privacy Policy",
        termsAgreeTail: " of Allparts.ie»",
        termsRequired: "Please accept the Terms of Use and Privacy Policy to continue",
        toastPhoneCountry: "Enter a valid phone number for",
        deleteConfirmGdpr: "Under the GDPR rules, your AllParts.ie account will be permanently deleted in 28 days. During that period you can cancel the deletion. Confirm?",
        deleteModalConfirm: "Delete account",
        deleteConfirmPasswordHint: "Enter your current password to confirm",
        deleteConfirmPasswordRequired: "Enter your password to confirm",
        deleteConfirmCodeHint: "To confirm the deletion, enter the 4-digit code sent to your Email",
        deleteConfirmCodeSentTo: "Code sent to {email}",
        deleteConfirmCodeRequired: "Enter the 4-digit code",
        deleteConfirmCodeIncorrect: "Wrong code",
        deleteConfirmNoEmail: "Add an email to your profile — the deletion cannot be confirmed without one",

        /* The visible label is .sr-only and the field's name is its placeholder.
           These six are the strings that go in the boxes, and they are NEW
           strings rather than the old label keys: businessName / croNumber /
           emailLabel are reused as-is because they were already short enough
           to sit inside a field, and the four that were not -- 'Mobile number',
           'Standort / Eircode' and the rest -- would put a 22-character label
           into a 171px tab-width box on a 320px phone. See the note on
           .account-input::placeholder. */
        phName: "Your name", phPhone: "Phone", phPassword: "Password",
        phLocation: "Location / Eircode", kbdHint: "Switch your keyboard to Latin letters.",
        logout: "Log out", logoutToast: "You are logged out", emptySellerRequestsByBrand: "No requests for your brands yet", sellerBrandsInScope: "You work with: {brands}", accountManagersTitle: "Managers", accountManagersHint: "Managers sign in with phone + password, no repeat codes.", accountDeviceLockNeedsApp: "Device lock (PIN / Face ID) requires the mobile app; on the web, signing a manager out from here is the control.", accountManagersNone: "No managers yet", accountManagerEndSession: "End session", accountManagerRemove: "Remove", accountManagerSessionEnded: "Manager's session ended", accountManagerRemoved: "Manager removed", accountManagerAddPrompt: "Enter the manager's phone number", accountManagerExists: "This phone is already a manager", accountManagerBadPhone: "That is not an Irish mobile number", accountManagerSmsEmulated: "SMS to {phone}: your activation code is {code}. In a live system it arrives by SMS.", accountManagerPasswordShort: "Password is too short", accountManagerPasswordMin: "Minimum {n} characters",
        reqNumberLabel: "Request №", copyId: "Copy request number", idCopied: "Request number copied", copyPartCode: "Copy", partCodeCopied: "Number copied", showPartCode: "Show full number",
        agoNow: "just now", agoHours: "{n} h", agoDays: "{n} d", agoToday: "today", daysLeft: "{n} d left",
        archive: "Archive", openReplies: "Open replies", renewRequest: "Create a new request for this car",
        expiredStatus: "Expired", expiredSection: "Expired", relistRequest: "Relist", purgeInDays: "Deleted in {n} d",
        priceHintBuyer: "Estimated market price for this part from requests in your region: € {a} – € {b}.",
        priceHintSeller: "Market average: € {a}. Competitor range: € {b} – € {c}.",
        views: ["view", "views", "views"], replies: ["reply", "replies", "replies"],
        bestPrice: "best price", coverage: "{a} of {b} parts",
        showDetails: "Parts and prices", hideDetails: "Hide",
        markReplied: "I replied", markRepliedOn: "Replied ✓", reportShort: "Report", deliveryLabel: "Delivery", totalLabel: "Total to pay", callBtn: "Call", whatsappBtn: "WhatsApp", contactsHidden: "Move the reply to Saved to see the seller's contact details", replySentLabel: "Reply sent", saveToSaved: "Save to Saved", backToSaved: "Return to Saved", savedLabel: "Saved", deadlineTitle: "Deadline: {a} of {b} days", viewsTitle: "Views: {n}", receivedReplies: "Received replies", detailsPhotos: "Parts and photos",
        answerTitle: "Reply to request", answerClose: "Close",
        swipeHint: "Swipe the card left to archive it, or right to save it.",
swipeHintClose: "Dismiss the hint",
        swipeToSaved: "To saved",
        swipeToArchived: "To archive",
        swipeUndo: "Undo",
        answerPartsLegend: "Parts you are offering",
        answerDelivery: "Delivery", answerWarranty: "Return warranty",
        answerDelPost: "Post", answerDelCourier: "Courier", answerDelPickup: "Collection",
        answerWarNone: "None", answerWarDays: "{a} days",
        answerPriceHeading: "Price (VAT incl.):", answerTotalLabel: "Total:",
        answerSend: "Send reply", answerSendWithCount: "Send reply ({a})",
        answerConfirmTitle: "Check your reply", answerConfirmBack: "Go back and change",
        answerDeliveryRow: "Delivery · {a}",
        answerReplyBtn: "Reply", answerRepliedBtn: "Reply sent", answerSentToast: "Reply sent",
        answerWarnFewParts: "{a} of {b} parts are not being offered. The buyer will only see the ticked ones.",
        answerWarnNoDelivery: "The buyer asked for delivery and you chose collection. They will see this in red — the decision is theirs.",
        answerWarnNoWarranty: "The buyer asked for a return warranty and you chose none. They will see this in red — the decision is theirs.",
        answerWarnConfirm: "The buyer asked for {a}, and this reply does not include it. They will see this in red — the decision is theirs.",
        answerWarnNoPrice: "No price yet: {a}. The reply cannot be sent until every ticked part and the delivery have a price.",
        /* The report sheet's own strings, and they are here rather than in
           translations.en for one reason: they are en + ru only, because the
           nine single-line packs inherit English at load and T() falls back
           to English before it falls back to ''. A buyer in German sees this
           window in English, which is the right failure -- a partially
           translated dialog is worse than an honestly English one, and the
           same seam the options sheet already uses.

           reportQuoteFrom is the accessible name of the trigger, and it has
           to CONTAIN the visible word "Report" for the Label in Name
           requirement to hold. That is why it is a separate string and not
           just the aria-label built from reportShort. */
        reportQuoteFrom: "Report quote from {name}",
        reportTitle: "Report this content",
        reportLead: "What is wrong with this content?",
        reportReasonsLegend: "Reason for reporting",
        /* The three level-one reasons are RADIOS and are named as three
           separate things a listing can be, not three adjectives. "Fraud
           or deception" rather than "Spam / Fraud", because spam is not
           fraud and a report filed under the wrong one is a report a
           moderator has to re-file before anyone can act on it. */
        reportReasonFraud: "Fraud or deception",
        reportReasonPart: "Incorrect part or photo",
        reportReasonOffensive: "Unacceptable behaviour",
        /* Level two. Two per reason, and deliberately not in the radio
           group: the two fraud subcategories are not exclusive of each
           other, and a control that forced a choice between them would
           lose half of the report on exactly the listings that warrant it. */
        reportSubFraudCounterfeit: "The part is counterfeit",
        reportSubFraudOffsite: "Asks for money outside the site",
        reportSubPartDescription: "Not the part that was advertised",
        reportSubPartPhoto: "The photos do not show the part",
        reportSubOffensiveAbuse: "Abusive or threatening language",
        reportSubOffensiveSpam: "Repeated unwanted messages",
        reportDetailLabel: "Additional details",
        reportDetailHint: "Please provide additional details to help our moderation team verify this issue...",
        reportLegalConfirm: "I confirm that I submit this notification in good faith and that the information is accurate.",
        reportSend: "Send",
        reportNote: "Reports go to the Allparts.ie moderation team. The supplier is not told who reported them.",
        reportPickReason: "Choose a reason before sending.",
        reportConfirmGoodFaith: "Confirm the statement above before sending.",
        reportSent: "Report received. Thank you.",
        saveFav: "Save to favourites", removeFav: "Remove from favourites",
        savedItems: "Saved", savedArchive: "Archive", savedClear: "Clear all", savedMoveAllToArchive: "Move all to archive", savedMovedToArchive: "Moved {n} to archive",
        emptyRequests: "No requests yet.", emptyReplies: "No replies yet. They will show up here as soon as they arrive.",
        emptySaved: "Nothing saved yet. Tap the heart next to a price.", emptySavedArchive: "The archive is empty.",
        localBadge: "Local · {place}", repliesGroup: "Replies for {id}", unreadBadge: "New replies",
    },
    ru: {
        account: "Кабинет", accountGreeting: "Привет, {name}", accountGreetingAnon: "Ваш кабинет",
        tabAccount: "Кабинет", tabRequests: "Запросы", tabMyRequests: "Мои заявки", tabReplies: "Ответы", tabSaved: "Избранные",
        croNumber: "Номер CRO", emailLabel: "Email", languageLabel: "Язык",
        emailInvalidFormat: "Некорректный формат email адреса.",
        emailChecking: "Проверяем...",
        emailDisposable: "Регистрация через одноразовые почты запрещена.",
        emailDomainNotFound: "Указанный почтовый домен не существует.",
        phoneInvalidFormat: "Неверный формат ирландского мобильного номера (требуется 10 цифр).",
        passwordRuleHint: "Минимум 10 символов, заглавная буква, строчная буква, цифра, спецсимвол",

        registerTab: "Регистрация",
        authCreateAccount: "Создать аккаунт",
        authBackLabel: "Назад",
        countryIreland: "Ирландия",
        countryUnitedKingdom: "Великобритания",
        phoneCountryLabel: "Код страны",
        phoneCountryLocked: "Сменить код страны может только продавец",
        emailDomainLabel: "Почтовые домены",
        authAddressLabel: "Определить моё местоположение",
        authPasswordEmpty: "Пароль ещё не введён",
        authPasswordHide: "Скрыть пароль",
        authPasswordInvalid: "Пароль пока не соответствует требованиям",
        authPasswordShow: "Показать пароль",
        authPasswordValid: "Пароль соответствует требованиям",
        passNeedLength: "Добавьте минимум 10 символов",
        passNeedUpper: "Добавьте заглавную букву (A-Z)",
        passNeedLower: "Добавьте строчную букву (a-z)",
        passNeedDigit: "Добавьте цифру (0-9)",
        passNeedSpec: "Добавьте специальный символ",
        termsAgreeLead: "«Я согласен(а) с ",
        termsAgreeTerms: "Условиями использования",
        termsAgreeMid: " и ",
        termsAgreePrivacy: "Политикой конфиденциальности",
        termsAgreeTail: " Allparts.ie»",
        termsRequired: "Примите Условия использования и Политику конфиденциальности, чтобы продолжить",
        toastPhoneCountry: "Введите действительный номер телефона для",
        deleteConfirmGdpr: "Согласно правилам GDPR, ваш аккаунт AllParts.ie будет окончательно удален через 28 дней. В течение этого срока вы можете отменить удаление. Подтвердить?",
        deleteModalConfirm: "Удалить аккаунт",
        deleteConfirmPasswordHint: "Введите текущий пароль для подтверждения",
        deleteConfirmPasswordRequired: "Введите пароль для подтверждения",
        deleteConfirmCodeHint: "Для подтверждения удаления введите 4-значный код, отправленный на ваш Email",
        deleteConfirmCodeSentTo: "Код отправлен на {email}",
        deleteConfirmCodeRequired: "Введите 4-значный код",
        deleteConfirmCodeIncorrect: "Неверный код",
        deleteConfirmNoEmail: "Укажите email в профиле — без него удаление нельзя подтвердить",

        /* The visible label is .sr-only and the field's name is its placeholder.
           These six are the strings that go in the boxes, and they are NEW
           strings rather than the old label keys: businessName / croNumber /
           emailLabel are reused as-is because they were already short enough
           to sit inside a field, and the four that were not -- 'Mobile number',
           'Standort / Eircode' and the rest -- would put a 22-character label
           into a 171px tab-width box on a 320px phone. See the note on
           .account-input::placeholder. */
        phName: "Ваше имя", phPhone: "Телефон", phPassword: "Пароль",
        phLocation: "Местоположение / Eircode", kbdHint: "Переключите раскладку на латиницу.",
        logout: "Выйти", logoutToast: "Вы вышли из кабинета", emptySellerRequestsByBrand: "По вашим маркам заявок пока нет", sellerBrandsInScope: "Вы работаете с: {brands}", accountManagersTitle: "Менеджеры", accountManagersHint: "Менеджеры входят по телефону и паролю, без повторных кодов.", accountDeviceLockNeedsApp: "Блокировка устройства (PIN / Face ID) — требование мобильного приложения; на вебе контроль — завершение сессии здесь.", accountManagersNone: "Менеджеров пока нет", accountManagerEndSession: "Завершить сессию", accountManagerRemove: "Удалить", accountManagerSessionEnded: "Сессия менеджера завершена", accountManagerRemoved: "Менеджер удалён", accountManagerAddPrompt: "Введите номер телефона менеджера", accountManagerExists: "Этот номер уже в списке менеджеров", accountManagerBadPhone: "Это не ирландский мобильный номер", accountManagerSmsEmulated: "SMS на {phone}: ваш код активации {code}. В рабочей системе он приходит по SMS.", accountManagerPasswordShort: "Пароль слишком короткий", accountManagerPasswordMin: "Минимум {n} символов",
        reqNumberLabel: "№ запроса", copyId: "Скопировать номер", idCopied: "Номер скопирован", copyPartCode: "Скопировать", partCodeCopied: "Номер скопирован", showPartCode: "Показать полный номер",
        agoNow: "только что", agoHours: "{n} ч", agoDays: "{n} дн", agoToday: "сегодня", daysLeft: "осталось {n} дн",
        archive: "Архив", openReplies: "Открыть ответы", renewRequest: "Создать новый запрос по этому авто",
        expiredStatus: "Истёк", expiredSection: "Истекшие", relistRequest: "Перевыставить", purgeInDays: "Удаление через {n} дн",
        priceHintBuyer: "Ориентировочная рыночная цена этой детали по запросам в вашем регионе: € {a} – € {b}.",
        priceHintSeller: "Средняя цена на рынке: € {a}. Диапазон цен конкурентов: € {b} – € {c}.",
        views: ["просмотр", "просмотра", "просмотров"], replies: ["ответ", "ответа", "ответов"],
        bestPrice: "лучшая цена", coverage: "{a} из {b} деталей",
        showDetails: "Детали и цены", hideDetails: "Свернуть",

        markReplied: "Отклинулся", markRepliedOn: "Отклинулся ✓", reportShort: "Пожаловаться", deliveryLabel: "Доставка", totalLabel: "Всего к оплате", callBtn: "Позвонить", whatsappBtn: "WhatsApp", contactsHidden: "Перенесите ответ в «Избранные», чтобы увидеть контакты продавца", replySentLabel: "Ответ отправлен", saveToSaved: "Сохранить в сохранённые", backToSaved: "Вернуть в сохранённые", savedLabel: "Сохранено", deadlineTitle: "Срок: {a} из {b} дн", viewsTitle: "Просмотры: {n}", receivedReplies: "Полученные ответы", detailsPhotos: "Детали и фото",

        answerTitle: "Ответ на запрос", answerClose: "Закрыть",
        swipeHint: "Проведите карточку влево, чтобы в архив, или вправо, чтобы в избранное.",

        swipeHintClose: "Скрыть подсказку",
        swipeToSaved: "В избранное",
        swipeToArchived: "В архив",
        swipeUndo: "Отменить",
        answerPartsLegend: "Детали, которые вы предлагаете",
        answerDelivery: "Доставка", answerWarranty: "Гарантия возврата",
        answerDelPost: "Почта", answerDelCourier: "Курьер", answerDelPickup: "Самовывоз",
        answerWarNone: "Нет", answerWarDays: "{a} дней",
        answerPriceHeading: "Цена (вкл. НДС):", answerTotalLabel: "Всего:",
        answerSend: "Отправить ответ", answerSendWithCount: "Отправить ответ ({a})",
        answerConfirmTitle: "Проверьте ответ", answerConfirmBack: "Вернуться и изменить",
        answerDeliveryRow: "Доставка · {a}",
        answerReplyBtn: "Ответить", answerRepliedBtn: "Ответ отправлен", answerSentToast: "Ответ отправлен",
        answerWarnFewParts: "{a} из {b} деталей не предложены. Покупатель увидит только отмеченные.",
        answerWarnNoDelivery: "Покупатель просил доставку, а вы выбрали самовывоз. Он увидит это красным — решение за ним.",
        answerWarnNoWarranty: "Покупатель просил возврат, а вы выбрали «Нет». Он увидит это красным — решение за ним.",

        answerWarnConfirm: "Покупатель просил {a}, а в этом ответе этого нет. Он увидит это красным — решение за ним.",
        answerWarnNoPrice: "Без цены: {a}. Ответ нельзя отправить, пока у каждой отмеченной детали и у доставки не будет цены.",
reportQuoteFrom: "Сообщить о предложении от {name}",
        reportTitle: "Сообщить о материале",
        reportLead: "Что не так с этим материалом?",
        reportReasonsLegend: "Причина сообщения",
        reportReasonFraud: "Мошенничество или обман",
        reportReasonPart: "Ошибка в данных детали или фото",
        reportReasonOffensive: "Недопустимое поведение",
        reportSubFraudCounterfeit: "Поддельная деталь",
        reportSubFraudOffsite: "Требуют деньги в обход сайта",
        reportSubPartDescription: "Не та деталь, которая была указана",
        reportSubPartPhoto: "На фото нет этой детали",
        reportSubOffensiveAbuse: "Оскорбления или угрозы",
        reportSubOffensiveSpam: "Повторяющиеся нежелательные сообщения",
        reportDetailLabel: "Дополнительные сведения",
        reportDetailHint: "Пожалуйста, приведите дополнительные сведения, чтобы наша команда модерации смогла проверить это обращение...",
        reportLegalConfirm: "Подтверждаю, что отправляю это уведомление добросовестно и что информация достоверна.",
        reportSend: "Отправить",
        reportNote: "Сообщения поступают в команду модерации Allparts.ie. Поставщик не узнает, кто отправил сообщение.",
        reportPickReason: "Выберите причину перед отправкой.",
        reportConfirmGoodFaith: "Подтвердите утверждение выше перед отправкой.",
        reportSent: "Сообщение получено. Спасибо.",
        saveFav: "В избранное", removeFav: "Убрать из избранного",
        savedItems: "Сохранённые", savedArchive: "Архив", savedClear: "Очистить всё", savedMoveAllToArchive: "Перенести всё в архив", savedMovedToArchive: "Перенесено в архив: {n}",
        emptyRequests: "Запросов пока нет.", emptyReplies: "Ответов пока нет. Они появятся здесь сразу.",
        emptySaved: "Пока ничего не сохранено. Нажмите на сердечко рядом с ценой.", emptySavedArchive: "В архиве пока пусто.",
        localBadge: "Локально · {place}", repliesGroup: "Ответы на {id}", unreadBadge: "Новые ответы",
    },
    de: {
        account: "Konto", accountGreeting: "Hallo, {name}", accountGreetingAnon: "Ihr Konto",
        tabAccount: "Konto", tabRequests: "Anfragen", tabMyRequests: "Meine Anfragen", tabReplies: "Antworten", tabSaved: "Gemerkte",
        croNumber: "CRO-Nummer", emailLabel: "E-Mail", languageLabel: "Sprache",
        emailInvalidFormat: "Ungültiges E-Mail-Format.",
        emailChecking: "Wird geprüft...",
        emailDisposable: "Die Registrierung mit Wegwerf-E-Mail-Adressen ist nicht erlaubt.",
        emailDomainNotFound: "Die angegebene E-Mail-Domain existiert nicht.",
        phoneInvalidFormat: "Ungültiges Format der irischen Mobilnummer (10 Ziffern erforderlich).",
        passwordRuleHint: "Mindestens 10 Zeichen, Großbuchstabe, Kleinbuchstabe, Ziffer, Sonderzeichen",

        registerTab: "Registrieren",
        authCreateAccount: "Konto erstellen",
        authBackLabel: "Zurück",
        countryIreland: "Irland",
        countryUnitedKingdom: "Vereinigtes Königreich",
        phoneCountryLabel: "Ländervorwahl",
        phoneCountryLocked: "Nur Verkäufer können die Ländervorwahl ändern",
        emailDomainLabel: "E-Mail-Domains",
        authAddressLabel: "Meinen Standort verwenden",
        authPasswordEmpty: "Passwort noch nicht eingegeben",
        authPasswordHide: "Passwort verbergen",
        authPasswordInvalid: "Das Passwort erfüllt die Anforderungen noch nicht",
        authPasswordShow: "Passwort anzeigen",
        authPasswordValid: "Das Passwort erfüllt die Anforderungen",
        passNeedLength: "Mindestens 10 Zeichen hinzufügen",
        passNeedUpper: "Einen Großbuchstaben hinzufügen (A-Z)",
        passNeedLower: "Einen Kleinbuchstaben hinzufügen (a-z)",
        passNeedDigit: "Eine Ziffer hinzufügen (0-9)",
        passNeedSpec: "Ein Sonderzeichen hinzufügen",
        termsAgreeLead: "«Ich stimme den ",
        termsAgreeTerms: "Nutzungsbedingungen",
        termsAgreeMid: " und der ",
        termsAgreePrivacy: "Datenschutzerklärung",
        termsAgreeTail: " Allparts.ie zu.»",
        termsRequired: "Bitte stimmen Sie den Nutzungsbedingungen und der Datenschutzerklärung zu, um fortzufahren",
        toastPhoneCountry: "Geben Sie eine gültige Telefonnummer für",
        deleteConfirmGdpr: "Nach den GDPR-Regeln wird Ihr AllParts.ie-Konto in 28 Tagen endgültig gelöscht. In dieser Zeit können Sie die Löschung widerrufen. Bestätigen?",
        deleteModalConfirm: "Konto löschen",
        deleteConfirmPasswordHint: "Aktuelles Passwort zur Bestätigung eingeben",
        deleteConfirmPasswordRequired: "Passwort zur Bestätigung eingeben",
        deleteConfirmCodeHint: "Um die Löschung zu bestätigen, geben Sie den 4-stelligen Code ein, der an Ihre E-Mail gesendet wurde",
        deleteConfirmCodeSentTo: "Code gesendet an {email}",
        deleteConfirmCodeRequired: "Geben Sie den 4-stelligen Code ein",
        deleteConfirmCodeIncorrect: "Falscher Code",
        deleteConfirmNoEmail: "Geben Sie eine E-Mail-Adresse im Profil an – ohne sie lässt sich die Löschung nicht bestätigen",

        /* The visible label is .sr-only and the field's name is its placeholder.
           These six are the strings that go in the boxes, and they are NEW
           strings rather than the old label keys: businessName / croNumber /
           emailLabel are reused as-is because they were already short enough
           to sit inside a field, and the four that were not -- 'Mobile number',
           'Standort / Eircode' and the rest -- would put a 22-character label
           into a 171px tab-width box on a 320px phone. See the note on
           .account-input::placeholder. */
        phName: "Ihr Name", phPhone: "Telefon", phPassword: "Passwort",
        phLocation: "Standort / Eircode", kbdHint: "Tastatur auf lateinische Buchstaben umstellen.",
        logout: "Abmelden", logoutToast: "Sie sind abgemeldet", emptySellerRequestsByBrand: "Für Ihre Marken noch keine Anfragen", sellerBrandsInScope: "Sie arbeiten mit: {brands}", accountManagersTitle: "Manager", accountManagersHint: "Manager melden sich mit Telefon und Passwort an, ohne erneute Codes.", accountDeviceLockNeedsApp: "Gerätesperre (PIN / Face ID) setzt die mobile App voraus; im Web ist das Abmelden hier die Kontrolle.", accountManagersNone: "Noch keine Manager", accountManagerEndSession: "Sitzung beenden", accountManagerRemove: "Entfernen", accountManagerSessionEnded: "Sitzung des Managers beendet", accountManagerRemoved: "Manager entfernt", accountManagerAddPrompt: "Telefonnummer des Managers eingeben", accountManagerExists: "Diese Nummer ist bereits ein Manager", accountManagerBadPhone: "Das ist keine irische Mobilnummer", accountManagerSmsEmulated: "SMS an {phone}: Ihr Aktivierungscode lautet {code}. Im Betrieb kommt er per SMS.", accountManagerPasswordShort: "Passwort ist zu kurz", accountManagerPasswordMin: "Mindestens {n} Zeichen",
        reqNumberLabel: "Anfrage Nr.", copyId: "Anfragenummer kopieren", idCopied: "Anfragenummer kopiert", copyPartCode: "Kopieren", partCodeCopied: "Nummer kopiert", showPartCode: "Vollständige Nummer anzeigen",
        agoNow: "gerade eben", agoHours: "{n} Std.", agoDays: "{n} T", agoToday: "heute", daysLeft: "noch {n} T",
        archive: "Archiv", openReplies: "Antworten öffnen", renewRequest: "Neue Anfrage für dieses Fahrzeug",
        expiredStatus: "Abgelaufen", expiredSection: "Abgelaufen", relistRequest: "Erneut einstellen", purgeInDays: "Löschung in {n} T",
        priceHintBuyer: "Geschätzter Marktpreis für dieses Teil aus Anfragen in Ihrer Region: € {a} – € {b}.",
        priceHintSeller: "Marktdurchschnitt: € {a}. Wettbewerbsbereich: € {b} – € {c}.",
        views: ["Aufruf", "Aufrufe", "Aufrufe"], replies: ["Antwort", "Antworten", "Antworten"],
        bestPrice: "bester Preis", coverage: "{a} von {b} Teilen",
        showDetails: "Teile und Preise", hideDetails: "Schließen",

        markReplied: "Geantwortet", markRepliedOn: "Geantwortet ✓", reportShort: "Melden",

        answerTitle: "Antwort auf Anfrage", answerClose: "Schließen",
        swipeHint: "Wischen Sie die Karte nach links ins Archiv oder nach rechts in die Favoriten.",

        swipeHintClose: "Hinweis schließen",
        swipeToSaved: "Zu Favoriten",
        swipeToArchived: "Ins Archiv",
        swipeUndo: "Rückgängig",
        answerPartsLegend: "Teile, die Sie anbieten",
        answerDelivery: "Lieferung", answerWarranty: "Rückgabegarantie",
        answerDelPost: "Post", answerDelCourier: "Kurier", answerDelPickup: "Abholung",
        answerWarNone: "Keine", answerWarDays: "{a} Tage",
        answerPriceHeading: "Preis (inkl. MwSt.):", answerTotalLabel: "Gesamt:",
        answerSend: "Antwort senden", answerSendWithCount: "Antwort senden ({a})",
        answerConfirmTitle: "Antwort prüfen", answerConfirmBack: "Zurück und ändern",
        answerDeliveryRow: "Lieferung · {a}",
        answerReplyBtn: "Antworten", answerRepliedBtn: "Antwort gesendet", answerSentToast: "Antwort gesendet",
        answerWarnFewParts: "{a} von {b} Teilen werden nicht angeboten. Der Käufer sieht nur die angehakten.",
        answerWarnNoDelivery: "Der Käufer hat Lieferung gewünscht, Sie haben Abholung gewählt. Er sieht das in Rot — die Entscheidung liegt bei ihm.",
        answerWarnNoWarranty: "Der Käufer hat eine Rückgabegarantie gewünscht, Sie haben keine gewählt. Er sieht das in Rot — die Entscheidung liegt bei ihm.",

        answerWarnConfirm: "Der Käufer hat {a} gewünscht, in dieser Antwort ist es nicht enthalten. Er sieht das in Rot — die Entscheidung liegt bei ihm.",
        answerWarnNoPrice: "Noch kein Preis: {a}. Die Antwort kann erst gesendet werden, wenn jedes angehakte Teil und die Lieferung einen Preis haben.",
        saveFav: "Zu Gemerkten hinzufügen", removeFav: "Aus Gemerkten entfernen",
        savedItems: "Gespeichert", savedArchive: "Archiv", savedClear: "Alle löschen", savedMoveAllToArchive: "Alles ins Archiv", savedMovedToArchive: "{n} ins Archiv verschoben",
        emptyRequests: "Noch keine Anfragen.", emptyReplies: "Noch keine Antworten. Sie erscheinen hier sofort.",
        emptySaved: "Noch nichts gemerkt. Tippen Sie auf das Herz neben dem Preis.", emptySavedArchive: "Das Archiv ist leer.",
        localBadge: "Lokal · {place}", repliesGroup: "Antworten zu {id}", unreadBadge: "Neue Antworten",
    },
    fr: {
        account: "Compte", accountGreeting: "Bonjour, {name}", accountGreetingAnon: "Votre compte",
        tabAccount: "Compte", tabRequests: "Demandes", tabMyRequests: "Mes demandes", tabReplies: "Réponses", tabSaved: "Favoris",
        croNumber: "Numéro CRO", emailLabel: "E-mail", languageLabel: "Langue",
        emailInvalidFormat: "Format d'adresse e-mail invalide.",
        emailChecking: "Vérification...",
        emailDisposable: "L'inscription avec des adresses e-mail jetables n'est pas autorisée.",
        emailDomainNotFound: "Le domaine e-mail saisi n'existe pas.",
        phoneInvalidFormat: "Format de numéro de mobile irlandais invalide (10 chiffres requis).",
        passwordRuleHint: "10 caractères minimum, majuscule, minuscule, chiffre, caractère spécial",

        registerTab: "Inscription",
        authCreateAccount: "Créer un compte",
        authBackLabel: "Retour",
        countryIreland: "Irlande",
        countryUnitedKingdom: "Royaume-Uni",
        phoneCountryLabel: "Indicatif du pays",
        phoneCountryLocked: "Seuls les vendeurs peuvent modifier l'indicatif du pays",
        emailDomainLabel: "Domaines e-mail",
        authAddressLabel: "Utiliser ma position",
        authPasswordEmpty: "Mot de passe pas encore saisi",
        authPasswordHide: "Masquer le mot de passe",
        authPasswordInvalid: "Le mot de passe ne respecte pas encore les exigences",
        authPasswordShow: "Afficher le mot de passe",
        authPasswordValid: "Le mot de passe respecte les exigences",
        passNeedLength: "Ajoutez au moins 10 caractères",
        passNeedUpper: "Ajoutez une majuscule (A-Z)",
        passNeedLower: "Ajoutez une minuscule (a-z)",
        passNeedDigit: "Ajoutez un chiffre (0-9)",
        passNeedSpec: "Ajoutez un caractère spécial",
        termsAgreeLead: "« J'accepte les ",
        termsAgreeTerms: "Conditions d'utilisation",
        termsAgreeMid: " et la ",
        termsAgreePrivacy: "Politique de confidentialité",
        termsAgreeTail: " d'Allparts.ie»",
        termsRequired: "Veuillez accepter les Conditions d'utilisation et la Politique de confidentialité pour continuer",
        toastPhoneCountry: "Saisissez un numéro de téléphone valide pour",
        deleteConfirmGdpr: "Selon le RGPD, votre compte AllParts.ie sera définitivement supprimé dans 28 jours. Durant ce délai, vous pouvez annuler la suppression. Confirmer ?",
        deleteModalConfirm: "Supprimer le compte",
        deleteConfirmPasswordHint: "Saisissez votre mot de passe actuel pour confirmer",
        deleteConfirmPasswordRequired: "Saisissez votre mot de passe pour confirmer",
        deleteConfirmCodeHint: "Pour confirmer la suppression, saisissez le code à 4 chiffres envoyé à votre e-mail",
        deleteConfirmCodeSentTo: "Code envoyé à {email}",
        deleteConfirmCodeRequired: "Saisissez le code à 4 chiffres",
        deleteConfirmCodeIncorrect: "Code incorrect",
        deleteConfirmNoEmail: "Indiquez une adresse e-mail dans votre profil — sans elle, la suppression ne peut pas être confirmée",

        /* The visible label is .sr-only and the field's name is its placeholder.
           These six are the strings that go in the boxes, and they are NEW
           strings rather than the old label keys: businessName / croNumber /
           emailLabel are reused as-is because they were already short enough
           to sit inside a field, and the four that were not -- 'Mobile number',
           'Standort / Eircode' and the rest -- would put a 22-character label
           into a 171px tab-width box on a 320px phone. See the note on
           .account-input::placeholder. */
        phName: "Votre nom", phPhone: "Téléphone", phPassword: "Mot de passe",
        phLocation: "Emplacement / Eircode", kbdHint: "Passez votre clavier en lettres latines.",
        logout: "Se déconnecter", logoutToast: "Vous êtes déconnecté", emptySellerRequestsByBrand: "Aucune demande pour vos marques pour l'instant", sellerBrandsInScope: "Vous travaillez avec : {brands}", accountManagersTitle: "Managers", accountManagersHint: "Les managers s'authentifient par téléphone et mot de passe, sans nouveau code.", accountDeviceLockNeedsApp: "Le verrouillage de l'appareil (PIN / Face ID) suppose l'application mobile ; sur le web, la déconnexion d'ici est le contrôle.", accountManagersNone: "Aucun manager", accountManagerEndSession: "Fermer la session", accountManagerRemove: "Supprimer", accountManagerSessionEnded: "Session du manager terminée", accountManagerRemoved: "Manager supprimé", accountManagerAddPrompt: "Saisissez le numéro du manager", accountManagerExists: "Ce numéro est déjà un manager", accountManagerBadPhone: "Ce n'est pas un mobile irlandais", accountManagerSmsEmulated: "SMS au {phone} : votre code d'activation est {code}. En production il arrive par SMS.", accountManagerPasswordShort: "Mot de passe trop court", accountManagerPasswordMin: "Au moins {n} caractères",
        reqNumberLabel: "Demande n°", copyId: "Copier le numéro de demande", idCopied: "Numéro de demande copié", copyPartCode: "Copier", partCodeCopied: "Numéro copié", showPartCode: "Afficher le numéro complet",
        agoNow: "à l'instant", agoHours: "{n} h", agoDays: "{n} j", agoToday: "aujourd'hui", daysLeft: "{n} j restants",
        archive: "Archives", openReplies: "Ouvrir les réponses", renewRequest: "Créer une nouvelle demande pour ce véhicule",
        expiredStatus: "Expirée", expiredSection: "Expirées", relistRequest: "Republier", purgeInDays: "Suppression dans {n} j",
        priceHintBuyer: "Prix de marché estimé pour cette pièce d'après les demandes de votre région : € {a} – € {b}.",
        priceHintSeller: "Prix moyen du marché : € {a}. Fourchette des concurrents : € {b} – € {c}.",
        views: ["vue", "vues", "vues"], replies: ["réponse", "réponses", "réponses"],
        bestPrice: "meilleur prix", coverage: "{a} sur {b} pièces",
        showDetails: "Pièces et prix", hideDetails: "Réduire",

        markReplied: "J'ai répondu", markRepliedOn: "Répondu ✓", reportShort: "Signaler",

        answerTitle: "Répondre à la demande", answerClose: "Fermer",
        swipeHint: "Balayez la carte vers la gauche pour l'archiver, ou vers la droite pour l'ajouter aux favoris.",

        swipeHintClose: "Fermer l'indication",
        swipeToSaved: "Aux favoris",
        swipeToArchived: "Aux archives",
        swipeUndo: "Annuler",
        answerPartsLegend: "Pièces que vous proposez",
        answerDelivery: "Livraison", answerWarranty: "Garantie de retour",
        answerDelPost: "Courrier", answerDelCourier: "Livreur", answerDelPickup: "Retrait",
        answerWarNone: "Aucune", answerWarDays: "{a} jours",
        answerPriceHeading: "Prix (TTC) :", answerTotalLabel: "Total :",
        answerSend: "Envoyer la réponse", answerSendWithCount: "Envoyer la réponse ({a})",
        answerConfirmTitle: "Vérifiez votre réponse", answerConfirmBack: "Revenir et modifier",
        answerDeliveryRow: "Livraison · {a}",
        answerReplyBtn: "Répondre", answerRepliedBtn: "Réponse envoyée", answerSentToast: "Réponse envoyée",
        answerWarnFewParts: "{a} pièces sur {b} ne sont pas proposées. L'acheteur ne verra que les pièces cochées.",
        answerWarnNoDelivery: "L'acheteur demandait la livraison et vous avez choisi le retrait. Il le verra en rouge — la décision lui revient.",
        answerWarnNoWarranty: "L'acheteur demandait une garantie de retour et vous avez choisi aucune. Il le verra en rouge — la décision lui revient.",

        answerWarnConfirm: "L'acheteur demandait {a}, et cette réponse ne le comprend pas. Il le verra en rouge — la décision lui revient.",
        answerWarnNoPrice: "Pas encore de prix : {a}. La réponse ne peut pas être envoyée tant que chaque pièce cochée et la livraison n'ont pas de prix.",
        saveFav: "Ajouter aux favoris", removeFav: "Retirer des favoris",
        savedItems: "Enregistrés", savedArchive: "Archives", savedClear: "Tout effacer", savedMoveAllToArchive: "Tout déplacer dans l'archive", savedMovedToArchive: "{n} déplacés dans l'archive",
        emptyRequests: "Aucune demande pour l'instant.", emptyReplies: "Aucune réponse pour l'instant. Elles apparaîtront ici immédiatement.",
        emptySaved: "Rien d'enregistré. Touchez le cœur près du prix.", emptySavedArchive: "Les archives sont vides.",
        localBadge: "Local · {place}", repliesGroup: "Réponses à {id}", unreadBadge: "Nouvelles réponses",
    },
    es: {
        account: "Cuenta", accountGreeting: "Hola, {name}", accountGreetingAnon: "Tu cuenta",
        tabAccount: "Cuenta", tabRequests: "Solicitudes", tabMyRequests: "Mis solicitudes", tabReplies: "Respuestas", tabSaved: "Guardados",
        croNumber: "Número CRO", emailLabel: "Correo electrónico", languageLabel: "Idioma",
        emailInvalidFormat: "Formato de correo electrónico no válido.",
        emailChecking: "Comprobando...",
        emailDisposable: "No se permite el registro con direcciones de correo desechables.",
        emailDomainNotFound: "El dominio de correo indicado no existe.",
        phoneInvalidFormat: "Formato de número de móvil irlandés no válido (se requieren 10 dígitos).",
        passwordRuleHint: "Mínimo 10 caracteres, mayúscula, minúscula, dígito, símbolo especial",

        registerTab: "Registro",
        authCreateAccount: "Crear cuenta",
        authBackLabel: "Atrás",
        countryIreland: "Irlanda",
        countryUnitedKingdom: "Reino Unido",
        phoneCountryLabel: "Prefijo del país",
        phoneCountryLocked: "Solo los vendedores pueden cambiar el prefijo del país",
        emailDomainLabel: "Dominios de correo",
        authAddressLabel: "Usar mi ubicación",
        authPasswordEmpty: "Contraseña aún no introducida",
        authPasswordHide: "Ocultar contraseña",
        authPasswordInvalid: "La contraseña aún no cumple los requisitos",
        authPasswordShow: "Mostrar contraseña",
        authPasswordValid: "La contraseña cumple los requisitos",
        passNeedLength: "Añade al menos 10 caracteres",
        passNeedUpper: "Añade una mayúscula (A-Z)",
        passNeedLower: "Añade una minúscula (a-z)",
        passNeedDigit: "Añade un dígito (0-9)",
        passNeedSpec: "Añade un símbolo especial",
        termsAgreeLead: "«Acepto los ",
        termsAgreeTerms: "Términos de Uso",
        termsAgreeMid: " y la ",
        termsAgreePrivacy: "Política de Privacidad",
        termsAgreeTail: " de Allparts.ie»",
        termsRequired: "Acepte los Términos de Uso y la Política de Privacidad para continuar",
        toastPhoneCountry: "Introduce un número de teléfono válido para",
        deleteConfirmGdpr: "Según las reglas del RGPD, tu cuenta de AllParts.ie se eliminará permanentemente en 28 días. Durante ese plazo puedes cancelar la eliminación. ¿Confirmar?",
        deleteModalConfirm: "Eliminar cuenta",
        deleteConfirmPasswordHint: "Introduce tu contraseña actual para confirmar",
        deleteConfirmPasswordRequired: "Introduce tu contraseña para confirmar",
        deleteConfirmCodeHint: "Para confirmar la eliminación, introduce el código de 4 dígitos enviado a tu correo electrónico",
        deleteConfirmCodeSentTo: "Código enviado a {email}",
        deleteConfirmCodeRequired: "Introduce el código de 4 dígitos",
        deleteConfirmCodeIncorrect: "Código incorrecto",
        deleteConfirmNoEmail: "Añade un correo electrónico a tu perfil: sin él no se puede confirmar la eliminación",

        /* The visible label is .sr-only and the field's name is its placeholder.
           These six are the strings that go in the boxes, and they are NEW
           strings rather than the old label keys: businessName / croNumber /
           emailLabel are reused as-is because they were already short enough
           to sit inside a field, and the four that were not -- 'Mobile number',
           'Standort / Eircode' and the rest -- would put a 22-character label
           into a 171px tab-width box on a 320px phone. See the note on
           .account-input::placeholder. */
        phName: "Tu nombre", phPhone: "Teléfono", phPassword: "Contraseña",
        phLocation: "Ubicación / Eircode", kbdHint: "Cambia el teclado a letras latinas.",
        logout: "Cerrar sesión", logoutToast: "Has cerrado sesión", emptySellerRequestsByBrand: "Todavía no hay solicitudes para tus marcas", sellerBrandsInScope: "Trabajas con: {brands}", accountManagersTitle: "Manager", accountManagersHint: "Los gerentes entran con teléfono y contraseña, sin códigos repetidos.", accountDeviceLockNeedsApp: "El bloqueo del dispositivo (PIN / Face ID) requiere la aplicación móvil; en la web, cerrar la sesión aquí es el control.", accountManagersNone: "Aún no hay gerentes", accountManagerEndSession: "Cerrar sesión", accountManagerRemove: "Eliminar", accountManagerSessionEnded: "Sesión del gerente cerrada", accountManagerRemoved: "Gerente eliminado", accountManagerAddPrompt: "Escribe el teléfono del gerente", accountManagerExists: "Este número ya es un gerente", accountManagerBadPhone: "Ese no es un móvil irlandés", accountManagerSmsEmulated: "SMS al {phone}: tu código de activación es {code}. En producción llega por SMS.", accountManagerPasswordShort: "Contraseña demasiado corta", accountManagerPasswordMin: "Mínimo {n} caracteres",
        reqNumberLabel: "Solicitud n.º", copyId: "Copiar el número de solicitud", idCopied: "Número de solicitud copiado", copyPartCode: "Copiar", partCodeCopied: "Número copiado", showPartCode: "Mostrar el número completo",
        agoNow: "ahora mismo", agoHours: "{n} h", agoDays: "{n} d", agoToday: "hoy", daysLeft: "quedan {n} d",
        archive: "Archivo", openReplies: "Abrir respuestas", renewRequest: "Crear una nueva solicitud para este coche",
        expiredStatus: "Caducada", expiredSection: "Caducadas", relistRequest: "Volver a publicar", purgeInDays: "Se elimina en {n} d",
        priceHintBuyer: "Precio de mercado estimado para esta pieza según las solicitudes de tu región: € {a} – € {b}.",
        priceHintSeller: "Precio medio de mercado: € {a}. Rango de la competencia: € {b} – € {c}.",
        views: ["vista", "vistas", "vistas"], replies: ["respuesta", "respuestas", "respuestas"],
        bestPrice: "mejor precio", coverage: "{a} de {b} piezas",
        showDetails: "Piezas y precios", hideDetails: "Ocultar",

        markReplied: "Respondido", markRepliedOn: "Respondido ✓", reportShort: "Denunciar",

        answerTitle: "Responder a la solicitud", answerClose: "Cerrar",
        swipeHint: "Desliza la tarjeta a la izquierda para archivarla o a la derecha para guardarla en favoritos.",

        swipeHintClose: "Cerrar el aviso",
        swipeToSaved: "A favoritos",
        swipeToArchived: "Al archivo",
        swipeUndo: "Deshacer",
        answerPartsLegend: "Piezas que ofreces",
        answerDelivery: "Envío", answerWarranty: "Garantía de devolución",
        answerDelPost: "Correo", answerDelCourier: "Mensajero", answerDelPickup: "Recogida",
        answerWarNone: "Ninguna", answerWarDays: "{a} días",
        answerPriceHeading: "Precio (IVA incluido):", answerTotalLabel: "Total:",
        answerSend: "Enviar respuesta", answerSendWithCount: "Enviar respuesta ({a})",
        answerConfirmTitle: "Revisa tu respuesta", answerConfirmBack: "Volver y cambiar",
        answerDeliveryRow: "Envío · {a}",
        answerReplyBtn: "Responder", answerRepliedBtn: "Respuesta enviada", answerSentToast: "Respuesta enviada",
        answerWarnFewParts: "{a} de {b} piezas no se ofrecen. El comprador solo verá las marcadas.",
        answerWarnNoDelivery: "El comprador pidió envío y has elegido recogida. Lo verá en rojo — la decisión es suya.",
        answerWarnNoWarranty: "El comprador pidió garantía de devolución y has elegido ninguna. Lo verá en rojo — la decisión es suya.",

        answerWarnConfirm: "El comprador pidió {a}, y esta respuesta no lo incluye. Lo verá en rojo — la decisión es suya.",
        answerWarnNoPrice: "Aún sin precio: {a}. La respuesta no se puede enviar hasta que cada pieza marcada y el envío tengan precio.",
        saveFav: "Guardar en favoritos", removeFav: "Quitar de favoritos",
        savedItems: "Guardados", savedArchive: "Archivo", savedClear: "Borrar todo", savedMoveAllToArchive: "Mover todo al archivo", savedMovedToArchive: "{n} movidos al archivo",
        emptyRequests: "Todavía no hay solicitudes.", emptyReplies: "Todavía no hay respuestas. Aparecerán aquí en cuanto lleguen.",
        emptySaved: "Aún no has guardado nada. Toca el corazón junto al precio.", emptySavedArchive: "El archivo está vacío.",
        localBadge: "Local · {place}", repliesGroup: "Respuestas de {id}", unreadBadge: "Nuevas respuestas",
    },
    it: {
        account: "Account", accountGreeting: "Ciao, {name}", accountGreetingAnon: "Il tuo account",
        tabAccount: "Account", tabRequests: "Richieste", tabMyRequests: "Mie richieste", tabReplies: "Risposte", tabSaved: "Salvati",
        croNumber: "Numero CRO", emailLabel: "E-mail", languageLabel: "Lingua",
        emailInvalidFormat: "Formato email non valido.",
        emailChecking: "Verifica in corso...",
        emailDisposable: "La registrazione con indirizzi email usa e getta non è consentita.",
        emailDomainNotFound: "Il dominio e-mail inserito non esiste.",
        phoneInvalidFormat: "Formato del numero di cellulare irlandese non valido (richiesti 10 cifre).",
        passwordRuleHint: "Minimo 10 caratteri, maiuscola, minuscola, cifra, carattere speciale",

        registerTab: "Registrazione",
        authCreateAccount: "Crea account",
        authBackLabel: "Indietro",
        countryIreland: "Irlanda",
        countryUnitedKingdom: "Regno Unito",
        phoneCountryLabel: "Prefisso internazionale",
        phoneCountryLocked: "Solo i venditori possono cambiare il prefisso",
        emailDomainLabel: "Domini email",
        authAddressLabel: "Usa la mia posizione",
        authPasswordEmpty: "Password non ancora inserita",
        authPasswordHide: "Nascondi password",
        authPasswordInvalid: "La password non soddisfa ancora i requisiti",
        authPasswordShow: "Mostra password",
        authPasswordValid: "La password soddisfa i requisiti",
        passNeedLength: "Aggiungi almeno 10 caratteri",
        passNeedUpper: "Aggiungi una maiuscola (A-Z)",
        passNeedLower: "Aggiungi una minuscola (a-z)",
        passNeedDigit: "Aggiungi una cifra (0-9)",
        passNeedSpec: "Aggiungi un carattere speciale",
        termsAgreeLead: "«Acconsento ai ",
        termsAgreeTerms: "Termini di Utilizzo",
        termsAgreeMid: " e alla ",
        termsAgreePrivacy: "Informativa sulla Privacy",
        termsAgreeTail: " di Allparts.ie»",
        termsRequired: "Accetta i Termini di Utilizzo e l'Informativa sulla Privacy per continuare",
        toastPhoneCountry: "Inserisci un numero di telefono valido per",
        deleteConfirmGdpr: "Secondo le regole GDPR, il tuo account AllParts.ie verrà eliminato definitivamente tra 28 giorni. Puoi annullare l'eliminazione entro quel periodo. Confermi?",
        deleteModalConfirm: "Elimina account",
        deleteConfirmPasswordHint: "Inserisci la password attuale per confermare",
        deleteConfirmPasswordRequired: "Inserisci la password per confermare",
        deleteConfirmCodeHint: "Per confermare l'eliminazione, inserisci il codice di 4 cifre inviato alla tua e-mail",
        deleteConfirmCodeSentTo: "Codice inviato a {email}",
        deleteConfirmCodeRequired: "Inserisci il codice di 4 cifre",
        deleteConfirmCodeIncorrect: "Codice errato",
        deleteConfirmNoEmail: "Aggiungi un indirizzo e-mail al profilo: senza di esso l'eliminazione non può essere confermata",

        /* The visible label is .sr-only and the field's name is its placeholder.
           These six are the strings that go in the boxes, and they are NEW
           strings rather than the old label keys: businessName / croNumber /
           emailLabel are reused as-is because they were already short enough
           to sit inside a field, and the four that were not -- 'Mobile number',
           'Standort / Eircode' and the rest -- would put a 22-character label
           into a 171px tab-width box on a 320px phone. See the note on
           .account-input::placeholder. */
        phName: "Il tuo nome", phPhone: "Telefono", phPassword: "Password",
        phLocation: "Posizione / Eircode", kbdHint: "Passa la tastiera alle lettere latine.",
        logout: "Esci", logoutToast: "Hai effettuato la disconnessione", emptySellerRequestsByBrand: "Ancora nessuna richiesta per i tuoi marchi", sellerBrandsInScope: "Lavori con: {brands}", accountManagersTitle: "Manager", accountManagersHint: "I manager accedono con telefono e password, senza codici ripetuti.", accountDeviceLockNeedsApp: "Il blocco del dispositivo (PIN / Face ID) richiede l'app mobile; sul web il controllo è la disconnessione da qui.", accountManagersNone: "Nessun manager", accountManagerEndSession: "Termina sessione", accountManagerRemove: "Rimuovi", accountManagerSessionEnded: "Sessione del manager terminata", accountManagerRemoved: "Manager rimosso", accountManagerAddPrompt: "Inserisci il numero di telefono del manager", accountManagerExists: "Questo numero è già un manager", accountManagerBadPhone: "Non è un cellulare irlandese", accountManagerSmsEmulated: "SMS al {phone}: il tuo codice di attivazione è {code}. In produzione arriva via SMS.", accountManagerPasswordShort: "Password troppo corta", accountManagerPasswordMin: "Almeno {n} caratteri",
        reqNumberLabel: "Richiesta n.", copyId: "Copia il numero della richiesta", idCopied: "Numero richiesta copiato", copyPartCode: "Copia", partCodeCopied: "Numero copiato", showPartCode: "Mostra il numero completo",
        agoNow: "adesso", agoHours: "{n} h", agoDays: "{n} g", agoToday: "oggi", daysLeft: "{n} g rimanenti",
        archive: "Archivio", openReplies: "Apri le risposte", renewRequest: "Crea una nuova richiesta per questo veicolo",
        expiredStatus: "Scaduta", expiredSection: "Scadute", relistRequest: "Ripubblica", purgeInDays: "Eliminazione tra {n} g",
        priceHintBuyer: "Prezzo di mercato stimato per questo ricambio dalle richieste nella tua regione: € {a} – € {b}.",
        priceHintSeller: "Prezzo medio di mercato: € {a}. Intervallo dei concorrenti: € {b} – € {c}.",
        views: ["visualizzazione", "visualizzazioni", "visualizzazioni"], replies: ["risposta", "risposte", "risposte"],
        bestPrice: "miglior prezzo", coverage: "{a} di {b} pezzi",
        showDetails: "Ricambi e prezzi", hideDetails: "Riduci",

        markReplied: "Ho risposto", markRepliedOn: "Risposto ✓", reportShort: "Segnala",

        answerTitle: "Rispondi alla richiesta", answerClose: "Chiudi",
        swipeHint: "Scorri la scheda a sinistra per archiviarla, a destra per salvarla tra i preferiti.",

        swipeHintClose: "Chiudi il suggerimento",
        swipeToSaved: "Ai preferiti",
        swipeToArchived: "All'archivio",
        swipeUndo: "Annulla",
        answerPartsLegend: "Ricambi che offri",
        answerDelivery: "Consegna", answerWarranty: "Garanzia di reso",
        answerDelPost: "Posta", answerDelCourier: "Corriere", answerDelPickup: "Ritiro",
        answerWarNone: "Nessuna", answerWarDays: "{a} giorni",
        answerPriceHeading: "Prezzo (IVA inclusa):", answerTotalLabel: "Totale:",
        answerSend: "Invia risposta", answerSendWithCount: "Invia risposta ({a})",
        answerConfirmTitle: "Controlla la risposta", answerConfirmBack: "Torna e modifica",
        answerDeliveryRow: "Consegna · {a}",
        answerReplyBtn: "Rispondi", answerRepliedBtn: "Risposta inviata", answerSentToast: "Risposta inviata",
        answerWarnFewParts: "{a} ricambi su {b} non vengono offerti. L'acquirente vedrà solo quelli selezionati.",
        answerWarnNoDelivery: "L'acquirente chiedeva la consegna e hai scelto il ritiro. Lo vedrà in rosso — la decisione è sua.",
        answerWarnNoWarranty: "L'acquirente chiedeva la garanzia di reso e hai scelto nessuna. Lo vedrà in rosso — la decisione è sua.",

        answerWarnConfirm: "L'acquirente chiedeva {a} e questa risposta non la comprende. Lo vedrà in rosso — la decisione è sua.",
        answerWarnNoPrice: "Ancora senza prezzo: {a}. La risposta non può essere inviata finché ogni ricambio spuntato e la consegna non hanno un prezzo.",
        saveFav: "Salva nei preferiti", removeFav: "Rimuovi dai preferiti",
        savedItems: "Salvati", savedArchive: "Archivio", savedClear: "Cancella tutto", savedMoveAllToArchive: "Sposta tutto nell'archivio", savedMovedToArchive: "{n} spostati nell'archivio",
        emptyRequests: "Ancora nessuna richiesta.", emptyReplies: "Ancora nessuna risposta. Arriveranno qui subito.",
        emptySaved: "Non hai ancora salvato nulla. Tocca il cuore vicino al prezzo.", emptySavedArchive: "L'archivio è vuoto.",
        localBadge: "Locale · {place}", repliesGroup: "Risposte a {id}", unreadBadge: "Nuove risposte",
    },
    pt: {
        account: "Conta", accountGreeting: "Olá, {name}", accountGreetingAnon: "A sua conta",
        tabAccount: "Conta", tabRequests: "Pedidos", tabMyRequests: "Os meus pedidos", tabReplies: "Respostas", tabSaved: "Guardados",
        croNumber: "Número CRO", emailLabel: "E-mail", languageLabel: "Idioma",
        emailInvalidFormat: "Formato de e-mail inválido.",
        emailChecking: "A verificar...",
        emailDisposable: "O registo com endereços de e-mail descartáveis não é permitido.",
        emailDomainNotFound: "O domínio de e-mail indicado não existe.",
        phoneInvalidFormat: "Formato inválido de número de telemóvel irlandês (são necessários 10 dígitos).",
        passwordRuleHint: "Mínimo 10 caracteres, maiúscula, minúscula, algarismo, símbolo especial",

        registerTab: "Registo",
        authCreateAccount: "Criar conta",
        authBackLabel: "Voltar",
        countryIreland: "Irlanda",
        countryUnitedKingdom: "Reino Unido",
        phoneCountryLabel: "Indicativo do país",
        phoneCountryLocked: "Apenas vendedores podem alterar o indicativo do país",
        emailDomainLabel: "Domínios de email",
        authAddressLabel: "Usar a minha localização",
        authPasswordEmpty: "Palavra-passe ainda não introduzida",
        authPasswordHide: "Ocultar palavra-passe",
        authPasswordInvalid: "A palavra-passe ainda não cumpre os requisitos",
        authPasswordShow: "Mostrar palavra-passe",
        authPasswordValid: "A palavra-passe cumpre os requisitos",
        passNeedLength: "Adicione pelo menos 10 caracteres",
        passNeedUpper: "Adicione uma maiúscula (A-Z)",
        passNeedLower: "Adicione uma minúscula (a-z)",
        passNeedDigit: "Adicione um algarismo (0-9)",
        passNeedSpec: "Adicione um símbolo especial",
        termsAgreeLead: "«Concordo com os ",
        termsAgreeTerms: "Termos de Utilização",
        termsAgreeMid: " e a ",
        termsAgreePrivacy: "Política de Privacidade",
        termsAgreeTail: " da Allparts.ie»",
        termsRequired: "Aceite os Termos de Utilização e a Política de Privacidade para continuar",
        toastPhoneCountry: "Introduza um número de telefone válido para",
        deleteConfirmGdpr: "De acordo com as regras do RGPD, a sua conta AllParts.ie será eliminada permanentemente em 28 dias. Nesse período pode cancelar a eliminação. Confirmar?",
        deleteModalConfirm: "Eliminar conta",
        deleteConfirmPasswordHint: "Introduza a palavra-passe atual para confirmar",
        deleteConfirmPasswordRequired: "Introduza a palavra-passe para confirmar",
        deleteConfirmCodeHint: "Para confirmar a eliminação, introduza o código de 4 dígitos enviado para o seu e-mail",
        deleteConfirmCodeSentTo: "Código enviado para {email}",
        deleteConfirmCodeRequired: "Introduza o código de 4 dígitos",
        deleteConfirmCodeIncorrect: "Código incorreto",
        deleteConfirmNoEmail: "Adicione um e-mail ao perfil — sem ele a eliminação não pode ser confirmada",

        /* The visible label is .sr-only and the field's name is its placeholder.
           These six are the strings that go in the boxes, and they are NEW
           strings rather than the old label keys: businessName / croNumber /
           emailLabel are reused as-is because they were already short enough
           to sit inside a field, and the four that were not -- 'Mobile number',
           'Standort / Eircode' and the rest -- would put a 22-character label
           into a 171px tab-width box on a 320px phone. See the note on
           .account-input::placeholder. */
        phName: "O seu nome", phPhone: "Telefone", phPassword: "Palavra-passe",
        phLocation: "Localização / Eircode", kbdHint: "Alterne o teclado para letras latinas.",
        logout: "Terminar sessão", logoutToast: "Sessão terminada", emptySellerRequestsByBrand: "Ainda não há pedidos para as suas marcas", sellerBrandsInScope: "Trabalha com: {brands}", accountManagersTitle: "Manager", accountManagersHint: "Os gerentes entram com telefone e palavra-passe, sem códigos repetidos.", accountDeviceLockNeedsApp: "O bloqueio do dispositivo (PIN / Face ID) exige a aplicação móvel; na web, terminar a sessão aqui é o controlo.", accountManagersNone: "Ainda não há gerentes", accountManagerEndSession: "Terminar sessão", accountManagerRemove: "Remover", accountManagerSessionEnded: "Sessão do gerente terminada", accountManagerRemoved: "Gerente removido", accountManagerAddPrompt: "Introduza o telefone do gerente", accountManagerExists: "Este número já é um gerente", accountManagerBadPhone: "Esse não é um telemóvel irlandês", accountManagerSmsEmulated: "SMS para {phone}: o seu código de ativação é {code}. Em produção chega por SMS.", accountManagerPasswordShort: "Palavra-passe demasiado curta", accountManagerPasswordMin: "Mínimo {n} caracteres",
        reqNumberLabel: "Pedido n.º", copyId: "Copiar o número do pedido", idCopied: "Número do pedido copiado", copyPartCode: "Copiar", partCodeCopied: "Número copiado", showPartCode: "Mostrar o número completo",
        agoNow: "agora mesmo", agoHours: "{n} h", agoDays: "{n} d", agoToday: "hoje", daysLeft: "faltam {n} d",
        archive: "Arquivo", openReplies: "Abrir respostas", renewRequest: "Criar um novo pedido para este carro",
        expiredStatus: "Expirado", expiredSection: "Expirados", relistRequest: "Republicar", purgeInDays: "Eliminado em {n} d",
        priceHintBuyer: "Preço de mercado estimado para esta peça com base nos pedidos da sua região: € {a} – € {b}.",
        priceHintSeller: "Preço médio de mercado: € {a}. Intervalo dos concorrentes: € {b} – € {c}.",
        views: ["visualização", "visualizações", "visualizações"], replies: ["resposta", "respostas", "respostas"],
        bestPrice: "melhor preço", coverage: "{a} de {b} peças",
        showDetails: "Peças e preços", hideDetails: "Ocultar",

        markReplied: "Respondi", markRepliedOn: "Respondido ✓", reportShort: "Denunciar",

        answerTitle: "Responder ao pedido", answerClose: "Fechar",
        swipeHint: "Deslize o cartão para a esquerda para o arquivar ou para a direita para o guardar nos favoritos.",

        swipeHintClose: "Fechar a dica",
        swipeToSaved: "Para os favoritos",
        swipeToArchived: "Para o arquivo",
        swipeUndo: "Anular",
        answerPartsLegend: "Peças que oferece",
        answerDelivery: "Entrega", answerWarranty: "Garantia de devolução",
        answerDelPost: "Correio", answerDelCourier: "Estafeta", answerDelPickup: "Levantamento",
        answerWarNone: "Nenhuma", answerWarDays: "{a} dias",
        answerPriceHeading: "Preço (com IVA):", answerTotalLabel: "Total:",
        answerSend: "Enviar resposta", answerSendWithCount: "Enviar resposta ({a})",
        answerConfirmTitle: "Verifique a resposta", answerConfirmBack: "Voltar e alterar",
        answerDeliveryRow: "Entrega · {a}",
        answerReplyBtn: "Responder", answerRepliedBtn: "Resposta enviada", answerSentToast: "Resposta enviada",
        answerWarnFewParts: "{a} de {b} peças não são oferecidas. O comprador verá apenas as assinaladas.",
        answerWarnNoDelivery: "O comprador pediu entrega e escolheu levantamento. Vai vê-lo a vermelho — a decisão é dele.",
        answerWarnNoWarranty: "O comprador pediu garantia de devolução e escolheu nenhuma. Vai vê-lo a vermelho — a decisão é dele.",

        answerWarnConfirm: "O comprador pediu {a} e esta resposta não inclui. Vai vê-lo a vermelho — a decisão é dele.",
        answerWarnNoPrice: "Ainda sem preço: {a}. A resposta não pode ser enviada até que cada peça assinalada e a entrega tenham preço.",
        saveFav: "Guardar nos favoritos", removeFav: "Remover dos favoritos",
        savedItems: "Guardados", savedArchive: "Arquivo", savedClear: "Apagar tudo", savedMoveAllToArchive: "Mover tudo para o arquivo", savedMovedToArchive: "{n} movidos para o arquivo",
        emptyRequests: "Ainda não há pedidos.", emptyReplies: "Ainda não há respostas. Aparecerão aqui assim que chegarem.",
        emptySaved: "Ainda não guardou nada. Toque no coração junto ao preço.", emptySavedArchive: "O arquivo está vazio.",
        localBadge: "Local · {place}", repliesGroup: "Respostas de {id}", unreadBadge: "Novas respostas",
    },
    pl: {
        account: "Konto", accountGreeting: "Cześć, {name}", accountGreetingAnon: "Twoje konto",
        tabAccount: "Konto", tabRequests: "Zapytania", tabMyRequests: "Moje zapytania", tabReplies: "Odpowiedzi", tabSaved: "Ulubione",
        croNumber: "Numer CRO", emailLabel: "E-mail", languageLabel: "Język",
        emailInvalidFormat: "Nieprawidłowy format adresu e-mail.",
        emailChecking: "Sprawdzanie...",
        emailDisposable: "Rejestracja na jednorazowe adresy e-mail jest niedozwolona.",
        emailDomainNotFound: "Podana domena e-mail nie istnieje.",
        phoneInvalidFormat: "Nieprawidłowy format irlandzkiego numeru komórkowego (wymagane 10 cyfr).",
        passwordRuleHint: "Minimum 10 znaków, wielka litera, mała litera, cyfra, symbol specjalny",

        registerTab: "Rejestracja",
        authCreateAccount: "Utwórz konto",
        authBackLabel: "Wstecz",
        countryIreland: "Irlandia",
        countryUnitedKingdom: "Wielka Brytania",
        phoneCountryLabel: "Kod kraju",
        phoneCountryLocked: "Tylko sprzedawcy mogą zmienić kod kraju",
        emailDomainLabel: "Domeny e-mail",
        authAddressLabel: "Użyj mojej lokalizacji",
        authPasswordEmpty: "Hasło jeszcze niewpisane",
        authPasswordHide: "Ukryj haslo",
        authPasswordInvalid: "Hasło jeszcze nie spełnia wymagań",
        authPasswordShow: "Pokaz haslo",
        authPasswordValid: "Hasło spełnia wymagania",
        passNeedLength: "Dodaj co najmniej 10 znaków",
        passNeedUpper: "Dodaj wielką literę (A-Z)",
        passNeedLower: "Dodaj małą literę (a-z)",
        passNeedDigit: "Dodaj cyfrę (0-9)",
        passNeedSpec: "Dodaj symbol specjalny",
        termsAgreeLead: "«Zgadzam się z ",
        termsAgreeTerms: "Warunkami korzystania",
        termsAgreeMid: " oraz ",
        termsAgreePrivacy: "Polityką prywatności",
        termsAgreeTail: " Allparts.ie»",
        termsRequired: "Zaakceptuj Warunki korzystania i Politykę prywatności, aby kontynuować",
        toastPhoneCountry: "Podaj prawidłowy numer telefonu dla",
        deleteConfirmGdpr: "Zgodnie z przepisami RODO Twoje konto AllParts.ie zostanie trwale usunięte za 28 dni. W tym czasie możesz anulować usunięcie. Potwierdzić?",
        deleteModalConfirm: "Usuń konto",
        deleteConfirmPasswordHint: "Wpisz aktualne hasło, aby potwierdzić",
        deleteConfirmPasswordRequired: "Wpisz hasło, aby potwierdzić",
        deleteConfirmCodeHint: "Aby potwierdzić usunięcie, wpisz 4-cyfrowy kod wysłany na Twój e-mail",
        deleteConfirmCodeSentTo: "Kod wysłano na {email}",
        deleteConfirmCodeRequired: "Wpisz 4-cyfrowy kod",
        deleteConfirmCodeIncorrect: "Nieprawidłowy kod",
        deleteConfirmNoEmail: "Dodaj adres e-mail w profilu — bez niego nie można potwierdzić usunięcia",

        /* The visible label is .sr-only and the field's name is its placeholder.
           These six are the strings that go in the boxes, and they are NEW
           strings rather than the old label keys: businessName / croNumber /
           emailLabel are reused as-is because they were already short enough
           to sit inside a field, and the four that were not -- 'Mobile number',
           'Standort / Eircode' and the rest -- would put a 22-character label
           into a 171px tab-width box on a 320px phone. See the note on
           .account-input::placeholder. */
        phName: "Twoje imię", phPhone: "Telefon", phPassword: "Hasło",
        phLocation: "Lokalizacja / Eircode", kbdHint: "Przełącz klawiaturę na litery łacińskie.",
        logout: "Wyloguj się", logoutToast: "Wylogowano", emptySellerRequestsByBrand: "Brak jeszcze zapytań dla Twoich marek", sellerBrandsInScope: "Pracujesz z: {brands}", accountManagersTitle: "Menedżerowie", accountManagersHint: "Menedżerowie logują się telefonem i hasłem, bez powtarzanych kodów.", accountDeviceLockNeedsApp: "Blokada urządzenia (PIN / Face ID) wymaga aplikacji mobilnej; w sieci kontrolą jest wylogowanie tutaj.", accountManagersNone: "Brak menedżerów", accountManagerEndSession: "Zakończ sesję", accountManagerRemove: "Usuń", accountManagerSessionEnded: "Sesja menedżera zakończona", accountManagerRemoved: "Menedżer usunięty", accountManagerAddPrompt: "Podaj numer telefonu menedżera", accountManagerExists: "Ten numer to już menedżer", accountManagerBadPhone: "To nie jest irlandzki numer komórkowy", accountManagerSmsEmulated: "SMS na {phone}: kod aktywacyjny to {code}. W działającym systemie przychodzi SMS-em.", accountManagerPasswordShort: "Hasło jest za krótkie", accountManagerPasswordMin: "Minimum {n} znaków",
        reqNumberLabel: "Zapytanie nr", copyId: "Kopiuj numer zapytania", idCopied: "Numer zapytania skopiowany", copyPartCode: "Kopiuj", partCodeCopied: "Numer skopiowany", showPartCode: "Pokaż pełny numer",
        agoNow: "przed chwilą", agoHours: "{n} godz.", agoDays: "{n} dn", agoToday: "dziś", daysLeft: "zostało {n} dn",
        archive: "Archiwum", openReplies: "Otwórz odpowiedzi", renewRequest: "Utwórz nowe zapytanie dla tego auta",
        expiredStatus: "Wygasło", expiredSection: "Wygasłe", relistRequest: "Wystaw ponownie", purgeInDays: "Usunięcie za {n} dn",
        priceHintBuyer: "Szacowana cena rynkowa tej części na podstawie zapytań w Twoim regionie: € {a} – € {b}.",
        priceHintSeller: "Średnia cena rynkowa: € {a}. Przedział cen konkurencji: € {b} – € {c}.",
        views: ["wyświetlenie", "wyświetlenia", "wyświetleń"], replies: ["odpowiedź", "odpowiedzi", "odpowiedzi"],
        bestPrice: "najlepsza cena", coverage: "{a} z {b} części",
        showDetails: "Części i ceny", hideDetails: "Zwiń",

        markReplied: "Odpowiedziałem", markRepliedOn: "Odpowiedziano ✓", reportShort: "Zgłoś",

        answerTitle: "Odpowiedź na zapytanie", answerClose: "Zamknij",
        swipeHint: "Przesuń kartkę w lewo, aby ją zarchiwizować, lub w prawo, aby ją zapisać.",

        swipeHintClose: "Zamknij podpowiedz",
        swipeToSaved: "Do ulubionych",
        swipeToArchived: "Do archiwum",
        swipeUndo: "Cofnij",
        answerPartsLegend: "Części, które oferujesz",
        answerDelivery: "Dostawa", answerWarranty: "Gwarancja zwrotu",
        answerDelPost: "Poczta", answerDelCourier: "Kurier", answerDelPickup: "Odbiór osobisty",
        answerWarNone: "Brak", answerWarDays: "{a} dni",
        answerPriceHeading: "Cena (z VAT):", answerTotalLabel: "Razem:",
        answerSend: "Wyślij odpowiedź", answerSendWithCount: "Wyślij odpowiedź ({a})",
        answerConfirmTitle: "Sprawdź odpowiedź", answerConfirmBack: "Wróć i zmień",
        answerDeliveryRow: "Dostawa · {a}",
        answerReplyBtn: "Odpowiedz", answerRepliedBtn: "Odpowiedź wysłana", answerSentToast: "Odpowiedź wysłana",
        answerWarnFewParts: "{a} z {b} części nie są oferowane. Kupujący zobaczy tylko zaznaczone.",
        answerWarnNoDelivery: "Kupujący prosił o dostawę, a wybrano odbiór osobisty. Zobaczy to na czerwono — decyzja jest po jego stronie.",
        answerWarnNoWarranty: "Kupujący prosił o gwarancję zwrotu, a wybrano brak. Zobaczy to na czerwono — decyzja jest po jego stronie.",

        answerWarnConfirm: "Kupujący prosił o {a}, a w tej odpowiedzi tego nie ma. Zobaczy to na czerwono — decyzja jest po jego stronie.",
        answerWarnNoPrice: "Jeszcze bez ceny: {a}. Odpowiedzi nie można wysłać, dopóki każda zaznaczona część i dostawa nie będą miały ceny.",
        saveFav: "Dodaj do ulubionych", removeFav: "Usuń z ulubionych",
        savedItems: "Zapisane", savedArchive: "Archiwum", savedClear: "Wyczyść wszystko", savedMoveAllToArchive: "Przenieś wszystko do archiwum", savedMovedToArchive: "Przeniesiono do archiwum: {n}",
        emptyRequests: "Brak zapytań.", emptyReplies: "Brak odpowiedzi. Pojawią się tutaj od razu.",
        emptySaved: "Nic jeszcze nie zapisano. Dotknij serca obok ceny.", emptySavedArchive: "Archiwum jest puste.",
        localBadge: "Lokalnie · {place}", repliesGroup: "Odpowiedzi do {id}", unreadBadge: "Nowe odpowiedzi",
    },
    ro: {
        account: "Cont", accountGreeting: "Bună, {name}", accountGreetingAnon: "Contul tău",
        tabAccount: "Cont", tabRequests: "Cereri", tabMyRequests: "Cererile mele", tabReplies: "Răspunsuri", tabSaved: "Favorite",
        croNumber: "Număr CRO", emailLabel: "E-mail", languageLabel: "Limbă",
        emailInvalidFormat: "Format de e-mail nevalid.",
        emailChecking: "Se verifica...",
        emailDisposable: "Înregistrarea cu adrese de e-mail de unică folosință nu este permisă.",
        emailDomainNotFound: "Domeniul de e-mail introdus nu există.",
        phoneInvalidFormat: "Format nevalid al numărului de mobil irlandez (sunt necesare 10 cifre).",
        passwordRuleHint: "Minimum 10 caractere, majusculă, minusculă, cifră, simbol special",

        registerTab: "Înregistrare",
        authCreateAccount: "Creează cont",
        authBackLabel: "Înapoi",
        countryIreland: "Irlanda",
        countryUnitedKingdom: "Regatul Unit",
        phoneCountryLabel: "Prefixul țării",
        phoneCountryLocked: "Doar vânzătorii pot schimba prefixul țării",
        emailDomainLabel: "Domenii de e-mail",
        authAddressLabel: "Folosește locația mea",
        authPasswordEmpty: "Parola nu a fost încă introdusă",
        authPasswordHide: "Ascunde parola",
        authPasswordInvalid: "Parola nu respectă încă cerințele",
        authPasswordShow: "Arată parola",
        authPasswordValid: "Parola respectă cerințele",
        passNeedLength: "Adaugă cel puțin 10 caractere",
        passNeedUpper: "Adaugă o literă mare (A-Z)",
        passNeedLower: "Adaugă o literă mică (a-z)",
        passNeedDigit: "Adaugă o cifră (0-9)",
        passNeedSpec: "Adaugă un simbol special",
        termsAgreeLead: "«Sunt de acord cu ",
        termsAgreeTerms: "Termenii de utilizare",
        termsAgreeMid: " și ",
        termsAgreePrivacy: "Politica de confidențialitate",
        termsAgreeTail: " Allparts.ie»",
        termsRequired: "Vă rugăm să acceptați Termenii de utilizare și Politica de confidențialitate pentru a continua",
        toastPhoneCountry: "Introduceți un număr de telefon valid pentru",
        deleteConfirmGdpr: "Conform regulilor GDPR, contul tău AllParts.ie va fi șters definitiv în 28 de zile. În acest interval poți anula ștergerea. Confirmi?",
        deleteModalConfirm: "Șterge contul",
        deleteConfirmPasswordHint: "Introduceți parola actuală pentru a confirma",
        deleteConfirmPasswordRequired: "Introduceți parola pentru a confirma",
        deleteConfirmCodeHint: "Pentru a confirma ștergerea, introduceți codul din 4 cifre trimis pe e-mailul dvs.",
        deleteConfirmCodeSentTo: "Cod trimis la {email}",
        deleteConfirmCodeRequired: "Introduceți codul din 4 cifre",
        deleteConfirmCodeIncorrect: "Cod incorect",
        deleteConfirmNoEmail: "Adăugați o adresă de e-mail în profil — fără ea ștergerea nu poate fi confirmată",

        /* The visible label is .sr-only and the field's name is its placeholder.
           These six are the strings that go in the boxes, and they are NEW
           strings rather than the old label keys: businessName / croNumber /
           emailLabel are reused as-is because they were already short enough
           to sit inside a field, and the four that were not -- 'Mobile number',
           'Standort / Eircode' and the rest -- would put a 22-character label
           into a 171px tab-width box on a 320px phone. See the note on
           .account-input::placeholder. */
        phName: "Numele dumne", phPhone: "Telefon", phPassword: "Parolă",
        phLocation: "Locație / Eircode", kbdHint: "Comutați tastatura la litere latine.",
        logout: "Deconectare", logoutToast: "Ai fost deconectat", emptySellerRequestsByBrand: "Încă nicio solicitare pentru mărcile tale", sellerBrandsInScope: "Lucrezi cu: {brands}", accountManagersTitle: "Manageri", accountManagersHint: "Managerii intră cu telefonul și parola, fără coduri repetate.", accountDeviceLockNeedsApp: "Blocarea dispozitivului (PIN / Face ID) necesită aplicația mobilă; pe web, deconectarea de aici este controlul.", accountManagersNone: "Încă niciun manager", accountManagerEndSession: "Încheie sesiunea", accountManagerRemove: "Șterge", accountManagerSessionEnded: "Sesiunea managerului încheiată", accountManagerRemoved: "Manager șters", accountManagerAddPrompt: "Introduceți numărul de telefon al managerului", accountManagerExists: "Acest număr este deja manager", accountManagerBadPhone: "Nu este un mobil irlandez", accountManagerSmsEmulated: "SMS la {phone}: codul dvs. de activare este {code}. În sistemul real ajunge prin SMS.", accountManagerPasswordShort: "Parola este prea scurtă", accountManagerPasswordMin: "Minimum {n} caractere",
        reqNumberLabel: "Cerere nr.", copyId: "Copiază numărul cererii", idCopied: "Numărul cererii a fost copiado", copyPartCode: "Copiază", partCodeCopied: "Număr copiat", showPartCode: "Arată numărul complet",
        agoNow: "chiar acum", agoHours: "{n} h", agoDays: "{n} z", agoToday: "azi", daysLeft: "au rămas {n} z",
        archive: "Arhivă", openReplies: "Deschide răspunsurile", renewRequest: "Creează o cerere nouă pentru această mașină",
        expiredStatus: "Expirat", expiredSection: "Expirate", relistRequest: "Republică", purgeInDays: "Ștergere în {n} z",
        priceHintBuyer: "Preț de piață estimat pentru această piesă, pe baza cererilor din regiunea ta: € {a} – € {b}.",
        priceHintSeller: "Preț mediu de piață: € {a}. Intervalul concurenței: € {b} – € {c}.",
        views: ["vizualizare", "vizualizări", "vizualizări"], replies: ["răspuns", "răspunsuri", "răspunsuri"],
        bestPrice: "cel mai bun preț", coverage: "{a} din {b} piese",
        showDetails: "Piese și prețuri", hideDetails: "Restrânge",

        markReplied: "Am răspuns", markRepliedOn: "Răspuns ✓", reportShort: "Raportează",

        answerTitle: "Răspunde la cerere", answerClose: "Închide",
        swipeHint: "Glisați cardul spre stânga pentru a-l arhiva sau spre dreapta pentru a-l salva.",

        swipeHintClose: "Închide indiciul",
        swipeToSaved: "La favorite",
        swipeToArchived: "În arhivă",
        swipeUndo: "Anulează",
        answerPartsLegend: "Piese pe care le oferiți",
        answerDelivery: "Livrare", answerWarranty: "Garanție de returnare",
        answerDelPost: "Poștă", answerDelCourier: "Curier", answerDelPickup: "Ridicare",
        answerWarNone: "Fără", answerWarDays: "{a} zile",
        answerPriceHeading: "Preț (cu TVA):", answerTotalLabel: "Total:",
        answerSend: "Trimite răspunsul", answerSendWithCount: "Trimite răspunsul ({a})",
        answerConfirmTitle: "Verificați răspunsul", answerConfirmBack: "Înapoi și modificați",
        answerDeliveryRow: "Livrare · {a}",
        answerReplyBtn: "Răspunde", answerRepliedBtn: "Răspuns trimis", answerSentToast: "Răspuns trimis",
        answerWarnFewParts: "{a} din {b} piese nu sunt oferite. Cumpărătorul va vedea doar cele bifate.",
        answerWarnNoDelivery: "Cumpărătorul a cerut livrare și ați ales ridicare. Va vedea asta în roșu — decizia îi aparține.",
        answerWarnNoWarranty: "Cumpărătorul a cerut garanție de returnare și ați ales fără. Va vedea asta în roșu — decizia îi aparține.",

        answerWarnConfirm: "Cumpărătorul a cerut {a}, iar acest răspuns nu le include. Va vedea asta în roșu — decizia îi aparține.",
        answerWarnNoPrice: "Încă fără preț: {a}. Răspunsul nu poate fi trimis până când fiecare piesă bifată și livrarea au preț.",
        saveFav: "Adaugă la favorite", removeFav: "Elimină din favorite",
        savedItems: "Salvate", savedArchive: "Arhivă", savedClear: "Șterge tot", savedMoveAllToArchive: "Mută tot în arhivă", savedMovedToArchive: "{n} mutate în arhivă",
        emptyRequests: "Încă nu există cereri.", emptyReplies: "Încă nu există răspunsuri. Vor apărea aici imediat.",
        emptySaved: "Nimic salvat încă. Atinge inima de lângă preț.", emptySavedArchive: "Arhiva este goală.",
        localBadge: "Local · {place}", repliesGroup: "Răspunsuri la {id}", unreadBadge: "Răspunsuri noi",
    },
    lt: {
        account: "Paskyra", accountGreeting: "Sveiki, {name}", accountGreetingAnon: "Jūsų paskyra",
        tabAccount: "Paskyra", tabRequests: "Užklausos", tabMyRequests: "Mano užklausos", tabReplies: "Atsakymai", tabSaved: "Išsaugoti",
        croNumber: "CRO numeris", emailLabel: "El. paštas", languageLabel: "Kalba",
        emailInvalidFormat: "Neteisingas el. pašto adreso formatas.",
        emailChecking: "Tikrinama...",
        emailDisposable: "Registracija su laikinojo galiojimo paštu draudžiama.",
        emailDomainNotFound: "Nurodytas el. pašto domenas neegzistuoja.",
        phoneInvalidFormat: "Neteisingas Airijos mobiliojo telefono numerio formatas (reikalinga 10 skaitmenų).",
        passwordRuleHint: "Mažiausiai 10 simbolių, didžioji raidė, mažoji raidė, skaitmuo, specialus simbolis",

        registerTab: "Registruotis",
        authCreateAccount: "Sukurti paskyrą",
        authBackLabel: "Atgal",
        countryIreland: "Airija",
        countryUnitedKingdom: "Jungtinė Karalystė",
        phoneCountryLabel: "Šalies kodas",
        phoneCountryLocked: "Šalies kodą gali keisti tik pardavėjas",
        emailDomainLabel: "El. pašto domenai",
        authAddressLabel: "Naudoti mano vietą",
        authPasswordEmpty: "Slaptažis dar įvestas",
        authPasswordHide: "Slėpti slaptažį",

        authPasswordInvalid: "Slaptažis dar neatitinka reikalavimų",
        authPasswordShow: "Rodyti slaptažį",
        authPasswordValid: "Slaptažis atitinka reikalavimus",
        passNeedLength: "Pridėkite bent 10 simbolių",
        passNeedUpper: "Pridėkite didžiąją raidę (A-Z)",
        passNeedLower: "Pridėkite mažąją raidę (a-z)",
        passNeedDigit: "Pridėkite skaitmenį (0-9)",
        passNeedSpec: "Pridėkite specialų simbolį",
        termsAgreeLead: "«Sutariu su ",
        termsAgreeTerms: "Naudojimo sąlygomis",
        termsAgreeMid: " ir ",
        termsAgreePrivacy: "Privatumo politika",
        termsAgreeTail: " Allparts.ie»",
        termsRequired: "Norėdami tęsti, priimkite Naudojimo sąlygas ir Privatumo politiką",
        toastPhoneCountry: "Įveskite tinkamą telefono numerį šaliai",
        deleteConfirmGdpr: "Pagal GDPR taisykles jūsų AllParts.ie paskyra bus negrįžtamai ištrinta po 28 dienų. Per šį laiką galite atšaukti ištrynimą. Patvirtinti?",
        deleteModalConfirm: "Ištrinti paskyrą",
        deleteConfirmPasswordHint: "Įveskite dabartinį slaptažodį, kad patvirtintumėte",
        deleteConfirmPasswordRequired: "Įveskite slaptažodį, kad patvirtintumėte",
        deleteConfirmCodeHint: "Kad patvirtintumėte ištrynimą, įveskite 4 skaitmenų kodą, išsiųstą į jūsų el. paštą",
        deleteConfirmCodeSentTo: "Kodas išsiųstas į {email}",
        deleteConfirmCodeRequired: "Įveskite 4 skaitmenų kodą",
        deleteConfirmCodeIncorrect: "Neteisingas kodas",
        deleteConfirmNoEmail: "Pridėkite el. pašto adresą į profilį — be jo ištrynimo patvirtinti negalima",

        /* The visible label is .sr-only and the field's name is its placeholder.
           These six are the strings that go in the boxes, and they are NEW
           strings rather than the old label keys: businessName / croNumber /
           emailLabel are reused as-is because they were already short enough
           to sit inside a field, and the four that were not -- 'Mobile number',
           'Standort / Eircode' and the rest -- would put a 22-character label
           into a 171px tab-width box on a 320px phone. See the note on
           .account-input::placeholder. */
        phName: "Jūsų vardas", phPhone: "Telefonas", phPassword: "Slaptažodė",
        phLocation: "Vieta / Eircode", kbdHint: "Perjunkite klaviatūrą į lotyniškas raides.",
        logout: "Atsijungti", logoutToast: "Atsijungėte", emptySellerRequestsByBrand: "Kol kas dar nėra užklausų jūsų markėms", sellerBrandsInScope: "Dirbate su: {brands}", accountManagersTitle: "Vadybininkai", accountManagersHint: "Vadybininkai prisijungia telefonu ir slaptažažiu, be pas kartų kartų kodų.", accountDeviceLockNeedsApp: "Įrenginio užrakintas (PIN / Face ID) – mobiliosios programėlys reikalavimas; internete kontrolė – atsijungimas čia.", accountManagersNone: "Vadybininkų dar nėra", accountManagerEndSession: "Baigti seansą", accountManagerRemove: "Pašalinti", accountManagerSessionEnded: "Vadybininko seansas baigtas", accountManagerRemoved: "Vadybininkas pašalintas", accountManagerAddPrompt: "Įveskite vadybininko telefono numerį", accountManagerExists: "Šis numeris jau yra vadybininkas", accountManagerBadPhone: "Tai ne airiškas mobilusis telefonas", accountManagerSmsEmulated: "SMS į {phone}: jūsų aktyvinimo kodas yra {code}. Veikiančioje sistemoje jis atsiunčiamas SMS.", accountManagerPasswordShort: "Slaptažodis per trumpas", accountManagerPasswordMin: "Mažiausiai {n} simboliai",
        reqNumberLabel: "Užklausa Nr.", copyId: "Kopijuoti užklausos numerį", idCopied: "Užklausos numeris nukopijuotas", copyPartCode: "Kopijuoti", partCodeCopied: "Numeris nukopijuotas", showPartCode: "Rodyti visą numerį",
        agoNow: "ką tik", agoHours: "{n} val.", agoDays: "{n} d.", agoToday: "šiandien", daysLeft: "liko {n} d.",
        archive: "Archyvas", openReplies: "Atverti atsakymus", renewRequest: "Sukurti naują užklausą šiam automobiliui",
        expiredStatus: "Pasibaigė", expiredSection: "Pasibaigę", relistRequest: "Paskelbti iš naujo", purgeInDays: "Pašalinama po {n} d.",
        priceHintBuyer: "Numatoma šios dalies rinkos kaina pagal užklausas jūsų regione: € {a} – € {b}.",
        priceHintSeller: "Vidutinė rinkos kaina: € {a}. Konkurentų kainų intervalas: € {b} – € {c}.",
        views: ["peržiūra", "peržiūros", "peržiūrų"], replies: ["atsakymas", "atsakymai", "atsakymų"],
        bestPrice: "geriausia kaina", coverage: "{a} iš {b} detalių",
        showDetails: "Detalės ir kainos", hideDetails: "Sutraukti",

        markReplied: "Atsakiau", markRepliedOn: "Atsakyta ✓", reportShort: "Pranešti",

        answerTitle: "Atsakyti į užklausą", answerClose: "Uždaryti",
        swipeHint: "Slinkite kortelę kairė, kad ją archyvuotumėte, arba dešinė, kad ją būtumėte išsaugoję.",

        swipeHintClose: "Uzdarykite patarima",
        swipeToSaved: "I megiamusius",
        swipeToArchived: "Iarchyva",
        swipeUndo: "AtsisakyTI",
        answerPartsLegend: "Detalės, kurias siūlote",
        answerDelivery: "Pristatymas", answerWarranty: "Grąžinimo garantija",
        answerDelPost: "Paštas", answerDelCourier: "Kurjeris", answerDelPickup: "Atsiėmimas",
        answerWarNone: "Nėra", answerWarDays: "{a} d.",
        answerPriceHeading: "Kaina (su PVM):", answerTotalLabel: "Iš viso:",
        answerSend: "Siųsti atsakymą", answerSendWithCount: "Siųsti atsakymą ({a})",
        answerConfirmTitle: "Patikrinkite atsakymą", answerConfirmBack: "Grįžti ir keisti",
        answerDeliveryRow: "Pristatymas · {a}",
        answerReplyBtn: "Atsakyti", answerRepliedBtn: "Atsakymas išsiųstas", answerSentToast: "Atsakymas išsiųstas",
        answerWarnFewParts: "{a} iš {b} detalių neatiduodamos. Pirkėjas matys tik pažymėtąsias.",
        answerWarnNoDelivery: "Pirkėjas prašė pristatymo, o jūs pasirinkote atsiėmimą. Jis tai pamatys raudona — sprendimas jo.",
        answerWarnNoWarranty: "Pirkėjas prašė grąžinimo garantijos, o jūs pasirinkote „Nėra“. Jis tai pamatys raudona — sprendimas jo.",

        answerWarnConfirm: "Pirkėjas prašė {a}, o šiame atsakyme to nėra. Jis tai pamatys raudona — sprendimas jo.",
        answerWarnNoPrice: "Dar nėra kainos: {a}. Atsakymo negalima išsiųsti, kol kiekviena pažymėta detalė ir pristatymas neturės kainos.",
        saveFav: "Įrašyti į išsaugotus", removeFav: "Pašalinti iš išsaugotų",
        savedItems: "Issaugoti", savedArchive: "Archyvas", savedClear: "Išvalyti viską", savedMoveAllToArchive: "Perkelti viską į archyvą", savedMovedToArchive: "Perkelta į archyvą: {n}",
        emptyRequests: "Užklausų dar nėra.", emptyReplies: "Atsakymų dar nėra. Jie atsiras čia iš karto.",
        emptySaved: "Dar nieko neišsaugota. Paspauskite širdį šalia kainos.", emptySavedArchive: "Archyvas tuščias.",
        localBadge: "Vietinis · {place}", repliesGroup: "Atsakymai į {id}", unreadBadge: "Nauji atsakymai",
    },
    zh: {
        account: "账户", accountGreeting: "你好，{name}", accountGreetingAnon: "您的账户",
        tabAccount: "账户", tabRequests: "请求", tabMyRequests: "我的请求", tabReplies: "回复", tabSaved: "收藏",
        croNumber: "CRO 编号", emailLabel: "邮箱", languageLabel: "语言",
        emailInvalidFormat: "电子邮箱格式不正确。",
        emailChecking: "正在验证...",
        emailDisposable: "禁止使用一次性邮箱注册。",
        emailDomainNotFound: "该邮箱域名不存在。",
        phoneInvalidFormat: "爱尔兰手机号码格式无效（需要 10 位数字）。",
        passwordRuleHint: "至少 10 个字符、大写字母、小写字母、数字、特殊符号",

        registerTab: "注册",
        authCreateAccount: "创建账户",
        authBackLabel: "返回",
        countryIreland: "爱尔兰",
        countryUnitedKingdom: "英国",
        phoneCountryLabel: "国家代码",
        phoneCountryLocked: "只有卖家可以更改国家代码",
        emailDomainLabel: "邮箱域名",
        authAddressLabel: "使用我的位置",
        authPasswordEmpty: "尚未输入密码",
        authPasswordHide: "隐藏密码",
        authPasswordInvalid: "密码尚未符合要求",
        authPasswordShow: "显示密码",
        authPasswordValid: "密码符合要求",
        passNeedLength: "至少添加 10 个字符",
        passNeedUpper: "添加一个大写字母 (A-Z)",
        passNeedLower: "添加一个小写字母 (a-z)",
        passNeedDigit: "添加一个数字 (0-9)",
        passNeedSpec: "添加一个特殊符号",
        termsAgreeLead: "«我同意 ",
        termsAgreeTerms: "使用条款",
        termsAgreeMid: " 和 ",
        termsAgreePrivacy: "隐私政策",
        termsAgreeTail: "»",
        termsRequired: "请接受使用条款和隐私政策以继续",
        toastPhoneCountry: "请输入有效的电话区号",
        deleteConfirmGdpr: "根据 GDPR 规定，您的 AllParts.ie 账户将在 28 天后被永久删除。在此期间您可以取消删除。确认吗？",
        deleteModalConfirm: "删除账户",
        deleteConfirmPasswordHint: "请输入当前密码以确认",
        deleteConfirmPasswordRequired: "请输入密码以确认",
        deleteConfirmCodeHint: "如需确认删除，请输入发送到你 Email 的 4 位验证码",
        deleteConfirmCodeSentTo: "验证码已发送至 {email}",
        deleteConfirmCodeRequired: "请输入 4 位验证码",
        deleteConfirmCodeIncorrect: "验证码错误",
        deleteConfirmNoEmail: "请先在资料中填写 Email — 没有邮箱无法确认删除",

        /* The visible label is .sr-only and the field's name is its placeholder.
           These six are the strings that go in the boxes, and they are NEW
           strings rather than the old label keys: businessName / croNumber /
           emailLabel are reused as-is because they were already short enough
           to sit inside a field, and the four that were not -- 'Mobile number',
           'Standort / Eircode' and the rest -- would put a 22-character label
           into a 171px tab-width box on a 320px phone. See the note on
           .account-input::placeholder. */
        phName: "您的姓名", phPhone: "电话", phPassword: "密码",
        phLocation: "位置 / Eircode", kbdHint: "请将键盘切换为拉丁字母。",
        logout: "退出登录", logoutToast: "您已退出登录", emptySellerRequestsByBrand: "暂时没有符合您品牌的请求", sellerBrandsInScope: "您经营的品牌：{brands}", accountManagersTitle: "经理", accountManagersHint: "经理使用电话和密码登录，不重复验证码。", accountDeviceLockNeedsApp: "设备锁定（PIN / Face ID）需要移动应用；在网页上，从这里注销会话即为管控手段。", accountManagersNone: "暂无经理", accountManagerEndSession: "结束会话", accountManagerRemove: "删除", accountManagerSessionEnded: "经理会话已结束", accountManagerRemoved: "经理已删除", accountManagerAddPrompt: "请输入经理的电话", accountManagerExists: "该号码已是经理", accountManagerBadPhone: "这不是爱尔兰手机号", accountManagerSmsEmulated: "短信已发送至 {phone}，激活码为 {code}。正式环境中将通过短信送达。", accountManagerPasswordShort: "密码过短", accountManagerPasswordMin: "至少 {n} 个字符",
        reqNumberLabel: "请求编号", copyId: "复制请求编号", idCopied: "请求编号已复制", copyPartCode: "复制", partCodeCopied: "编号已复制", showPartCode: "显示完整编号",
        agoNow: "刚刚", agoHours: "{n} 小时", agoDays: "{n} 天", agoToday: "今天", daysLeft: "还剩 {n} 天",
        archive: "归档", openReplies: "查看回复", renewRequest: "为这辆车创建新请求",
        expiredStatus: "已过期", expiredSection: "已过期", relistRequest: "重新发布", purgeInDays: "{n} 天后删除",
        priceHintBuyer: "根据您所在地区的请求，该零件的预估市场价格为 € {a} – € {b}。",
        priceHintSeller: "市场平均价：€ {a}。竞争对手价格区间：€ {b} – € {c}。",
        views: ["次查看", "次查看", "次查看"], replies: ["条回复", "条回复", "条回复"],
        bestPrice: "最低价", coverage: "{b} 个配件中的 {a} 个",
        showDetails: "配件与价格", hideDetails: "收起",

        markReplied: "我已回复", markRepliedOn: "已回复 ✓", reportShort: "举报",

        answerTitle: "回复询价", answerClose: "关闭",
        swipeHint: "向左滑动卡片将其归档，向右滑动将其收藏。",

        swipeHintClose: "关闭",
        swipeToSaved: "加入收藏",
        swipeToArchived: "移到归档",
        swipeUndo: "撤销",
        answerPartsLegend: "您提供的配件",
        answerDelivery: "配送", answerWarranty: "退货保修",
        answerDelPost: "邮寄", answerDelCourier: "快递", answerDelPickup: "自取",
        answerWarNone: "无", answerWarDays: "{a} 天",
        answerPriceHeading: "价格（含增值税）：", answerTotalLabel: "合计：",
        answerSend: "发送回复", answerSendWithCount: "发送回复（{a}）",
        answerConfirmTitle: "请核对回复", answerConfirmBack: "返回修改",
        answerDeliveryRow: "配送 · {a}",
        answerReplyBtn: "回复", answerRepliedBtn: "回复已发送", answerSentToast: "回复已发送",
        answerWarnFewParts: "{b} 件中有 {a} 件未提供。买家只会看到已勾选的。",
        answerWarnNoDelivery: "买家要求配送，而您选择了自取。买家会看到红色提示——由对方决定。",
        answerWarnNoWarranty: "买家要求退货保修，而您选择了「无」。买家会看到红色提示——由对方决定。",

        answerWarnConfirm: "买家要求 {a}，而本次回复未包含。买家会看到红色提示——由对方决定。",
        answerWarnNoPrice: "还没有价格：{a}。在每个勾选的配件和配送都有价格之前，无法发送回复。",
        saveFav: "加入收藏", removeFav: "取消收藏",
        savedItems: "已收藏", savedArchive: "归档", savedClear: "全部清除", savedMoveAllToArchive: "全部移到归档", savedMovedToArchive: "已将 {n} 项移到归档",
        emptyRequests: "还没有请求。", emptyReplies: "还没有回复。回复到达后会立即显示在这里。",
        emptySaved: "还没有收藏。点击价格旁边的心形图标。", emptySavedArchive: "归档为空。",
        localBadge: "本地 · {place}", repliesGroup: "{id} 的回复", unreadBadge: "新回复",
    }
};
Object.keys(cabinetTranslations).forEach(language => {
    translations[language] = { ...translations[language], ...cabinetTranslations[language] };
});

/* «СКРЫТЫЕ» -- ЧЕТВЁРТАЯ ПАПКА (ТЗ, раздел 3). Отдельный пакет, а не
   одиннадцать правок внутри cabinetTranslations: ключей пять, и все они
   существуют только ради одной папки. Пакет вливается тем же способом, что
   regFieldTranslations, и обязан идти ПОСЛЕ cabinetTranslations -- иначе
   следующий merge затрёт его английским фолбэком.

   ПОЧЕМУ НЕ savedArchive. «Архив» остался в продукте как раздел просроченных
   запросов внутри «Запросов» (renderRequestsPanel), и переиспользовать его
   слово для папки значило бы называть две разные вещи одним именем. У
   «Скрытых» свой словарь. */
const hiddenFolderTranslations = {
    en: { tabHidden: "Hidden", emptyHidden: "Nothing hidden yet.", savedMoveAllToHidden: "Move all to hidden", savedMovedToHidden: "Moved {n} to hidden", swipeToHidden: "To hidden" },
    ru: { tabHidden: "Скрытые", emptyHidden: "В скрытых пока пусто.", savedMoveAllToHidden: "Перенести всё в скрытые", savedMovedToHidden: "Перенесено в скрытые: {n}", swipeToHidden: "В скрытые" },
    zh: { tabHidden: "已隐藏", emptyHidden: "暂无隐藏内容。", savedMoveAllToHidden: "全部隐藏", savedMovedToHidden: "已隐藏 {n} 项", swipeToHidden: "移到隐藏" },
    it: { tabHidden: "Nascosti", emptyHidden: "Niente di nascosto per ora.", savedMoveAllToHidden: "Nascondi tutto", savedMovedToHidden: "{n} nascosti", swipeToHidden: "Ai nascosti" },
    de: { tabHidden: "Versteckt", emptyHidden: "Noch nichts versteckt.", savedMoveAllToHidden: "Alle ausblenden", savedMovedToHidden: "{n} ausgeblendet", swipeToHidden: "Ausblenden" },
    lt: { tabHidden: "Paslėpti", emptyHidden: "Kol kas nieko nepaslėpta.", savedMoveAllToHidden: "Paslėpti viską", savedMovedToHidden: "Paslėpta: {n}", swipeToHidden: "Į paslėptus" },
    pt: { tabHidden: "Ocultos", emptyHidden: "Ainda nada oculto.", savedMoveAllToHidden: "Ocultar tudo", savedMovedToHidden: "{n} ocultados", swipeToHidden: "Para ocultos" },
    es: { tabHidden: "Ocultos", emptyHidden: "Nada oculto todavía.", savedMoveAllToHidden: "Ocultar todo", savedMovedToHidden: "{n} ocultos", swipeToHidden: "A ocultos" },
    pl: { tabHidden: "Ukryte", emptyHidden: "Nic nie zostało jeszcze ukryte.", savedMoveAllToHidden: "Ukryj wszystko", savedMovedToHidden: "Ukryto: {n}", swipeToHidden: "Do ukrytych" },
    fr: { tabHidden: "Masqués", emptyHidden: "Rien de masqué pour l'instant.", savedMoveAllToHidden: "Tout masquer", savedMovedToHidden: "{n} masqués", swipeToHidden: "Masquer" },
    ro: { tabHidden: "Ascunse", emptyHidden: "Nimic ascuns încă.", savedMoveAllToHidden: "Ascunde tot", savedMovedToHidden: "{n} ascunse", swipeToHidden: "La ascunse" }
};
Object.keys(hiddenFolderTranslations).forEach(language => {
    translations[language] = { ...translations[language], ...hiddenFolderTranslations[language] };
});

const cardPreviewTranslations = {
    en: { viewDetails: "View details", callBtn: "Call", whatsappBtn: "WhatsApp", reportQuoteFrom: "Report quote from {name}", answerCondNew: "New", answerCondReconditioned: "Reconditioned", answerCondUsed: "Used", answerPartComment: "Comment", answerPartPhotos: "Photos", answerPositionReset: "Reset", answerPositionSave: "Save", answerConditionLabel: "Condition", answerWarrantyDaysShort: "days", answerPartCommentPlaceholder: "Add a comment about this part…", answerPhotoPreview: "Preview {a}", answerPhotoLimit: "You can add up to {a} photos", answerPriceTooLow: "Price must be at least € 10", answerPriceRequired: "Enter a price", answerWarrantyRequired: "Choose a return warranty", answerConfirmOffer: "You offer", answerConfirmMissing: "No offer", answerConfirmCoverage: "The buyer will see offers for {a} of {b} parts." },
    ru: { viewDetails: "Посмотреть детали", callBtn: "Позвонить", whatsappBtn: "WhatsApp", reportQuoteFrom: "Пожаловаться на предложение от {name}", answerCondNew: "Новое", answerCondReconditioned: "Восстановленное", answerCondUsed: "Б/У", answerPartComment: "Комментарий", answerPartPhotos: "Фото", answerPositionReset: "Сбросить", answerPositionSave: "Сохранить", answerConditionLabel: "Состояние", answerWarrantyDaysShort: "дн", answerPartCommentPlaceholder: "Добавить комментарий к детали…", answerPhotoPreview: "Превью {a}", answerPhotoLimit: "Можно добавить не более {a} фото", answerPriceTooLow: "Цена должна быть не менее € 10", answerPriceRequired: "Укажите цену", answerWarrantyRequired: "Выберите гарантию возврата", answerConfirmOffer: "Вы предлагаете", answerConfirmMissing: "Без предложения", answerConfirmCoverage: "Покупатель увидит предложения по {a} из {b} позиций." },
    de: { viewDetails: "Details ansehen", callBtn: "Anrufen", whatsappBtn: "WhatsApp", reportQuoteFrom: "Angebot von {name} melden", answerCondNew: "Neu", answerCondReconditioned: "Aufbereitet", answerCondUsed: "Gebraucht", answerPartComment: "Kommentar", answerPartPhotos: "Fotos", answerPositionReset: "Zurücksetzen", answerPositionSave: "Speichern", answerConditionLabel: "Zustand", answerWarrantyDaysShort: "Tage", answerPartCommentPlaceholder: "Kommentar zum Teil hinzufügen…", answerPhotoPreview: "Vorschau {a}", answerPhotoLimit: "Sie können bis zu {a} Fotos hinzufügen", answerPriceTooLow: "Der Preis muss mindestens € 10 betragen", answerPriceRequired: "Preis eingeben", answerWarrantyRequired: "Rückgabegarantie auswählen", answerConfirmOffer: "Sie bieten an", answerConfirmMissing: "Kein Angebot", answerConfirmCoverage: "Der Käufer sieht Angebote für {a} von {b} Teilen." },
    fr: { viewDetails: "Voir les détails", callBtn: "Appeler", whatsappBtn: "WhatsApp", reportQuoteFrom: "Signaler l’offre de {name}", answerCondNew: "Neuf", answerCondReconditioned: "Reconditionné", answerCondUsed: "Occasion", answerPartComment: "Commentaire", answerPartPhotos: "Photos", answerPositionReset: "Réinitialiser", answerPositionSave: "Enregistrer", answerConditionLabel: "État", answerWarrantyDaysShort: "j", answerPartCommentPlaceholder: "Ajouter un commentaire sur cette pièce…", answerPhotoPreview: "Aperçu {a}", answerPhotoLimit: "Vous pouvez ajouter jusqu’à {a} photos", answerPriceTooLow: "Le prix doit être d’au moins € 10", answerPriceRequired: "Saisissez un prix", answerWarrantyRequired: "Choisissez une garantie de retour", answerConfirmOffer: "Vous proposez", answerConfirmMissing: "Sans offre", answerConfirmCoverage: "L’acheteur verra des offres pour {a} pièces sur {b}." },
    es: { viewDetails: "Ver detalles", callBtn: "Llamar", whatsappBtn: "WhatsApp", reportQuoteFrom: "Denunciar la oferta de {name}", answerCondNew: "Nuevo", answerCondReconditioned: "Reacondicionado", answerCondUsed: "Usado", answerPartComment: "Comentario", answerPartPhotos: "Fotos", answerPositionReset: "Restablecer", answerPositionSave: "Guardar", answerConditionLabel: "Estado", answerWarrantyDaysShort: "días", answerPartCommentPlaceholder: "Añadir un comentario sobre la pieza…", answerPhotoPreview: "Vista previa {a}", answerPhotoLimit: "Puedes añadir hasta {a} fotos", answerPriceTooLow: "El precio debe ser de al menos € 10", answerPriceRequired: "Introduce un precio", answerWarrantyRequired: "Elige una garantía de devolución", answerConfirmOffer: "Ofreces", answerConfirmMissing: "Sin oferta", answerConfirmCoverage: "El comprador verá ofertas para {a} de {b} piezas." },
    it: { viewDetails: "Vedi dettagli", callBtn: "Chiama", whatsappBtn: "WhatsApp", reportQuoteFrom: "Segnala l’offerta di {name}", answerCondNew: "Nuovo", answerCondReconditioned: "Ricondizionato", answerCondUsed: "Usato", answerPartComment: "Commento", answerPartPhotos: "Foto", answerPositionReset: "Reimposta", answerPositionSave: "Salva", answerConditionLabel: "Condizione", answerWarrantyDaysShort: "giorni", answerPartCommentPlaceholder: "Aggiungi un commento al ricambio…", answerPhotoPreview: "Anteprima {a}", answerPhotoLimit: "Puoi aggiungere fino a {a} foto", answerPriceTooLow: "Il prezzo deve essere almeno € 10", answerPriceRequired: "Inserisci un prezzo", answerWarrantyRequired: "Scegli una garanzia di reso", answerConfirmOffer: "Offri", answerConfirmMissing: "Nessuna offerta", answerConfirmCoverage: "L’acquirente vedrà offerte per {a} parti su {b}." },
    pt: { viewDetails: "Ver detalhes", callBtn: "Ligar", whatsappBtn: "WhatsApp", reportQuoteFrom: "Denunciar a oferta de {name}", answerCondNew: "Novo", answerCondReconditioned: "Recondicionado", answerCondUsed: "Usado", answerPartComment: "Comentário", answerPartPhotos: "Fotos", answerPositionReset: "Repor", answerPositionSave: "Guardar", answerConditionLabel: "Estado", answerWarrantyDaysShort: "dias", answerPartCommentPlaceholder: "Adicionar comentário sobre a peça…", answerPhotoPreview: "Pré-visualização {a}", answerPhotoLimit: "Pode adicionar até {a} fotos", answerPriceTooLow: "O preço tem de ser pelo menos € 10", answerPriceRequired: "Introduza um preço", answerWarrantyRequired: "Escolha uma garantia de devolução", answerConfirmOffer: "Está a oferecer", answerConfirmMissing: "Sem oferta", answerConfirmCoverage: "O comprador verá ofertas para {a} de {b} peças." },
    pl: { viewDetails: "Zobacz szczegóły", callBtn: "Zadzwoń", whatsappBtn: "WhatsApp", reportQuoteFrom: "Zgłoś ofertę od {name}", answerCondNew: "Nowe", answerCondReconditioned: "Regenerowane", answerCondUsed: "Używane", answerPartComment: "Komentarz", answerPartPhotos: "Zdjęcia", answerPositionReset: "Resetuj", answerPositionSave: "Zapisz", answerConditionLabel: "Stan", answerWarrantyDaysShort: "dni", answerPartCommentPlaceholder: "Dodaj komentarz do części…", answerPhotoPreview: "Podgląd {a}", answerPhotoLimit: "Możesz dodać maksymalnie {a} zdjęcia", answerPriceTooLow: "Cena musi wynosić co najmniej € 10", answerPriceRequired: "Wpisz cenę", answerWarrantyRequired: "Wybierz gwarancję zwrotu", answerConfirmOffer: "Oferujesz", answerConfirmMissing: "Brak oferty", answerConfirmCoverage: "Kupujący zobaczy oferty dla {a} z {b} części." },
    ro: { viewDetails: "Vezi detaliile", callBtn: "Sună", whatsappBtn: "WhatsApp", reportQuoteFrom: "Raportează oferta de la {name}", answerCondNew: "Nou", answerCondReconditioned: "Recondiționat", answerCondUsed: "Folosit", answerPartComment: "Comentariu", answerPartPhotos: "Fotografii", answerPositionReset: "Resetează", answerPositionSave: "Salvează", answerConditionLabel: "Stare", answerWarrantyDaysShort: "zile", answerPartCommentPlaceholder: "Adaugă un comentariu despre piesă…", answerPhotoPreview: "Previzualizare {a}", answerPhotoLimit: "Poți adăuga până la {a} fotografii", answerPriceTooLow: "Prețul trebuie să fie de cel puțin € 10", answerPriceRequired: "Introdu un preț", answerWarrantyRequired: "Alege o garanție de retur", answerConfirmOffer: "Oferiți", answerConfirmMissing: "Fără ofertă", answerConfirmCoverage: "Cumpărătorul va vedea oferte pentru {a} din {b} piese." },
    lt: { viewDetails: "Peržiūrėti detales", callBtn: "Skambinti", whatsappBtn: "WhatsApp", reportQuoteFrom: "Pranešti apie {name} pasiūlymą", answerCondNew: "Nauja", answerCondReconditioned: "Atnaujinta", answerCondUsed: "Naudota", answerPartComment: "Komentaras", answerPartPhotos: "Nuotraukos", answerPositionReset: "Atkurti", answerPositionSave: "Išsaugoti", answerConditionLabel: "Būklė", answerWarrantyDaysShort: "d.", answerPartCommentPlaceholder: "Pridėti detalės komentarą…", answerPhotoPreview: "Peržiūra {a}", answerPhotoLimit: "Galite pridėti iki {a} nuotraukų", answerPriceTooLow: "Kaina turi būti bent € 10", answerPriceRequired: "Įveskite kainą", answerWarrantyRequired: "Pasirinkite grąžinimo garantiją", answerConfirmOffer: "Siūlote", answerConfirmMissing: "Be pasiūlymo", answerConfirmCoverage: "Pirkėjas matys pasiūlymus {a} iš {b} dalių." },
    zh: { viewDetails: "查看详情", callBtn: "拨打", whatsappBtn: "WhatsApp", reportQuoteFrom: "举报来自 {name} 的报价", answerCondNew: "全新", answerCondReconditioned: "翻新", answerCondUsed: "二手", answerPartComment: "备注", answerPartPhotos: "照片", answerPositionReset: "重置", answerPositionSave: "保存", answerConditionLabel: "成色", answerWarrantyDaysShort: "天", answerPartCommentPlaceholder: "添加零件备注…", answerPhotoPreview: "预览 {a}", answerPhotoLimit: "最多可添加 {a} 张照片", answerPriceTooLow: "价格至少为 10 欧元", answerPriceRequired: "请输入价格", answerWarrantyRequired: "请选择退货保障", answerConfirmOffer: "您提供", answerConfirmMissing: "未报价", answerConfirmCoverage: "买家将看到 {b} 个零件中的 {a} 个报价。" }
};
Object.keys(cardPreviewTranslations).forEach(language => {
    translations[language] = { ...translations[language], ...cardPreviewTranslations[language] };
});

const buyerRequestDetailsTranslations = {
    en: { requestDetailsTitle: "Request details" },
    ru: { requestDetailsTitle: "Детали заявки" },
    de: { requestDetailsTitle: "Details zur Anfrage" },
    fr: { requestDetailsTitle: "Détails de la demande" },
    es: { requestDetailsTitle: "Detalles de la solicitud" },
    it: { requestDetailsTitle: "Dettagli della richiesta" },
    pt: { requestDetailsTitle: "Detalhes do pedido" },
    pl: { requestDetailsTitle: "Szczegóły zapytania" },
    ro: { requestDetailsTitle: "Detaliile cererii" },
    lt: { requestDetailsTitle: "Užklausos informacija" },
    zh: { requestDetailsTitle: "请求详情" }
};
Object.keys(buyerRequestDetailsTranslations).forEach(language => {
    translations[language] = { ...translations[language], ...buyerRequestDetailsTranslations[language] };
});

const archiveClearConfirmTranslations = {
    en: { savedClearConfirmTitle: "Clear archive?", savedClearConfirmBody: "All archived items will be removed from this device. This action cannot be undone." },
    ru: { savedClearConfirmTitle: "Очистить архив?", savedClearConfirmBody: "Все элементы архива будут удалены с этого устройства. Это действие нельзя отменить." },
    de: { savedClearConfirmTitle: "Archiv leeren?", savedClearConfirmBody: "Alle archivierten Elemente werden von diesem Gerät entfernt. Dieser Schritt kann nicht rückgängig gemacht werden." },
    fr: { savedClearConfirmTitle: "Vider les archives ?", savedClearConfirmBody: "Tous les éléments archivés seront supprimés de cet appareil. Cette action est irréversible." },
    es: { savedClearConfirmTitle: "¿Vaciar el archivo?", savedClearConfirmBody: "Todos los elementos archivados se eliminarán de este dispositivo. Esta acción no se puede deshacer." },
    it: { savedClearConfirmTitle: "Svuotare l’archivio?", savedClearConfirmBody: "Tutti gli elementi archiviati verranno rimossi da questo dispositivo. L'operazione non può essere annullata." },
    pt: { savedClearConfirmTitle: "Limpar o arquivo?", savedClearConfirmBody: "Todos os itens arquivados serão removidos deste dispositivo. Esta ação não pode ser desfeita." },
    pl: { savedClearConfirmTitle: "Wyczyścić archiwum?", savedClearConfirmBody: "Wszystkie zarchiwizowane elementy zostaną usunięte z tego urządzenia. Tej czynności nie można cofnąć." },
    ro: { savedClearConfirmTitle: "Goliți arhiva?", savedClearConfirmBody: "Toate elementele arhivate vor fi eliminate de pe acest dispozitiv. Acțiunea nu poate fi anulată." },
    lt: { savedClearConfirmTitle: "Išvalyti archyvą?", savedClearConfirmBody: "Visi archyvuoti elementai bus pašalinti iš šio įrenginio. Šio veiksmo atšaukti negalima." },
    zh: { savedClearConfirmTitle: "清空归档？", savedClearConfirmBody: "此设备上的所有归档内容都将被删除。此操作无法撤销。" }
};
Object.keys(archiveClearConfirmTranslations).forEach(language => {
    translations[language] = { ...translations[language], ...archiveClearConfirmTranslations[language] };
});

const archivedContactsHintTranslations = {
    en: { contactsHidden: "Move the reply to Saved to see the seller's contact details" },
    ru: { contactsHidden: "Перенесите ответ в «Избранные», чтобы увидеть контакты продавца" },
    de: { contactsHidden: "Verschieben Sie das Angebot in „Gespeichert“, um die Kontaktdaten des Verkäufers zu sehen" },
    fr: { contactsHidden: "Déplacez la réponse dans « Enregistrés » pour voir les coordonnées du vendeur" },
    es: { contactsHidden: "Mueve la respuesta a «Guardados» para ver los datos de contacto del vendedor" },
    it: { contactsHidden: "Sposta la risposta in «Salvati» per vedere i contatti del venditore" },
    pt: { contactsHidden: "Mova a resposta para «Guardados» para ver os contactos do vendedor" },
    pl: { contactsHidden: "Przenieś odpowiedź do „Zapisanych”, aby zobaczyć dane kontaktowe sprzedawcy" },
    ro: { contactsHidden: "Mută răspunsul în „Salvate” pentru a vedea datele de contact ale vânzătorului" },
    lt: { contactsHidden: "Perkelkite atsakymą į „Išsaugoti“, kad pamatytumėte pardavėjo kontaktus" },
    zh: { contactsHidden: "将回复移至“已收藏”，以查看卖家的联系方式" }
};
Object.keys(archivedContactsHintTranslations).forEach(language => {
    translations[language] = { ...translations[language], ...archivedContactsHintTranslations[language] };
});

const crossNumberTranslations = {
    en: { crossNumberLabel: "Cross-reference:" },
    ru: { crossNumberLabel: "Кросс-номер:" },
    zh: { crossNumberLabel: "交叉参考号：" },
    it: { crossNumberLabel: "Riferimento incrociato:" },
    de: { crossNumberLabel: "Vergleichsnummer:" },
    lt: { crossNumberLabel: "Kryžminis numeris:" },
    pt: { crossNumberLabel: "Referência cruzada:" },
    es: { crossNumberLabel: "Referencia cruzada:" },
    pl: { crossNumberLabel: "Numer zamienny:" },
    fr: { crossNumberLabel: "Référence croisée :" },
    ro: { crossNumberLabel: "Referință încrucișată:" }
};
Object.keys(crossNumberTranslations).forEach(language => {
    translations[language] = { ...translations[language], ...crossNumberTranslations[language] };
});

const ownReplyCardTranslations = {
    en: { answerWarrantyMeta: "Warranty {a}", answerInfoLabel: "Info", answerHideDetails: "Hide details", answerDetailsAndPhotos: "Details and photos", answerPhotoOnly: "Only photos can be attached to a reply." },
    ru: { answerWarrantyMeta: "Гарантия {a}", answerInfoLabel: "Инфо", answerHideDetails: "Свернуть детали", answerDetailsAndPhotos: "Детали и фото", answerPhotoOnly: "К ответу можно прикреплять только фотографии." },
    de: { answerWarrantyMeta: "Garantie {a}", answerInfoLabel: "Info", answerHideDetails: "Details ausblenden", answerDetailsAndPhotos: "Details und Fotos", answerPhotoOnly: "An eine Antwort können nur Fotos angehängt werden." },
    fr: { answerWarrantyMeta: "Garantie {a}", answerInfoLabel: "Info", answerHideDetails: "Masquer les détails", answerDetailsAndPhotos: "Détails et photos", answerPhotoOnly: "Seules des photos peuvent être jointes à une réponse." },
    es: { answerWarrantyMeta: "Garantía {a}", answerInfoLabel: "Info", answerHideDetails: "Ocultar detalles", answerDetailsAndPhotos: "Detalles y fotos", answerPhotoOnly: "Solo se pueden adjuntar fotos a una respuesta." },
    it: { answerWarrantyMeta: "Garanzia {a}", answerInfoLabel: "Info", answerHideDetails: "Nascondi dettagli", answerDetailsAndPhotos: "Dettagli e foto", answerPhotoOnly: "A una risposta si possono allegare solo foto." },
    pt: { answerWarrantyMeta: "Garantia {a}", answerInfoLabel: "Info", answerHideDetails: "Ocultar detalhes", answerDetailsAndPhotos: "Detalhes e fotos", answerPhotoOnly: "Só é possível anexar fotografias à resposta." },
    pl: { answerWarrantyMeta: "Gwarancja {a}", answerInfoLabel: "Info", answerHideDetails: "Ukryj szczegóły", answerDetailsAndPhotos: "Szczegóły i zdjęcia", answerPhotoOnly: "Do odpowiedzi można dołączyć tylko zdjęcia." },
    ro: { answerWarrantyMeta: "Garanție {a}", answerInfoLabel: "Info", answerHideDetails: "Ascunde detaliile", answerDetailsAndPhotos: "Detalii și fotografii", answerPhotoOnly: "La răspuns se pot atașa doar fotografii." },
    lt: { answerWarrantyMeta: "Garantija {a}", answerInfoLabel: "Info", answerHideDetails: "Slėpti detales", answerDetailsAndPhotos: "Detalės ir nuotraukos", answerPhotoOnly: "Prie atsakymo galima pridėti tik nuotraukas." },
    zh: { answerWarrantyMeta: "保修 {a}", answerInfoLabel: "信息", answerHideDetails: "收起详情", answerDetailsAndPhotos: "详情和照片", answerPhotoOnly: "回复中只能附加照片。" }
};
Object.keys(ownReplyCardTranslations).forEach(language => {
    translations[language] = { ...translations[language], ...ownReplyCardTranslations[language] };
});

/* THE THREE AUDIENCE PLATES ON WIZARD STEP 1. A pack of their own, for the
   same reason the photo and VIN strings have one: these six strings exist
   nowhere else, and the main object carries only en and ru, so without a pack
   here the other nine languages would fall back to T()'s English and every
   buyer outside Ireland would read the plates in English inside a Russian or
   Lithuanian sheet.

   THREE PLATES, NOT TWO, and the middle one is the whole reason this pack grew.
   "Supplier / Trade" was two audiences wearing one label: the people who sell
   and the people who buy for a living were asked the same question and then
   walked down the same four-step verification funnel. Trade buys parts and
   needs one; Seller is the only audience the moderation load is about.

   THE WORDS ARE LONG BECAUSE THE PLATES ARE SHORT. Each plate is a title and a
   sentence, and the sentence is what tells a garage owner which of the three
   they are -- a plate reading only "Trade" would be answered by everybody who
   recognises themselves in it, which is nobody.

   The English is the copy as specified. The other ten are mine -- the brief
   gave the English only -- so they are the strings to check first if a
   translator is going to look at anything. "OEM parts suppliers" is left in
   Latin in all eleven, because OEM is how the word is written on a part and on
   a packing slip in every one of these markets. */
const roleTileTranslations = {
    en: {
        rolePrivateTitle: "Private buyers",
        rolePrivateSub: "Car owners looking for parts.",
        roleTradeTitle: "Trade buyers",
        roleTradeSub: "Taxi drivers, mechanics, garages and businesses looking for parts.",
        roleSellerTitle: "Seller",
        roleSellerSub: "For certified dismantlers, motor factors, dealers & OEM parts suppliers."
    },
    ru: {
        rolePrivateTitle: "Покупатели (частные)",
        rolePrivateSub: "Владельцы автомобилей, ищущие запчасти.",
        roleTradeTitle: "Покупатели (бизнес)",
        roleTradeSub: "Таксисты, механики, гаражи и компании, ищущие запчасти.",
        roleSellerTitle: "Продавец",
        roleSellerSub: "Для сертифицированных разборок, поставщиков запчастей, диллеров и OEM-поставщиков."
    },
    zh: {
        rolePrivateTitle: "私人买家",
        rolePrivateSub: "适用于寻找配件的车主。",
        roleTradeTitle: "商家买家",
        roleTradeSub: "适用于出租车司机、维修技师、修理厂和企业采购配件。",
        roleSellerTitle: "卖家",
        roleSellerSub: "适用于认证拆车厂、汽配供应商、经销商和 OEM 配件供应商。"
    },
    it: {
        rolePrivateTitle: "Acquirenti privati",
        rolePrivateSub: "Per proprietari di auto in cerca di ricambi.",
        roleTradeTitle: "Acquirenti professionali",
        roleTradeSub: "Per tassisti, meccanici, officine e aziende in cerca di ricambi.",
        roleSellerTitle: "Venditore",
        roleSellerSub: "Per autodemolitori certificati, distributori ricambi, rivenditori e fornitori OEM."
    },
    de: {
        rolePrivateTitle: "Privatkäufer",
        rolePrivateSub: "Für Autofahrer auf der Suche nach Teilen.",
        roleTradeTitle: "Gewerbliche Käufer",
        roleTradeSub: "Für Taxifahrer, Mechaniker, Werkstätten und Unternehmen auf der Suche nach Teilen.",
        roleSellerTitle: "Verkäufer",
        roleSellerSub: "Für zertifizierte Autoverwertungen, Teilehändler, Händler und OEM-Teelieferanten."
    },
    lt: {
        rolePrivateTitle: "Privatūs pirkėjai",
        rolePrivateSub: "Automobilių savininkams, iekantiems dalių.",
        roleTradeTitle: "Verslo pirkėjai",
        roleTradeSub: "Taksistams, mechanikams, autoservisams ir įmonėms, iekantiems dalių.",
        roleSellerTitle: "Pardavėjas",
        roleSellerSub: "Sertifikuotiems autosalynams, dalių tiekėjams, dealeriams ir OEM tiekėjams."
    },
    pt: {
        rolePrivateTitle: "Compradores particulares",
        rolePrivateSub: "Para proprietários de veículos à procura de peças.",
        roleTradeTitle: "Compradores profissionais",
        roleTradeSub: "Para taxistas, mecânicos, oficinas e empresas à procura de peças.",
        roleSellerTitle: "Vendedor",
        roleSellerSub: "Para desmonteiras certificadas, distribuidores de peças, revendedores e fornecedores OEM."
    },
    es: {
        rolePrivateTitle: "Compradores particulares",
        rolePrivateSub: "Para propietarios de coches en busca de recambios.",
        roleTradeTitle: "Compradores profesionales",
        roleTradeSub: "Para taxistas, mecánicos, talleres y empresas en busca de recambios.",
        roleSellerTitle: "Vendedor",
        roleSellerSub: "Para desguaces certificados, mayoristas de recambios, concesionarios y proveedores OEM."
    },
    pl: {
        rolePrivateTitle: "Kupcy prywatni",
        rolePrivateSub: "Dla właścicieli samochodów szukających części.",
        roleTradeTitle: "Kupcy profesjonalni",
        roleTradeSub: "Dla taksówkarzy, mechaników, warsztatów i firm szukających części.",
        roleSellerTitle: "Sprzedawca",
        roleSellerSub: "Dla certyfikowanych stacji recyklingu, hurtowni części, dealerów i dostawców OEM."
    },
    fr: {
        rolePrivateTitle: "Particuliers",
        rolePrivateSub: "Pour les particuliers à la recherche de pièces.",
        roleTradeTitle: "Acheteurs professionnels",
        roleTradeSub: "Pour les chauffeurs de taxi, mécaniciens, garages et entreprises à la recherche de pièces.",
        roleSellerTitle: "Vendeur",
        roleSellerSub: "Pour les casses agréées, les grossistes en pièces, les concessionnaires et les fournisseurs OEM."
    },
    ro: {
        rolePrivateTitle: "Cumpărători privați",
        rolePrivateSub: "Pentru proprietari de auto care caut piese.",
        roleTradeTitle: "Cumpărători profesioniști",
        roleTradeSub: "Pentru șoferi de taxi, mecanici, service-uri și companii care caut piese.",
        roleSellerTitle: "Vânzător",
        roleSellerSub: "Pentru dezmembrări certificate, distribuitori de piese, dealeri și furnizori OEM."
    }
};
Object.keys(roleTileTranslations).forEach(language => {
    translations[language] = { ...translations[language], ...roleTileTranslations[language] };
});

/* THE ROLE-CHOICE STEP OF THE AUTH SHEET, in all eleven languages.

   Two cards on wizard step 0 choose who is registering, and the button of the
   sheet then says what that choice will do: "Create buyer account" / "Create
   seller account" instead of the generic Continue. The card titles, subtitles
   and the check-lists inside each card live here too -- the previous role
   screen is gone, and the texts that replace it stand in the markup of the
   prototype nowhere else, so without a pack here nine languages would read the
   Russian defaults or fall back to English.

   The lists are arrays like views / replies above: the five audiences of the
   buyer card and the four of the seller card are short labels, and the Check
   glyph stays Latin in every pack because it is a symbol, not a word.

   authContinueLogin repeats here for all eleven packs: the base translations
   object carries it in en (Continue) and ru (Продолжить) only, so the nine
   single-line packs have been reading "Continue" on every later registration
   step. The same key is repeated across packs exactly like authCreateAccount
   in cabinetTranslations, and the merge below overwrites the English fallback
   with the local word. */
const roleChoiceTranslations = {
    en: {
        authContinueLogin: "Continue",
        authCreateBuyerAccount: "Create buyer account",
        authCreateSellerAccount: "Create seller account",
        roleChoiceBuyerTitle: "Buyer", roleChoiceSellerTitle: "Seller", roleChoiceBuyerList: ["Private • Taxi • Mechanic", "Service • Business"],
        roleChoiceSellerList: ["Dismantler • Motor Factor", "Dealer • OEM Trader"],
        authGreeting: "Welcome",
        authLocationHidden: "Address hidden from suppliers",
        


authTrustBadge: "Phone, email & address are ",

authTrustBadgeLink: "hidden from suppliers",

otpTitle: "Verification Code", otpSubPrefix: "Enter the 4-digit code sent to",

otpChangeNumber: "Change number", otpConfirm: "Confirm and Sign In",

        
    },
    ru: {
        authContinueLogin: "Продолжить",
        authCreateBuyerAccount: "Создать аккаунт покупателя",
        authCreateSellerAccount: "Создать аккаунт продавца",
        roleChoiceBuyerTitle: "Покупатель",
        roleChoiceSellerTitle: "Продавец",
        roleChoiceBuyerList: ["Частник • Такси • Механик", "Сервис • Компания"],
        roleChoiceSellerList: ["Авторазборка • Автомагазин", "Дилер • OEM-трейдер"],
        authGreeting: "Привет",
        authLocationHidden: "Адрес скрыт от поставщиков",
        


authTrustBadge: "Телефон, email и адрес ",

authTrustBadgeLink: "скрыты от поставщиков",

otpTitle: "Код подтверждения", otpSubPrefix: "Введите 4-значный код, отправленный на",

otpChangeNumber: "Изменить номер", otpConfirm: "Подтвердить и войти",

        
    },
    zh: {
        authContinueLogin: "继续",
        authCreateBuyerAccount: "创建买家账户",
        authCreateSellerAccount: "创建卖家账户",
        roleChoiceBuyerTitle: "买家",
        roleChoiceSellerTitle: "卖家",
        roleChoiceBuyerList: ["个人 • 出租车 • 维修技师", "服务站 • 企业"],
        roleChoiceSellerList: ["拆车厂 • 汽车配件店", "经销商 • OEM 贸易商"],
        authGreeting: "欢迎",
        authLocationHidden: "地址对供应商隐藏",
        


authTrustBadge: "电话、邮箱和地址",

authTrustBadgeLink: "对供应商隐藏",

otpTitle: "验证码", otpSubPrefix: "输入发送到以下号码的 4 位验证码",

otpChangeNumber: "更改号码", otpConfirm: "确认并登录",

        
    },
    it: {
        authContinueLogin: "Continua",
        authCreateBuyerAccount: "Crea account acquirente",
        authCreateSellerAccount: "Crea account venditore",
        roleChoiceBuyerTitle: "Acquirente",
        roleChoiceSellerTitle: "Venditore",
        roleChoiceBuyerList: ["Privato • Taxi • Meccanico", "Servizio • Azienda"],
        roleChoiceSellerList: ["Demolitore • Negozio ricambi", "Concessionario • Rivenditore OEM"],
        authGreeting: "Ciao",
        authLocationHidden: "Indirizzo nascosto ai fornitori",
        


authTrustBadge: "Telefono, e-mail e indirizzo ",

authTrustBadgeLink: "non visibili ai fornitori",

otpTitle: "Codice di verifica", otpSubPrefix: "Inserisci il codice di 4 cifre inviato a",

otpChangeNumber: "Cambia numero", otpConfirm: "Conferma e accedi",

        
    },
    de: {
        authContinueLogin: "Weiter",
        authCreateBuyerAccount: "Käuferkonto erstellen",
        authCreateSellerAccount: "Verkäuferkonto erstellen",
        roleChoiceBuyerTitle: "Käufer",
        roleChoiceSellerTitle: "Verkäufer",
        roleChoiceBuyerList: ["Privat • Taxi • Mechaniker", "Service • Unternehmen"],
        roleChoiceSellerList: ["Autoverwertung • Autoteile-Shop", "Händler • OEM-Händler"],
        authGreeting: "Hallo",
        authLocationHidden: "Adresse für Lieferanten verborgen",
        


authTrustBadge: "Telefon, E-Mail und Adresse ",

authTrustBadgeLink: "sind für Lieferanten nicht sichtbar",

otpTitle: "Bestätigungscode", otpSubPrefix: "Geben Sie den 4-stelligen Code ein, gesendet an",

otpChangeNumber: "Nummer ändern", otpConfirm: "Bestätigen und anmelden",

        
    },
    lt: {
        authContinueLogin: "Tęsti",
        authCreateBuyerAccount: "Sukurti pirkėjo paskyrą",
        authCreateSellerAccount: "Sukurti pardavėjo paskyrą",
        roleChoiceBuyerTitle: "Pirkėjas",
        roleChoiceSellerTitle: "Pardavėjas",
        roleChoiceBuyerList: ["Privatus • Taksi • Mechanikas", "Servisas • Įmonė"],
        roleChoiceSellerList: ["Automobilių perdirbėjas • Autodalių parduotuvė", "Prekybininkas • OEM prekybininkas"],
        authGreeting: "Labas",
        authLocationHidden: "Adresas paslėptas nuo tiekėjų",
        


authTrustBadge: "Telefonas, el. paštas ir adresas ",

authTrustBadgeLink: "nematomi tiekėjams",

otpTitle: "Patvirtinimo kodas", otpSubPrefix: "Įveskite 4 skaitmenų kodą, išsiųstą į",

otpChangeNumber: "Keisti numerį", otpConfirm: "Patvirtinkite ir prisijunkite",

        
    },
    pt: {
        authContinueLogin: "Continuar",
        authCreateBuyerAccount: "Criar conta de comprador",
        authCreateSellerAccount: "Criar conta de vendedor",
        roleChoiceBuyerTitle: "Comprador", roleChoiceSellerTitle: "Vendedor", roleChoiceBuyerList: ["Particular • Táxi • Mecânico", "Serviço • Empresa"],
        roleChoiceSellerList: ["Desmonteira • Loja de peças", "Concessionário • Negociante OEM"],
        authGreeting: "Olá",
        authLocationHidden: "Endereço oculto aos fornecedores",
        


authTrustBadge: "Telefone, e-mail e endereço ",

authTrustBadgeLink: "ocultados dos fornecedores",

otpTitle: "Código de verificação", otpSubPrefix: "Introduza o código de 4 dígitos enviado para",

otpChangeNumber: "Alterar número", otpConfirm: "Confirmar e iniciar sessão",

        
    },
    es: {
        authContinueLogin: "Continuar",
        authCreateBuyerAccount: "Crear cuenta de comprador",
        authCreateSellerAccount: "Crear cuenta de vendedor",
        roleChoiceBuyerTitle: "Comprador",
        roleChoiceSellerTitle: "Vendedor",
        roleChoiceBuyerList: ["Particular • Taxi • Mecánico", "Servicio • Empresa"],
        roleChoiceSellerList: ["Desguace • Tienda de recambios", "Concesionario • Distribuidor OEM"],
        authGreeting: "Hola",
        authLocationHidden: "Dirección oculta para proveedores",
        


authTrustBadge: "Teléfono, correo electrónico y dirección ",

authTrustBadgeLink: "ocultos a los proveedores",

otpTitle: "Código de verificación", otpSubPrefix: "Introduce el código de 4 dígitos enviado al",

otpChangeNumber: "Cambiar número", otpConfirm: "Confirmar e iniciar sesión",

        
    },
    pl: {
        authContinueLogin: "Kontynuuj",
        authCreateBuyerAccount: "Utwórz konto kupującego",
        authCreateSellerAccount: "Utwórz konto sprzedawcy",
        roleChoiceBuyerTitle: "Kupujący",
        roleChoiceSellerTitle: "Sprzedawca",
        roleChoiceBuyerList: ["Prywatne • Taxi • Mechanik", "Serwis • Firma"],
        roleChoiceSellerList: ["Demolizer pojazdów • Sklep z częściami", "Dealer • Dystrybutor OEM"],
        authGreeting: "Cześć",
        authLocationHidden: "Adres ukryty przed dostawcami",
        


authTrustBadge: "Telefon, e-mail i adres ",

authTrustBadgeLink: "są ukryte przed dostawcami",

otpTitle: "Kod weryfikacyjny", otpSubPrefix: "Wpisz 4-cyfrowy kod wysłany na",

otpChangeNumber: "Zmień numer", otpConfirm: "Potwierdź i zaloguj się",

        
    },
    fr: {
        authContinueLogin: "Continuer",
        authCreateBuyerAccount: "Créer un compte acheteur",
        authCreateSellerAccount: "Créer un compte vendeur",
        roleChoiceBuyerTitle: "Acheteur",
        roleChoiceSellerTitle: "Vendeur",
        roleChoiceBuyerList: ["Particulier • Taxi • Mécanicien", "Service • Entreprise"],
        roleChoiceSellerList: ["Casseur • Magasin de pièces", "Concessionnaire • Négociant OEM"],
        authGreeting: "Salut",
        authLocationHidden: "Adresse masquée aux fournisseurs",
        


authTrustBadge: "Téléphone, e-mail et adresse ",

authTrustBadgeLink: "masqués aux fournisseurs",

otpTitle: "Code de vérification", otpSubPrefix: "Saisissez le code à 4 chiffres envoyé au",

otpChangeNumber: "Modifier le numéro", otpConfirm: "Confirmer et se connecter",

        
    },
    ro: {
        authContinueLogin: "Continuă",
        authCreateBuyerAccount: "Creează cont de cumpărător",
        authCreateSellerAccount: "Creează cont de vânzător",
        roleChoiceBuyerTitle: "Cumpărător",
        roleChoiceSellerTitle: "Vânzător",
        roleChoiceBuyerList: ["Privat • Taxi • Mecanic", "Serviciu • Companie"],
        roleChoiceSellerList: ["Dezmembrare • Magazin de piese", "Dealer • Furnizor OEM"],
        authGreeting: "Salut",
        authLocationHidden: "Adresă ascunsă de furnizori",
        


authTrustBadge: "Telefon, e-mail și adresă ",

authTrustBadgeLink: "sunt ascunse furnizorilor",

otpTitle: "Cod de verificare", otpSubPrefix: "Introduce codul de 4 cifre trimis la",

otpChangeNumber: "Schimbă numărul", otpConfirm: "Confirmă și autentifică-te",

        
    }
};
Object.keys(roleChoiceTranslations).forEach(language => {
    translations[language] = { ...translations[language], ...roleChoiceTranslations[language] };
});

/* The rebuilt Account panel and its micro-modal, in all eleven languages.

   Its own pack rather than eleven more edits inside cabinetTranslations,
   for two reasons. The first is that it is a closed set: every key here is
   read by exactly one of the new functions, so a language that is missing
   one is visible in this file rather than in a two-hundred-key object
   nobody reads. The second is that en and ru live in the main translations
   object while the other nine live in supplemental packs, so a string that
   needed to be in both had nowhere sensible to go -- this pack carries all
   eleven and the merge below overwrites, which is what the two packs above
   already do.

   The register each language is written in is the register the rest of that
   language's pack already uses, not a single register applied to all
   eleven: de and fr address the buyer as Sie/vous, it and es as tu, pl as
   nieformalny, ru as вы. "Private Account" and "Trade Account" keep the tier
   names in Latin in every language, because the file already keeps "Private"
   and "Trade" untranslated in the Russian strings (inboxPrivateShort,
   inboxGarageShort) -- a tier name that is spelled two ways across a
   product is worse than one that is spelled the same way everywhere.

   deleteBody is deliberately specific about what goes and what stays. A
   delete confirmation that says "this cannot be undone" and then quietly
   leaves the requests behind teaches the buyer that confirmations in this
   product are decorative, which is the exact belief you do not want
   installed on a destructive action. */
const accountPanelTranslations = {
    en: {
        /* These three replace accountTypePrivate / accountTypeTrade, which are
           gone and not renamed. The header's control stopped saying what the
           control is called and started saying who you are -- "Private",
           "Trade", "Dealer" -- which is a role and not an account, and it left
           the header with no visible word at all for the thing you pressed.
           Two keys for two strings became three for three states, and the two
           dead keys are removed rather than left to rot: nothing in the page
           reads them any more and a translation file is the one place in this
           product where a dead string costs nothing to keep and something to
           notice.

           cabinetRoleSeller is the third AUDIENCE and it replaced cabinetRoleDealer,
           which is gone rather than renamed. "Dealer" was never the audience --
           it was one of the seller's four sub-roles, which is a different word in
           every one of these languages and means a middleman in all of them --
           and the plaque no longer prints an audience at all: it prints the
           SUB-ROLE, looked up from the same titleKey the wizard's plate uses.
           What is left here is the fallback for an account that has not answered
           step 2 yet, and the third audience needed a word of its own.

           None of these three names is a plan. The plan arrives from TIERS and is
           joined on with a space, or -- for a private buyer -- as a bare plus sign
           that is deliberately not a key. */
        cabinetRolePrivate: "Private",
        cabinetRoleTrade: "Trade",
        cabinetRoleSeller: "Seller",
        accountPlanLabel: "Plan",

        accountPassword: "Password",
        saveChanges: "Save Changes",
        deleteAccount: "Delete Account",
        cancel: "Cancel",
        upgradeOffer: "Want to upgrade to Trade / Business account?",
        upgradeApply: "Apply here",
        upgradeApplied: "Trade upgrade requested.",
        alreadyTrade: "This account is already a Trade account.",
        deleteBody: "Your name, phone, email and saved items will be removed from this device. Your requests are kept.",
        accountDeleted: "Account deleted.",
        profileSaved: "Profile saved.",
        showPassword: "Show password",
        hidePassword: "Hide password"
    },
    ru: {
        /* «Частник», А НЕ ЛАТИНСКОЕ «Private» (решение пользователя). Раньше здесь
           стояло "Private" латиницей, и на то была причина, которая теперь
           не работает: кабинет якобы смешивает латинские торговые термины,
           поэтому и Private оставляли латиницей. Но пользователь назвал эту
           роль по-русски, и вторая часть того же обоснования прямо говорила,
           что «Частный» без существительного читается как «что-то частное» и
           неясно, что именно. «Частник» эту проблему снимает: это
           существительное, оно короткое, и по-русски стоит рядом с
           «Механик», «Сервис» и «Компанией» без всякой разнородности.

           Почему «Частник», а не «Частный»: остальные десять языков дают
           adjective-форму от «частный» -- Private, Privat, Privato,
           Privatus, Privado, Privé, Particulier. Формально «Частный» им
           параллельнее. Но здесь это не название категории в предложении, а
           подпись кнопки и строки аккаунта, где «Частный» висит без того, к
           чему относиться, -- ровно то, что описано выше. Trade по-прежнему
           латиницей: перевода «Trade» в этом файле нет ни разу, и вводить
           его здесь значило бы заводить слово, которого нет в пакете. */
        cabinetRolePrivate: "Частник",
        cabinetRoleTrade: "Trade",
        cabinetRoleSeller: "Продавец",
        accountPlanLabel: "План",

        accountPassword: "Пароль",
        saveChanges: "Сохранить изменения",
        deleteAccount: "Удалить аккаунт",
        cancel: "Отмена",
        upgradeOffer: "Хотите перейти на аккаунт Trade / бизнес?",
        upgradeApply: "Подать заявку",
        upgradeApplied: "Заявка на Trade отправлена.",
        alreadyTrade: "Это уже аккаунт Trade.",
        deleteBody: "Имя, телефон, email и сохранённое будут удалены с этого устройства. Ваши запросы сохранятся.",
        accountDeleted: "Аккаунт удалён.",
        profileSaved: "Профиль сохранён.",
        showPassword: "Показать пароль",
        hidePassword: "Скрыть пароль"
    },
    zh: {
        /* The 账户 suffix is dropped because the gear and the chevron now say
           "this opens a thing" and 账户 would have been the word for the thing
           again. What is left is the two buyer types as Chinese calls them, and
           经销商 for the dealer, which is the same word the sub-role tile for
           Dealers & OEM uses in this pack. */
        cabinetRolePrivate: "个人",
        cabinetRoleTrade: "商家",
        cabinetRoleSeller: "卖家",
        accountPlanLabel: "方案",

        accountPassword: "密码",
        saveChanges: "保存更改",
        deleteAccount: "删除账户",
        cancel: "取消",
        upgradeOffer: "要升级为 Trade / 商家账户吗？",
        upgradeApply: "在此申请",
        upgradeApplied: "Trade 升级申请已提交。",
        alreadyTrade: "此账户已是 Trade 账户。",
        deleteBody: "您的姓名、电话、电子邮箱和收藏将从此设备上删除。您的请求会保留。",
        accountDeleted: "账户已删除。",
        profileSaved: "个人资料已保存。",
        showPassword: "显示密码",
        hidePassword: "隐藏密码"
    },
    it: {
        cabinetRolePrivate: "Privato",
        cabinetRoleTrade: "Trade",
        cabinetRoleSeller: "Venditore",
        accountPlanLabel: "Piano",

        accountPassword: "Password",
        saveChanges: "Salva modifiche",
        deleteAccount: "Elimina account",
        cancel: "Annulla",
        upgradeOffer: "Vuoi passare a un account Trade / aziendale?",
        upgradeApply: "Richiedi qui",
        upgradeApplied: "Richiesta di upgrade Trade inviata.",
        alreadyTrade: "Questo è già un account Trade.",
        deleteBody: "Nome, telefono, email e preferiti verranno rimossi da questo dispositivo. Le tue richieste restano.",
        accountDeleted: "Account eliminato.",
        profileSaved: "Profilo salvato.",
        showPassword: "Mostra password",
        hidePassword: "Nascondi password"
    },
    de: {
        /* "Händler" is the same word this pack already uses for the Dealers & OEM
           category, and it is deliberately not "Händlerkonto" or "Konto": the
           header is a role, and a dealer buying parts from this panel is
           addressed as a Händler and not as an account. */
        cabinetRolePrivate: "Privat",
        cabinetRoleTrade: "Trade",
        cabinetRoleSeller: "Verkäufer",
        accountPlanLabel: "Tarif",

        accountPassword: "Passwort",
        saveChanges: "Änderungen speichern",
        deleteAccount: "Konto löschen",
        cancel: "Abbrechen",
        upgradeOffer: "Möchten Sie auf ein Trade- / Geschäftskonto wechseln?",
        upgradeApply: "Hier beantragen",
        upgradeApplied: "Wechsel zu Trade beantragt.",
        alreadyTrade: "Dies ist bereits ein Trade-Konto.",
        deleteBody: "Name, Telefonnummer, E-Mail und Merkliste werden von diesem Gerät entfernt. Ihre Anfragen bleiben erhalten.",
        accountDeleted: "Konto gelöscht.",
        profileSaved: "Profil gespeichert.",
        showPassword: "Passwort anzeigen",
        hidePassword: "Passwort verbergen"
    },
    lt: {
        /* "Prekyra" drops the -s that the old accountTypeTrade had
           ("Prekyros", the genitive -- correct in "a trade account's tariff"
           and wrong as a name). A role standing on its own next to a gear is
           being named, and Lithuanian names it in the nominative. "Dileria"
           is the singular of the Dileriai this pack already uses for the
           Dealers & OEM category. */
        cabinetRolePrivate: "Privatus",
        cabinetRoleTrade: "Prekyra",
        cabinetRoleSeller: "Pardavėjas",
        accountPlanLabel: "Planas",

        accountPassword: "Slaptažodis",
        saveChanges: "Išsaugoti pakeitimus",
        deleteAccount: "Ištrinti paskyrą",
        cancel: "Atšaukti",
        upgradeOffer: "Norite pereiti į prekyros paskyrą?",
        upgradeApply: "Pateikti paraišką",
        upgradeApplied: "Prekyros paraiška pateikta.",
        alreadyTrade: "Tai jau prekyros paskyra.",
        deleteBody: "Vardas, telefonas, el. paštas ir išsaugoti elementai bus pašalinti iš šio įrenginio. Jūsų užklausos lieka.",
        accountDeleted: "Paskyra ištrinta.",
        profileSaved: "Profilis išsaugotas.",
        showPassword: "Rodyti slaptažodį",
        hidePassword: "Slėpti slaptažodį"
    },
    pt: {
        cabinetRolePrivate: "Particular",
        cabinetRoleTrade: "Profissional",
        cabinetRoleSeller: "Vendedor",
        accountPlanLabel: "Plano",

        accountPassword: "Palavra-passe",
        saveChanges: "Guardar alterações",
        deleteAccount: "Eliminar conta",
        cancel: "Cancelar",
        upgradeOffer: "Quer mudar para uma conta Profissional / de empresa?",
        upgradeApply: "Pedir aqui",
        upgradeApplied: "Pedido de conta Profissional enviado.",
        alreadyTrade: "Esta já é uma conta Profissional.",
        deleteBody: "O nome, telefone, email e itens guardados serão removidos deste dispositivo. Os seus pedidos são mantidos.",
        accountDeleted: "Conta eliminada.",
        profileSaved: "Perfil guardado.",
        showPassword: "Mostrar palavra-passe",
        hidePassword: "Ocultar palavra-passe"
    },
    es: {
        cabinetRolePrivate: "Particular",
        cabinetRoleTrade: "Profesional",
        cabinetRoleSeller: "Vendedor",
        accountPlanLabel: "Plan",

        accountPassword: "Contraseña",
        saveChanges: "Guardar cambios",
        deleteAccount: "Eliminar cuenta",
        cancel: "Cancelar",
        upgradeOffer: "¿Quieres pasar a una cuenta Profesional / de empresa?",
        upgradeApply: "Solicitarlo aquí",
        upgradeApplied: "Solicitud de cuenta Profesional enviada.",
        alreadyTrade: "Esta ya es una cuenta Profesional.",
        deleteBody: "Tu nombre, teléfono, correo y elementos guardados se eliminarán de este dispositivo. Tus solicitudes se conservan.",
        accountDeleted: "Cuenta eliminada.",
        profileSaved: "Perfil guardado.",
        showPassword: "Mostrar contraseña",
        hidePassword: "Ocultar contraseña"
    },
    pl: {
        /* Polish keeps "Dealer" in Latin script because that is what this pack
           already calls the category -- dealers: "Dealerzy" -- and a Polish
           trade buyer reads the Latin word as the trade name and the
           translation as an attempt. "Konto" is dropped: zawodowe is a person,
           not a file. */
        cabinetRolePrivate: "Prywatne",
        cabinetRoleTrade: "Zawodowe",
        cabinetRoleSeller: "Sprzedawca",
        accountPlanLabel: "Plan",

        accountPassword: "Hasło",
        saveChanges: "Zapisz zmiany",
        deleteAccount: "Usuń konto",
        cancel: "Anuluj",
        upgradeOffer: "Chcesz przejść na konto zawodowe / firmowe?",
        upgradeApply: "Złóż wniosek",
        upgradeApplied: "Wniosek o konto zawodowe wysłany.",
        alreadyTrade: "To jest już konto zawodowe.",
        deleteBody: "Imię, telefon, e-mail i zapisane elementy zostaną usunięte z tego urządzenia. Twoje zapytania zostaną zachowane.",
        accountDeleted: "Konto usunięte.",
        profileSaved: "Profil zapisany.",
        showPassword: "Pokaż hasło",
        hidePassword: "Ukryj hasło"
    },
    fr: {
        cabinetRolePrivate: "Particulier",
        cabinetRoleTrade: "Professionnel",
        cabinetRoleSeller: "Vendeur",
        accountPlanLabel: "Forfait",

        accountPassword: "Mot de passe",
        saveChanges: "Enregistrer les modifications",
        deleteAccount: "Supprimer le compte",
        cancel: "Annuler",
        upgradeOffer: "Voulez-vous passer à un compte Professionnel / entreprise ?",
        upgradeApply: "Demandez ici",
        upgradeApplied: "Demande de compte Professionnel envoyée.",
        alreadyTrade: "Ce compte est déjà un compte Professionnel.",
        deleteBody: "Votre nom, téléphone, e-mail et éléments enregistrés seront supprimés de cet appareil. Vos demandes sont conservées.",
        accountDeleted: "Compte supprimé.",
        profileSaved: "Profil enregistré.",
        showPassword: "Afficher le mot de passe",
        hidePassword: "Masquer le mot de passe"
    },
    ro: {
        /* "Dealer" stays Latin here for the reason it does in Polish: this pack
           already names the category dealers: "Dealeri", and a Romanian trade
           buyer reads the Latin word as the trade name. "Revinzător" is the
           ordinary Romanian word for a dealer and would be wrong -- it means a
           small retailer, which is not what the tariff is for. */
        cabinetRolePrivate: "Privat",
        cabinetRoleTrade: "Profesional",
        cabinetRoleSeller: "Vânzător",
        accountPlanLabel: "Plan",
        accountPassword: "Parolă",
        saveChanges: "Salvează modificările",
        deleteAccount: "Șterge contul",
        cancel: "Anulează",
        upgradeOffer: "Vrei să treci la un cont Profesional / de firmă?",
        upgradeApply: "Aplică aici",
        upgradeApplied: "Cerere de cont Profesional trimisă.",
        alreadyTrade: "Acesta este deja un cont Profesional.",
        deleteBody: "Numele, telefonul, e-mailul și elementele salvate vor fi șterse de pe acest dispozitiv. Cererile tale rămân.",
        accountDeleted: "Cont șters.",
        profileSaved: "Profil salvat.",
        showPassword: "Arată parola",
        hidePassword: "Ascunde parola"
    }
};
Object.keys(accountPanelTranslations).forEach(language => {
    translations[language] = { ...translations[language], ...accountPanelTranslations[language] };
});

/* THE COOKIE BANNER'S FOUR STRINGS, all eleven languages.

   Its own pack, for the reason the three packs above already state: it is a
   closed set, every key here is read by exactly one function, and a
   language missing one shows up here rather than inside a two-hundred-key
   object nobody reads. All eleven are present. The file has a documented
   history of keys that exist only in en and ru (locationInvalid, authLegal,
   authName, authPhoneShort), and a consent notice is the worst possible
   string to leave in English for nine of the eleven languages a buyer can
   pick -- it is the one sentence on the screen that is legally load-bearing,
   so a Polish or Lithuanian buyer reading it in English is reading a legal
   term they did not agree to in a language they chose.

   THE ENGLISH IS THE COPY THE BRIEF SPECIFIES, character for character,
   including the full stops, and it is the en pack rather than markup text
   that holds it, so the markup carries the same sentence as its no-JS
   fallback and there is one place to change it.

   THE TEN OTHERS ARE MINE, because the brief gave the English only. They
   are the strings to check first if a translator looks at anything.

   Two choices worth naming. The notice stays ONE sentence in every language
   rather than being split into a claim and a permission: splitting it is
   better German and worse everywhere else, and eleven languages is not the
   place to start splitting sentences. And Reject Non-Essential is rendered
   as the negation of a category -- "only what is necessary" -- rather than
   as a list, because a list in a 200px button is either truncated or
   wrapped into something unreadable, and a consent control that does not fit
   its own label is a control nobody can answer.

   The key names say what the strings ARE rather than where they sit, which
   is the same convention cabinetTranslations uses, and it means the markup
   can move without a string moving with it. */
const cookieTranslations = {
    en: {
        cookieNotice: "We use cookies to improve your experience and analyze traffic. You can manage your choices below.",
        cookieAccept: "Accept All",
        cookieReject: "Reject Non-Essential",
        cookiePrivacy: "Privacy Policy"
    },
    ru: {
        cookieNotice: "Мы используем cookie, чтобы улучшить работу сайта и анализировать трафик. Выбор можно изменить ниже.",
        cookieAccept: "Принять все",
        cookieReject: "Только необходимые",
        cookiePrivacy: "Политика конфиденциальности"
    },
    de: {
        cookieNotice: "Wir verwenden Cookies, um Ihre Nutzungserfahrung zu verbessern und den Datenverkehr zu analysieren. Ihre Auswahl können Sie unten ändern.",
        cookieAccept: "Alle akzeptieren",
        cookieReject: "Nur notwendige",
        cookiePrivacy: "Datenschutzerklärung"
    },
    fr: {
        cookieNotice: "Nous utilisons des cookies pour améliorer votre expérience et analyser le trafic. Vous pouvez modifier votre choix ci-dessous.",
        cookieAccept: "Tout accepter",
        cookieReject: "Necessaires uniquement",
        cookiePrivacy: "Politique de confidentialité"
    },
    es: {
        cookieNotice: "Usamos cookies para mejorar tu experiencia y analizar el tráfico. Puedes cambiar tu elección abajo.",
        cookieAccept: "Aceptar todo",
        cookieReject: "Solo necesarias",
        cookiePrivacy: "Política de privacidad"
    },
    it: {
        cookieNotice: "Usiamo i cookie per migliorare la tua esperienza e analizzare il traffico. Puoi cambiare la tua scelta qui sotto.",
        cookieAccept: "Accetta tutto",
        cookieReject: "Solo necessari",
        cookiePrivacy: "Informativa sulla privacy"
    },
    pt: {
        cookieNotice: "Usamos cookies para melhorar a sua experiência e analisar o tráfego. Pode alterar a sua escolha abaixo.",
        cookieAccept: "Aceitar tudo",
        cookieReject: "Apenas necessários",
        cookiePrivacy: "Política de privacidade"
    },
    pl: {
        cookieNotice: "Używamy plików cookie, aby ulepszyć korzystanie z serwisu i analizować ruch. Swój wybór możesz zmienić poniżej.",
        cookieAccept: "Akceptuję wszystkie",
        cookieReject: "Tylko niezbędne",
        cookiePrivacy: "Polityka prywatności"
    },
    ro: {
        cookieNotice: "Folosim cookie-uri pentru a vă îmbunătăți experiența și a analiza traficul. Puteți schimba alegerea mai jos.",
        cookieAccept: "Acceptă tot",
        cookieReject: "Doar necesare",
        cookiePrivacy: "Politica de confidențialitate"
    },
    lt: {
        cookieNotice: "Naudojame slapukus, kad pagerintumėte naudojimosi patirtį ir analizuotume srautą. Savo pasirinkimą galite pakeisti žemiau.",
        cookieAccept: "Priimti visus",
        cookieReject: "Tik būtini",
        cookiePrivacy: "Privatumo politika"
    },
    zh: {
        cookieNotice: "我们使用 Cookie 来改善您的使用体验并分析流量。您可以在下方更改选择。",
        cookieAccept: "全部接受",
        cookieReject: "仅必要项",
        cookiePrivacy: "隐私政策"
    }
};
Object.keys(cookieTranslations).forEach(language => {
    translations[language] = { ...translations[language], ...cookieTranslations[language] };
});

/* ======================= REQUIRED CONTACT FIELDS =======================

   WHY THIS BLOCK IS SEPARATE FROM THE ACCOUNT BLOCK ABOVE IT.

   The account block at the top of this file has one entry per language, all
   eleven, and it is edited by hand every time a string is added. That is fine
   for a string that belongs to a panel everybody sees, and it is the wrong
   home for three strings that came out of the security pass:

     emailRequired, phoneRequired - the sentence under an Email or a Phone
       that has been emptied on an account which HAD one. Until these keys
       existed, validateAccountEmail and validateAccountPhone painted the red
       border and set the note to T('emailRequired'), T() handed back an empty
       string, and the cabinet showed a red frame with nothing written under
       it and a greyed Save button with no reason on screen. Two of the three
       halves of the message were already working, which is why it looked
       plausible in the browser and only the geometry probe caught it.

     locationInvalid - this one is NOT new. It has existed in en and ru since
       the account panel was built, and the comment above the merge block says
     so: "keys that exist only in en and ru (locationInvalid, authLegal, ...)".
     Nine languages were reading T('locationInvalid') and getting nothing, so
     a mistyped Irish place was underlined in English-less silence in every
     language but two.

   MERGED, NOT COPIED INTO EACH PACK. Every key in this block goes through the
   same one-line merge the cookie block uses, so a language that is missing one
   gets English rather than an empty string, and nobody has to keep eleven
   blocks in step by hand. If you add a language to this file, add it here
   too -- the forEach below will spread whatever is there, and a missing
   language simply keeps whatever the pack above it already had.

   contactsLockedNote - the one line under the email and phone plates of a
   SUPPLIER's cabinet, saying those two are protected and naming the address
   that unlocks them. It belongs in this block because it is the only string in
   the panel that describes a FIELD rather than judging one: the four keys above
   all say something is wrong with a value, and this one says what to do instead
   when there is nothing wrong and nothing to do.

   The address is left as plain text on purpose. It is an email address in every
   language, and wrapping it in a mailto: would make it a control that opens a
   mail client, which is a different promise from the one this sentence makes --
   and in a prototype that promise cannot be kept anyway, since there is no
   mailbox behind it.

   eircodeResolving / eircodeResolvedNote - the two states of the Eircode lookup.
   Both go on the status line that sits under the location field, which is the one
   line in the panel that is allowed to change its mind: the keystroke handler
   wrote "Code accepted. Your exact address is not shared." a moment earlier, and
   this is where the town and county the service found out.

   The provider name is a BRAND and sits in the sentence untranslated, inside
   brackets, rather than being given its own key: "Photon", "GeoApify" and
   "Mapbox" are the same word in all eleven packs, and a translation key for them
   would be eleven copies of the same Latin string that a translator could then
   get wrong in one of them.

   {where} and {via} are REPLACED, not interpolated, and the substitution is in
   the prototype rather than in this file: a pack is a flat table of strings here
   and there is no mechanism in it for a parameter, so a message that needed two
   values would have to be concatenated by hand in every language instead. */



const requiredContactTranslations = {
    en: {
        emailRequired: "Enter your email - we need it to contact you.",
        phoneRequired: "Enter your phone number - suppliers' replies come to it.",
        locationInvalid: "Enter an Irish town, area or street, or a 7-character Eircode (for example D02 XY45).",
        passwordRequired: "Set a password for your account.",
        businessNameRequired: "Enter your business name for a trade account.",
        croNumberInvalid: "Check the CRO number: at least 5 characters including digits.",
        contactsLockedNote: "These contact details are protected. To change them, contact our partner team: trade@allparts.ie",
        eircodeResolving: "Looking up the district...",
        eircodeResolvedNote: "{where} - resolved automatically from your Eircode ({via})."
    },



    ru: {
        emailRequired: "Укажите email - без него мы не сможем с вами связаться.",
        phoneRequired: "Укажите номер телефона - ответы поставщиков приходят на него.",
        locationInvalid: "Укажите ирландский населённый пункт, район или улицу либо 7-значный Eircode (например D02 XY45).",
        passwordRequired: "Задайте пароль для вашего аккаунта.",
        businessNameRequired: "Укажите название компании для аккаунта Trade.",
        croNumberInvalid: "Проверьте номер CRO: минимум 5 символов, включая цифры.",
        contactsLockedNote: "Эти контактные данные защищены. Чтобы их изменить, обратитесь в отдел работы с партнёрами: trade@allparts.ie",
        eircodeResolving: "Определяем район...",
        eircodeResolvedNote: "{where} — определено автоматически по Eircode ({via})."
    },



    zh: {
        emailRequired: "请输入您的电子邮箱 - 没有它我们无法与您联系。",
        phoneRequired: "请输入您的电话号码 - 供应商的回复会发送到这里。",
        locationInvalid: "请输入爱尔兰的城镇、地区或街道，或 7 位 Eircode（例如 D02 XY45）。",
        passwordRequired: "请为您的账户设置密码。",
        businessNameRequired: "请输入您公司的名称以创建 Trade 账户。",
        croNumberInvalid: "请检查 CRO 编号：至少 5 个字符，且需包含数字。",
        contactsLockedNote: "这些联系方式已受保护。如需更改，请联系我们的合作伙伴团队：trade@allparts.ie",
        eircodeResolving: "正在查询所在区域...",
        eircodeResolvedNote: "{where} — 已根据您的 Eircode 自动识别（{via}）。"
    },



    it: {
        emailRequired: "Inserisci la tua email - senza di essa non possiamo contattarti.",
        phoneRequired: "Inserisci il tuo numero di telefono - le risposte dei fornitori arrivano li.",
        locationInvalid: "Inserisci una citta, una zona o una via irlandese, oppure un Eircode di 7 caratteri (ad esempio D02 XY45).",
        passwordRequired: "Imposta una password per il tuo account.",
        businessNameRequired: "Inserisci il nome della tua azienda per un account Trade.",
        croNumberInvalid: "Controlla il numero CRO: almeno 5 caratteri, di cui almeno una cifra.",
        contactsLockedNote: "Questi dati di contatto sono protetti. Per modificarli, contatta il nostro team partner: trade@allparts.ie",
        eircodeResolving: "Ricerca del distretto...",
        eircodeResolvedNote: "{where} — risolto automaticamente dal tuo Eircode ({via})."
    },



    de: {
        emailRequired: "Geben Sie Ihre E-Mail-Adresse ein - ohne sie können wir Sie nicht erreichen.",
        phoneRequired: "Geben Sie Ihre Telefonnummer ein - Antworten der Lieferanten gehen dorthin.",
        locationInvalid: "Geben Sie einen irischen Ort, ein Gebiet oder eine Straße an, oder einen 7-stelligen Eircode (zum Beispiel D02 XY45).",
        passwordRequired: "Legen Sie ein Passwort für Ihr Konto fest.",
        businessNameRequired: "Geben Sie den Firmennamen für ein Trade-Konto ein.",
        croNumberInvalid: "Prüfen Sie die CRO-Nummer: mindestens 5 Zeichen, davon mindestens eine Ziffer.",
        contactsLockedNote: "Diese Kontaktdaten sind geschützt. Zum Ändern wenden Sie sich an unser Partner-Team: trade@allparts.ie",
        eircodeResolving: "Bezirk wird ermittelt...",
        eircodeResolvedNote: "{where} – automatisch aus Ihrer Eircode ermittelt ({via})."
    },



    lt: {
        emailRequired: "Įveskite savo el. paštą - be jos negalime su jumis susisiekti.",
        phoneRequired: "Įveskite savo telefono numerį - tiekėjų atsakymai atsiunčiami į jį.",
        locationInvalid: "Įveskite Airijos miestą, rajoną ar gatvę arba 7 ženklų Eircode (pavyzdžiui D02 XY45).",
        passwordRequired: "Nustatykite savo paskyros slaptažodį.",
        businessNameRequired: "Įveskite įmonės pavadinimą Trade paskyrai.",
        croNumberInvalid: "Patikrinkite CRO numerį: bent 5 simboliai, įskaitant skaitmenis.",
        contactsLockedNote: "Šie kontaktiniai duomenys yra apsaugoti. Norėdami juos pakeisti, susisiekite su mūsų partnerių komanda: trade@allparts.ie",
        eircodeResolving: "Ieškoma rajono...",
        eircodeResolvedNote: "{where} — nustatoma automatiškai pagal jūsų Eircode ({via})."
    },



    pt: {
        emailRequired: "Indique o seu e-mail - sem ele não o podemos contactar.",
        phoneRequired: "Indique o seu número de telefone - é para lá que chegam as respostas dos fornecedores.",
        locationInvalid: "Indique uma localidade, área ou rua irlandesa, ou um Eircode de 7 caracteres (por exemplo D02 XY45).",
        passwordRequired: "Defina uma palavra-passe para a sua conta.",
        businessNameRequired: "Indique o nome da sua empresa para uma conta Trade.",
        croNumberInvalid: "Verifique o número CRO: pelo menos 5 caracteres, incluindo algarismos.",
        contactsLockedNote: "Estes dados de contacto estão protegidos. Para os alterar, contacte a nossa equipa de parceiros: trade@allparts.ie",
        eircodeResolving: "A procurar o distrito...",
        eircodeResolvedNote: "{where} — resolvido automaticamente a partir do seu Eircode ({via})."
    },



    es: {
        emailRequired: "Introduce tu correo electrónico - sin él no podemos ponerte en contacto.",
        phoneRequired: "Introduce tu número de teléfono - allí llegan las respuestas de los proveedores.",
        locationInvalid: "Introduce una localidad, zona o calle irlandesa, o un Eircode de 7 caracteres (por ejemplo D02 XY45).",
        passwordRequired: "Establece una contraseña para tu cuenta.",
        businessNameRequired: "Introduce el nombre de tu empresa para una cuenta Trade.",
        croNumberInvalid: "Revisa el número CRO: al menos 5 caracteres, incluidos dígitos.",
        contactsLockedNote: "Estos datos de contacto están protegidos. Para cambiarlos, contacta con nuestro equipo de socios: trade@allparts.ie",
        eircodeResolving: "Buscando el distrito...",
        eircodeResolvedNote: "{where} — resuelto automáticamente a partir de tu Eircode ({via})."
    },



    pl: {
        emailRequired: "Podaj swój e-mail - bez niego nie możemy się z Tobą skontaktować.",
        phoneRequired: "Podaj swój numer telefonu - tam trafiają odpowiedzi dostawców.",
        locationInvalid: "Podaj irlandzką miejscowość, dzielnicę lub ulicę albo 7-znakowy Eircode (na przykład D02 XY45).",
        passwordRequired: "Ustaw hasło do swojego konta.",
        businessNameRequired: "Podaj nazwę swojej firmy dla konta Trade.",
        croNumberInvalid: "Sprawdź numer CRO: co najmniej 5 znaków, w tym cyfry.",
        contactsLockedNote: "Te dane kontaktowe są chronione. Aby je zmienić, skontaktuj się z naszym zespołem partnerskim: trade@allparts.ie",
        eircodeResolving: "Ustalamy dzielnicę...",
        eircodeResolvedNote: "{where} — ustalone automatycznie na podstawie Twojego Eircode ({via})."
    },



    fr: {
        emailRequired: "Saisissez votre e-mail - sans lui nous ne pouvons pas vous contacter.",
        phoneRequired: "Saisissez votre numéro de téléphone - les réponses des fournisseurs y arrivent.",
        locationInvalid: "Saisissez une ville, une zone ou une rue irlandaise, ou un Eircode de 7 caractères (par exemple D02 XY45).",
        passwordRequired: "Définissez un mot de passe pour votre compte.",
        businessNameRequired: "Saisissez le nom de votre entreprise pour un compte Trade.",
        croNumberInvalid: "Vérifiez le numéro CRO : au moins 5 caractères, dont un chiffre.",
        contactsLockedNote: "Ces coordonnées sont protégées. Pour les modifier, contactez notre équipe partenaires : trade@allparts.ie",
        eircodeResolving: "Recherche du secteur...",
        eircodeResolvedNote: "{where} – résolu automatiquement à partir de votre Eircode ({via})."
    },



    ro: {
        emailRequired: "Introdu adresa ta de e-mail - fără ea nu te putem contacta.",
        phoneRequired: "Introdu numărul tău de telefon - acolo ajung răspunsurile furnizorilor.",
        locationInvalid: "Introdu un oraș, o zonă sau o stradă din Irlanda sau un Eircode de 7 caractere (de exemplu D02 XY45).",
        passwordRequired: "Stabilește o parolă pentru contul tău.",
        businessNameRequired: "Introdu numele companiei tale pentru un cont Trade.",
        croNumberInvalid: "Verifică numărul CRO: minimum 5 caractere, inclusiv cifre.",
        contactsLockedNote: "Aceste date de contact sunt protejate. Pentru a le modifica, contactează echipa noastră de parteneri: trade@allparts.ie",
        eircodeResolving: "Se identifică sectorul...",
        eircodeResolvedNote: "{where} — determinat automat din Eircode-ul dvs. ({via})."
    }
};

Object.keys(requiredContactTranslations).forEach(language => {
    translations[language] = { ...translations[language], ...requiredContactTranslations[language] };
});

/* THE B2B SELLER FUNNEL, IN ITS OWN BLOCK, merged the same way as the one
   above. Not merged for tidiness: the two blocks have different owners.

   requiredContactTranslations is the STRINGS THAT SAID SOMETHING WRONG and had
   to be corrected -- a note that turned out to be untrue, three messages that
   named a VAT number the brief had renamed. It is a list of repairs.

   sellerFunnelTranslations is a FEATURE. It is the copy for screens that did
   not exist when the file was written, and it will grow by whole groups as the
   verification modal lands: the sub-role screen first, then step 4, then step 5,
   then the trial offer. Keeping them together under one name means the next
   person adding a funnel screen appends to a block whose purpose they can read
   from its comment, instead of hunting for which of eleven language objects
   already had an eircodeResolvedNote in it.

   The same merge order applies, and the order matters in the one place two
   blocks could collide: later spreads win, so nothing here may repeat a key from
   requiredContactTranslations. There is a probe that fails if any key in this
   block appears in both. */
const sellerFunnelTranslations = {

    /* --- the sub-role screen, wizard step 2 of 4 ------------------------

       sellerSubRoleSub is not decoration. It is the reason the question is asked
       at all: a supplier who is asked "which of these three are you" without
       being told what it costs them will answer it the way people answer a
       cookie banner, and the document list in step 5 is the bill.

       "Motor Factors" is the awkward one in every language. It is an Irish and
       British trade name with no exact equivalent -- in Irish English it means
       a wholesale parts business, and the two nearest words in most packs
       (distributor, wholesaler) mean different things in different markets. It
       is rendered as the trade rather than as the firm: distributors and
       wholesalers in English, "Grossisten" in German, "distributori și
       angrobiști" in Romanian. Translating the WORD would name a company type
       that does not exist in Ireland. */

    en: {
        sellerSubRoleTitle: "What kind of seller are you?",
        sellerSubRoleSub: "This decides which documents we ask for.",
        sellerSubRoleDismantlers: "Dismantler",
        sellerSubRoleDismantlersSub: "Vehicle dismantlers and recovery yards",
        sellerSubRoleMotorFactors: "Motor Factor",
        sellerSubRoleMotorFactorsSub: "Parts distributors and wholesalers",
        sellerSubRoleDealers: "Dealer",
        sellerSubRoleDealersSub: "Franchised dealers and importers",
        sellerSubRoleOemTraders: "OEM Trader",
        sellerSubRoleOemTradersSub: "Manufacturers selling their own parts",
        subRoleBack: "Change account type",

        /* --- the trade sub-roles, wizard step 2 of 1 -----------------------

           TRADE ASKS ITS OWN FOUR AND NOT THE SELLER'S THREE. A trade buyer is
           not selling anything, so there is no licence to check and no document
           to ask for, which is the entire difference between this list and the
           one above and the reason a trade account reaches the request form in
           one step where a seller needs four. What the answer is FOR is the
           header: it is the word printed next to the tier, and "Trade" alone is
           not what a garage calls itself. */
        tradeSubRoleTitle: "What kind of trade account are you?",
        tradeSubRoleSub: "This decides what the app calls you in the header.",
        /* tradeSubRolePrivate ЖИВЁТ ЗДЕСЬ, РЯДОМ С ЧЕТЫРЬМЯ ТОРГОВЫМИ, хотя в
           TRADE_SUBROLES его нет и никогда не было: там только профессии, а
           плитка «Частник» стоит в одной сетке с ними и должна печататься из
           одного места. Раньше её подпись была зашита прямо в прототип --
           currentLang === 'ru' ? 'Частное лицо' : 'Private buyer' -- то есть
           девять языков из одиннадцати показывали на плитке английский текст.

           Слово выбрано пользователем: «Частник», а не «Частное лицо».
           «Частное лицо» -- официальный регистр объявления о человеке, на
           кнопке выбора профиля оно звучит канцелярски и длиннее соседей;
           «Частник» называет так же, как в разговоре, и короче, поэтому пять
           подписей в сетке читаются на одном дыхании.

           В ЧЕТЫРЁХ ЯЗЫКАХ СЛОВО ВЗЯТО НЕ ОТ ПОЛЬЗОВАТЕЛЯ, А ИЗ КАБИНЕТА:
           pt, es, pl, fr. Там cabinetRolePrivate уже стояло нарисованное
           по-человечески слово, и пользователь решил, что подстраиваться
           должна плитка, а не наоборот. Теперь в этих четырёх плитка и
           кабинет говорят одно слово -- раньше они расходились, и человек,
           выбравший профиль на плитке и увидевший другую подпись в кабинете,
           получал два названия одной роли. Остальные семь уже совпадали. */
        tradeSubRolePrivate: "Private",
        tradeSubRoleMechanic: "Mechanic",
        tradeSubRoleMechanicSub: "Independent mechanic or repair shop",
        tradeSubRoleService: "Service",
        tradeSubRoleServiceSub: "Garage or workshop service department",
        tradeSubRoleTaxi: "Taxi",
        tradeSubRoleTaxiSub: "Taxi operator or licensed fleet",
        tradeSubRoleBusiness: "Business",
        tradeSubRoleBusinessSub: "Company buying parts for its fleet",

        /* --- the soft gate ------------------------------------------------- */
        gateTitle: "Your profile is at the activation stage",
        gateText: "Complete your business verification to open access to incoming buyer requests and start selling.",
        gateCta: "Complete verification",
        gateReviewTitle: "Documents under review",
        gateReviewText: "Your documents are with our moderation team. You can keep working in the cabinet in the meantime.",
        gateReviewCta: "View status",

        /* --- step 4: what the business trades in --------------------------- */
        sellerSetupFor: "Profile setup:",
        sellerBrandsLabel: "Brands and models of parts",
        sellerBrandsPlaceholder: "Select brands (or \"All brands\")",
        sellerBrandsAll: "All brands",
        sellerBrandsNone: "No brand matches that",
        sellerBrandsRequired: "Choose at least one brand, or choose All brands.",
        sellerRemoveBrand: "Remove brand",
        sellerPartTypeLabel: "Type of parts",
        sellerPartTypeUsed: "Used",
        sellerPartTypeNew: "New",
        sellerPartTypeRequired: "Choose at least one type of part.",
        sellerQualityLabel: "Quality",
        sellerQualityOem: "Original (OEM)",
        sellerQualityAftermarket: "Aftermarket",
        sellerQualityRequired: "Choose at least one quality.",

        /* --- step 5: who the business is ----------------------------------- */
        sellerBusinessNameLabel: "Business name",
        sellerBusinessNameRequired: "Enter your business name.",
        sellerCroLabel: "CRO number",
        sellerCroInvalid: "Check the CRO number: 5 to 12 digits.",
        sellerCroChecking: "Checking...",
        sellerCroOk: "CRO number found",
        sellerCroNotFound: "No company found for this number",
        sellerCroUnavailable: "The online check is not available in this build. The number must still be 5 to 12 digits.",
        sellerDocsLabel: "Verification documents",
        sellerDocsFor: "for {sub}",
        sellerDocsHint: "🔒 You can cover the financial figures. We only need the header with the company name, the date and the Eircode.",
        sellerDocsRequired: "Attach at least one document.",
        sellerRemoveDoc: "Remove document",
        sellerVerifyPendingTitle: "Documents under review",
        sellerVerifyPendingText: "We will review your documents and open your profile for incoming requests. You can keep using the cabinet in the meantime.",

        /* --- step 5b: on-site activation ----------------------------------- */
        sellerRepIntro: "If one of our managers has already visited you, or you are meeting an Allparts.ie representative, your profile can be activated on the spot.",
        sellerRepPhoneLabel: "Company phone or Eircode",
        sellerRepInvalid: "Enter a phone number or an Eircode.",
        sellerRepRequested: "Activation requested. Our manager will contact you to agree a time.",
        sellerRepConsoleTitle: "Allparts.ie representative",
        sellerRepConsoleHint: "Enter the client's phone or Eircode to activate on site.",
        sellerRepSearching: "Searching...",
        sellerRepFound: "Client found: {name}",
        sellerRepNotFound: "No client found for this phone or Eircode",
        sellerRepUnavailable: "The client lookup is not available in this build.",

        /* --- after activation ---------------------------------------------- */
        tierLabel: "Tariff plan",
        tierBase: "Base",
        tierPro: "Pro",
        tierProPlus: "Pro+",
        tierPrivatePlus: "Private+",
        sellerVerifiedTitle: "Profile verified!",
        sellerVerifiedText: "Choose a tariff plan to start your free {trial} trial.",
        sellerVerifiedCta: "Choose a plan and start the trial",
        sellerTrialLength: "{n} days",
        sellerTrialStarted: "Your free trial has started: {trial}.",

        /* --- the document kinds, which hang off the sub-role ---------------- */
        sellerDocUtilityBill: "Utility bill",
        sellerDocBankStatement: "Bank statement",
        sellerDocWastePermit: "Waste facility permit",
        sellerDocAtfLicense: "ATF licence",
        sellerDocVatCert: "VAT certificate",
        sellerDocCroCert: "CRO certificate",
        sellerDocSimiLicense: "SIMI licence",
        sellerDocDistributorAgreement: "Distribution agreement"
    },


    ru: {
        sellerSubRoleTitle: "Какой вы продавец?",
        sellerSubRoleSub: "От этого зависит, какие документы мы попросим.",
        sellerSubRoleDismantlers: "Авторазборка",
        sellerSubRoleDismantlersSub: "Автомобильные разборки и площадки эвакуации",
        sellerSubRoleMotorFactors: "Автомагазин",
        sellerSubRoleMotorFactorsSub: "Магазины запчастей, дистрибьюторы и оптовые компании",
        sellerSubRoleDealers: "Дилер",
        sellerSubRoleDealersSub: "Официальные дилеры и импортёры",
        sellerSubRoleOemTraders: "OEM-трейдер",
        sellerSubRoleOemTradersSub: "Производители, продающие собственные детали",
        subRoleBack: "Изменить тип аккаунта",

        tradeSubRoleTitle: "Какой у вас тип профессионального аккаунта?",
        tradeSubRoleSub: "Это определяет, как вас называют в шапке.",
        tradeSubRolePrivate: "Частник",
        tradeSubRoleMechanic: "Механик",
        tradeSubRoleMechanicSub: "Независимый механик или автосервис",
        tradeSubRoleService: "Сервис",
        tradeSubRoleServiceSub: "Сервисный отдел гаража или мастерской",
        tradeSubRoleTaxi: "Такси",
        tradeSubRoleTaxiSub: "Оператор такси или лицензированный автопарк",
        tradeSubRoleBusiness: "Компания",
        tradeSubRoleBusinessSub: "Компания, закупающая детали для своего автопарка",

        gateTitle: "Ваш профиль на этапе активации",
        gateText: "Завершите верификацию бизнеса, чтобы получить доступ к входящим запросам покупателей и начать продавать.",
        gateCta: "Завершить верификацию",
        gateReviewTitle: "Документы на модерации",
        gateReviewText: "Ваши документы у нашей команды модерации. До этого вы можете продолжать работать в кабинете.",
        gateReviewCta: "Посмотреть статус",

        sellerSetupFor: "Настройка профиля:",
        sellerBrandsLabel: "Марки и модели запчастей",
        sellerBrandsPlaceholder: "Выберите марки (или «Все марки»)",
        sellerBrandsAll: "Все марки",
        sellerBrandsNone: "Нет марок по этому запросу",
        sellerBrandsRequired: "Выберите хотя бы одну марку или «Все марки».",
        sellerRemoveBrand: "Убрать марку",
        sellerPartTypeLabel: "Тип запчастей",
        sellerPartTypeUsed: "Б/У",
        sellerPartTypeNew: "Новые",
        sellerPartTypeRequired: "Выберите хотя бы один тип запчастей.",
        sellerQualityLabel: "Качество",
        sellerQualityOem: "Оригинал (OEM)",
        sellerQualityAftermarket: "Аналог",
        sellerQualityRequired: "Выберите хотя бы одно качество.",

        sellerBusinessNameLabel: "Название компании",
        sellerBusinessNameRequired: "Укажите название компании.",
        sellerCroLabel: "Номер CRO",
        sellerCroInvalid: "Проверьте номер CRO: от 5 до 12 цифр.",
        sellerCroChecking: "Проверяем...",
        sellerCroOk: "Компания найдена по номеру CRO",
        sellerCroNotFound: "По этому номеру компания не найдена",
        sellerCroUnavailable: "Онлайн-проверка в этой сборке недоступна. Номер всё равно должен содержать от 5 до 12 цифр.",
        sellerDocsLabel: "Документы верификации",
        sellerDocsFor: "для «{sub}»",
        sellerDocsHint: "🔒 Финансовые показатели можно закрыть. Нам нужны только шапка с названием компании, дата и Eircode.",
        sellerDocsRequired: "Прикрепите хотя бы один документ.",
        sellerRemoveDoc: "Убрать документ",
        sellerVerifyPendingTitle: "Документы на модерации",
        sellerVerifyPendingText: "Мы проверим документы и откроем ваш профиль для входящих запросов. До этого вы можете продолжать пользоваться кабинетом.",

        sellerRepIntro: "Если наш менеджер уже был у вас или вы встречаетесь с представителем Allparts.ie, профиль можно активировать на месте.",
        sellerRepPhoneLabel: "Телефон компании или Eircode",
        sellerRepInvalid: "Укажите номер телефона или Eircode.",
        sellerRepRequested: "Запрос на активацию отправлен. Наш менеджер свяжется с вами, чтобы согласовать время.",
        sellerRepConsoleTitle: "Представитель Allparts.ie",
        sellerRepConsoleHint: "Введите телефон или Eircode клиента, чтобы активировать на месте.",
        sellerRepSearching: "Ищем...",
        sellerRepFound: "Клиент найден: {name}",
        sellerRepNotFound: "По этому телефону или Eircode клиент не найден",
        sellerRepUnavailable: "Поиск клиента в этой сборке недоступен.",

        tierLabel: "Тарифный план",
        tierBase: "Базовый",
        tierPro: "Pro",
        tierProPlus: "Pro+",
        tierPrivatePlus: "Private+",
        sellerVerifiedTitle: "Профиль верифицирован!",
        sellerVerifiedText: "Выберите тарифный план для активации бесплатного пробного периода: {trial}.",
        sellerVerifiedCta: "Выбрать тариф и начать триал",
        sellerTrialLength: "{n} дн.",
        sellerTrialStarted: "Бесплатный пробный период запущен: {trial}.",

        sellerDocUtilityBill: "Счёт за коммунальные услуги",
        sellerDocBankStatement: "Выписка по счёту",
        sellerDocWastePermit: "Разрешение на обращение с отходами",
        sellerDocAtfLicense: "Лицензия ATF",
        sellerDocVatCert: "Свидетельство о регистрации НДС",
        sellerDocCroCert: "Свидетельство о регистрации CRO",
        sellerDocSimiLicense: "Лицензия SIMI",
        sellerDocDistributorAgreement: "Договор дистрибуции"
    },


    zh: {
        sellerSubRoleTitle: "您是哪一类卖家？",
        sellerSubRoleSub: "这决定我们需要哪些文件。",
        sellerSubRoleDismantlers: "拆车厂",
        sellerSubRoleDismantlersSub: "车辆拆解厂与事故车回收场",
        sellerSubRoleMotorFactors: "汽车配件店",
        sellerSubRoleMotorFactorsSub: "汽车零部件分销商与批发商",
        sellerSubRoleDealers: "经销商",
        sellerSubRoleDealersSub: "特许经销商与进口商",
        sellerSubRoleOemTraders: "OEM 贸易商",
        sellerSubRoleOemTradersSub: "销售自有品牌配件的制造商",
        subRoleBack: "更改账户类型",

        tradeSubRoleTitle: "您是哪一类商家账号？",
        tradeSubRoleSub: "这决定页眉中如何称呼您。",
        tradeSubRolePrivate: "个人",
        tradeSubRoleMechanic: "维修技师",
        tradeSubRoleMechanicSub: "独立维修技师或维修厂",
        tradeSubRoleService: "服务站",
        tradeSubRoleServiceSub: "修理厂或车间的服务部门",
        tradeSubRoleTaxi: "出租车",
        tradeSubRoleTaxiSub: "出租车运营商或持牌车队",
        tradeSubRoleBusiness: "企业",
        tradeSubRoleBusinessSub: "为车队采购配件的公司",

        gateTitle: "您的资料正在激活中",
        gateText: "完成企业验证后即可接收买家询价并开始销售。",
        gateCta: "完成验证",
        gateReviewTitle: "资料审核中",
        gateReviewText: "您的资料已提交审核团队。在此期间您可以继续使用工作台。",
        gateReviewCta: "查看状态",

        sellerSetupFor: "资料设置：",
        sellerBrandsLabel: "配件品牌与型号",
        sellerBrandsPlaceholder: "选择品牌（或选择「全部品牌」）",
        sellerBrandsAll: "全部品牌",
        sellerBrandsNone: "没有匹配的品牌",
        sellerBrandsRequired: "请至少选择一个品牌，或选择「全部品牌」。",
        sellerRemoveBrand: "移除品牌",
        sellerPartTypeLabel: "配件类型",
        sellerPartTypeUsed: "二手",
        sellerPartTypeNew: "全新",
        sellerPartTypeRequired: "请至少选择一种配件类型。",
        sellerQualityLabel: "品质",
        sellerQualityOem: "原厂（OEM）",
        sellerQualityAftermarket: "替代品",
        sellerQualityRequired: "请至少选择一种品质。",

        sellerBusinessNameLabel: "企业名称",
        sellerBusinessNameRequired: "请填写企业名称。",
        sellerCroLabel: "CRO 编号",
        sellerCroInvalid: "请检查 CRO 编号：5 至 12 位数字。",
        sellerCroChecking: "正在核对...",
        sellerCroOk: "已找到该 CRO 编号",
        sellerCroNotFound: "未找到该编号对应的公司",
        sellerCroUnavailable: "此版本暂不支持在线核对。编号仍须为 5 至 12 位数字。",
        sellerDocsLabel: "验证文件",
        sellerDocsFor: "（{sub}）",
        sellerDocsHint: "🔒 财务数据可以遮挡。我们只需要包含企业名称、日期和 Eircode 的页眉。",
        sellerDocsRequired: "请至少上传一份文件。",
        sellerRemoveDoc: "移除文件",
        sellerVerifyPendingTitle: "资料审核中",
        sellerVerifyPendingText: "我们会审核您的资料，并为您的账号开放买家询价。在此期间您可以继续使用工作台。",

        sellerRepIntro: "如果我们的客户经理已经上门，或您正在与 Allparts.ie 代表会面，可以现场开通您的账号。",
        sellerRepPhoneLabel: "公司电话或 Eircode",
        sellerRepInvalid: "请输入电话号码或 Eircode。",
        sellerRepRequested: "开通请求已提交。我们的客户经理会与您约定时间。",
        sellerRepConsoleTitle: "Allparts.ie 客户代表",
        sellerRepConsoleHint: "输入客户的电话或 Eircode 以现场开通。",
        sellerRepSearching: "正在查找...",
        sellerRepFound: "已找到客户：{name}",
        sellerRepNotFound: "未找到该电话或 Eircode 对应的客户",
        sellerRepUnavailable: "此版本暂不支持客户查询。",

        tierLabel: "资费方案",
        tierBase: "基础版",
        tierPro: "Pro",
        tierProPlus: "Pro+",
        tierPrivatePlus: "Private+",
        sellerVerifiedTitle: "资料已通过验证！",
        sellerVerifiedText: "请选择资费方案以启用 {trial} 免费试用期。",
        sellerVerifiedCta: "选择方案并开始试用",
        sellerTrialLength: "{n} 天",
        sellerTrialStarted: "免费试用期已开始：{trial}。",

        sellerDocUtilityBill: "水电账单",
        sellerDocBankStatement: "银行对账单",
        sellerDocWastePermit: "废弃物处理许可",
        sellerDocAtfLicense: "ATF 牌照",
        sellerDocVatCert: "增值税证书",
        sellerDocCroCert: "CRO 证书",
        sellerDocSimiLicense: "SIMI 牌照",
        sellerDocDistributorAgreement: "经销协议"
    },


    it: {
        sellerSubRoleTitle: "Che tipo di venditore sei?",
        sellerSubRoleSub: "Da questo dipendono i documenti che ti chiederemo.",
        sellerSubRoleDismantlers: "Demolitore",
        sellerSubRoleDismantlersSub: "Demolitori auto e aree di recupero",
        sellerSubRoleMotorFactors: "Negozio ricambi",
        sellerSubRoleMotorFactorsSub: "Distributori e grossisti di ricambi",
        sellerSubRoleDealers: "Concessionario",
        sellerSubRoleDealersSub: "Concessionari autorizzati e importatori",
        sellerSubRoleOemTraders: "Rivenditore OEM",
        sellerSubRoleOemTradersSub: "Produttori che vendono i propri ricambi",
        subRoleBack: "Cambia tipo di account",

        tradeSubRoleTitle: "Che tipo di account professionale ha?",
        tradeSubRoleSub: "Determina come l'app vi chiama nell'intestazione.",
        tradeSubRolePrivate: "Privato",
        tradeSubRoleMechanic: "Meccanico",
        tradeSubRoleMechanicSub: "Meccanico indipendente o officina",
        tradeSubRoleService: "Servizio",
        tradeSubRoleServiceSub: "Reparto assistenza di garage o officina",
        tradeSubRoleTaxi: "Taxi",
        tradeSubRoleTaxiSub: "Operatore taxi o flotta con licenza",
        tradeSubRoleBusiness: "Azienda",
        tradeSubRoleBusinessSub: "Azienda che acquista ricambi per la propria flotta",

        gateTitle: "Il tuo profilo è in fase di attivazione",
        gateText: "Completa la verifica della tua attività per accedere alle richieste dei compratori e iniziare a vendere.",
        gateCta: "Completa la verifica",
        gateReviewTitle: "Documenti in revisione",
        gateReviewText: "I tuoi documenti sono con il nostro team di moderazione.Nel frattempo puoi continuare a usare l'area riservata.",
        gateReviewCta: "Vedi lo stato",

        sellerSetupFor: "Configurazione profilo:",
        sellerBrandsLabel: "Marchi e modelli di ricambi",
        sellerBrandsPlaceholder: "Seleziona i marchi (o \"Tutti i marchi\")",
        sellerBrandsAll: "Tutti i marchi",
        sellerBrandsNone: "Nessun marchio corrisponde",
        sellerBrandsRequired: "Scegli almeno un marchio oppure Tutti i marchi.",
        sellerRemoveBrand: "Rimuovi marchio",
        sellerPartTypeLabel: "Tipo di ricambi",
        sellerPartTypeUsed: "Usati",
        sellerPartTypeNew: "Nuovi",
        sellerPartTypeRequired: "Scegli almeno un tipo di ricambio.",
        sellerQualityLabel: "Qualità",
        sellerQualityOem: "Originale (OEM)",
        sellerQualityAftermarket: "Aftermarket",
        sellerQualityRequired: "Scegli almeno una qualità.",

        sellerBusinessNameLabel: "Nome dell'attività",
        sellerBusinessNameRequired: "Inserisci il nome della tua attività.",
        sellerCroLabel: "Numero CRO",
        sellerCroInvalid: "Controlla il numero CRO: da 5 a 12 cifre.",
        sellerCroChecking: "Verifica in corso...",
        sellerCroOk: "Numero CRO trovato",
        sellerCroNotFound: "Nessuna attività trovata per questo numero",
        sellerCroUnavailable: "La verifica online non è disponibile in questa versione. Il numero deve comunque avere da 5 a 12 cifre.",
        sellerDocsLabel: "Documenti di verifica",
        sellerDocsFor: "per {sub}",
        sellerDocsHint: "🔒 Puoi coprire gli importi. Ci serve solo l'intestazione con nome dell'azienda, data ed Eircode.",
        sellerDocsRequired: "Allega almeno un documento.",
        sellerRemoveDoc: "Rimuovi documento",
        sellerVerifyPendingTitle: "Documenti in revisione",
        sellerVerifyPendingText: "Esamineremo i tuoi documenti e apriremo il tuo profilo alle richieste in arrivo. Nel frattempo puoi continuare a usare l'area riservata.",

        sellerRepIntro: "Se uno dei nostri responsabili è già passato da te, o se incontri un rappresentante Allparts.ie, il profilo può essere attivato sul posto.",
        sellerRepPhoneLabel: "Telefono aziendale o Eircode",
        sellerRepInvalid: "Inserisci un numero di telefono o un Eircode.",
        sellerRepRequested: "Richiesta di attivazione inviata. Il nostro responsabile ti contatterà per concordare un orario.",
        sellerRepConsoleTitle: "Rappresentante Allparts.ie",
        sellerRepConsoleHint: "Inserisci il telefono o l'Eircode del cliente per attivarlo sul posto.",
        sellerRepSearching: "Ricerca in corso...",
        sellerRepFound: "Cliente trovato: {name}",
        sellerRepNotFound: "Nessun cliente trovato per questo telefono o Eircode",
        sellerRepUnavailable: "La ricerca dei clienti non è disponibile in questa versione.",

        tierLabel: "Piano tariffario",
        tierBase: "Base",
        tierPro: "Pro",
        tierProPlus: "Pro+",
        tierPrivatePlus: "Private+",
        sellerVerifiedTitle: "Profilo verificato!",
        sellerVerifiedText: "Scegli un piano tariffario per attivare il tuo periodo di prova gratuito di {trial}.",
        sellerVerifiedCta: "Scegli il piano e inizia la prova",
        sellerTrialLength: "{n} giorni",
        sellerTrialStarted: "Il periodo di prova gratuito è iniziato: {trial}.",

        sellerDocUtilityBill: "Bolletta di utenza",
        sellerDocBankStatement: "Estratto conto",
        sellerDocWastePermit: "Autorizzazione per il trattamento dei rifiuti",
        sellerDocAtfLicense: "Licenza ATF",
        sellerDocVatCert: "Certificato IVA",
        sellerDocCroCert: "Certificato CRO",
        sellerDocSimiLicense: "Licenza SIMI",
        sellerDocDistributorAgreement: "Contratto di distribuzione"
    },


    de: {
        sellerSubRoleTitle: "Welche Art von Verkäufer sind Sie?",
        sellerSubRoleSub: "Danach richtet sich, welche Dokumente wir anfordern.",
        sellerSubRoleDismantlers: "Autoverwertung",
        sellerSubRoleDismantlersSub: "Fahrzeugverwerter und Abschleppbetriebe",
        sellerSubRoleMotorFactors: "Autoteile-Shop",
        sellerSubRoleMotorFactorsSub: "Teiledistributoren und Großhändler",
        sellerSubRoleDealers: "Händler",
        sellerSubRoleDealersSub: "Vertragshändler und Importeure",
        sellerSubRoleOemTraders: "OEM-Händler",
        sellerSubRoleOemTradersSub: "Hersteller, die eigene Teile verkaufen",
        subRoleBack: "Kontotyp ändern",

        tradeSubRoleTitle: "Welche Art von Gewerbekonto haben Sie?",
        tradeSubRoleSub: "Das bestimmt, wie Sie in der Kopfzeile genannt werden.",
        tradeSubRolePrivate: "Privat",
        tradeSubRoleMechanic: "Mechaniker",
        tradeSubRoleMechanicSub: "Freier Mechaniker oder Werkstatt",
        tradeSubRoleService: "Service",
        tradeSubRoleServiceSub: "Serviceabteilung von Garage oder Werkstatt",
        tradeSubRoleTaxi: "Taxi",
        tradeSubRoleTaxiSub: "Taxiunternehmer oder lizenzierte Flotte",
        tradeSubRoleBusiness: "Unternehmen",
        tradeSubRoleBusinessSub: "Unternehmen, das Teile für seinen Fuhrpark kauft",

        gateTitle: "Ihr Profil befindet sich in der Freischaltungsphase",
        gateText: "Schließen Sie die Unternehmensverifizierung ab, um Anfragen von Käufern zu empfangen und mit dem Verkauf zu beginnen.",
        gateCta: "Verifizierung abschließen",
        gateReviewTitle: "Unterlagen in Prüfung",
        gateReviewText: "Ihre Unterlagen liegen unserem Prüfteam vor. Sie können den Bereich weiterhin nutzen.",
        gateReviewCta: "Status ansehen",

        sellerSetupFor: "Profil einrichten:",
        sellerBrandsLabel: "Marken und Modelle von Ersatzteilen",
        sellerBrandsPlaceholder: "Marken auswählen (oder \"Alle Marken\")",
        sellerBrandsAll: "Alle Marken",
        sellerBrandsNone: "Keine Marke passt dazu",
        sellerBrandsRequired: "Wählen Sie mindestens eine Marke oder Alle Marken.",
        sellerRemoveBrand: "Marke entfernen",
        sellerPartTypeLabel: "Art der Ersatzteile",
        sellerPartTypeUsed: "Gebraucht",
        sellerPartTypeNew: "Neu",
        sellerPartTypeRequired: "Wählen Sie mindestens eine Art von Ersatzteil.",
        sellerQualityLabel: "Qualität",
        sellerQualityOem: "Original (OEM)",
        sellerQualityAftermarket: "Aftermarket",
        sellerQualityRequired: "Wählen Sie mindestens eine Qualität.",

        sellerBusinessNameLabel: "Unternehmensname",
        sellerBusinessNameRequired: "Geben Sie Ihren Unternehmensnamen ein.",
        sellerCroLabel: "CRO-Nummer",
        sellerCroInvalid: "Prüfen Sie die CRO-Nummer: 5 bis 12 Ziffern.",
        sellerCroChecking: "Wird geprüft...",
        sellerCroOk: "CRO-Nummer gefunden",
        sellerCroNotFound: "Zu dieser Nummer wurde kein Unternehmen gefunden",
        sellerCroUnavailable: "Die Online-Prüfung ist in diesem Build nicht verfügbar. Die Nummer muss weiterhin 5 bis 12 Ziffern haben.",
        sellerDocsLabel: "Verifizierungsunterlagen",
        sellerDocsFor: "für {sub}",
        sellerDocsHint: "🔒 Sie dürfen die Beträge schwärzen. Wir brauchen nur den Kopf mit Firmenname, Datum und Eircode.",
        sellerDocsRequired: "Hängen Sie mindestens ein Dokument an.",
        sellerRemoveDoc: "Dokument entfernen",
        sellerVerifyPendingTitle: "Unterlagen in Prüfung",
        sellerVerifyPendingText: "Wir prüfen Ihre Unterlagen und öffnen Ihr Profil für eingehende Anfragen. Sie können den Bereich weiterhin nutzen.",

        sellerRepIntro: "Wenn einer unserer Manager bereits bei Ihnen war oder Sie einen Allparts.ie-Vertreter treffen, kann Ihr Profil vor Ort freigeschaltet werden.",
        sellerRepPhoneLabel: "Firmentelefon oder Eircode",
        sellerRepInvalid: "Geben Sie eine Telefonnummer oder einen Eircode ein.",
        sellerRepRequested: "Freischaltung angefragt. Unser Manager meldet sich, um einen Termin abzustimmen.",
        sellerRepConsoleTitle: "Allparts.ie-Vertreter",
        sellerRepConsoleHint: "Geben Sie Telefon oder Eircode des Kunden ein, um vor Ort freizuschalten.",
        sellerRepSearching: "Wird gesucht...",
        sellerRepFound: "Kunde gefunden: {name}",
        sellerRepNotFound: "Zu diesem Telefon oder Eircode wurde kein Kunde gefunden",
        sellerRepUnavailable: "Die Kundensuche ist in diesem Build nicht verfügbar.",

        tierLabel: "Tarifmodell",
        tierBase: "Basis",
        tierPro: "Pro",
        tierProPlus: "Pro+",
        tierPrivatePlus: "Private+",
        sellerVerifiedTitle: "Profil verifiziert!",
        sellerVerifiedText: "Wählen Sie ein Tarifmodell, um Ihre kostenlose Testphase über {trial} zu starten.",
        sellerVerifiedCta: "Tarif wählen und Testphase starten",
        sellerTrialLength: "{n} Tage",
        sellerTrialStarted: "Ihre kostenlose Testphase läuft: {trial}.",

        sellerDocUtilityBill: "Versorgungsrechnung",
        sellerDocBankStatement: "Kontoauszug",
        sellerDocWastePermit: "Genehmigung für Abfallanlagen",
        sellerDocAtfLicense: "ATF-Lizenz",
        sellerDocVatCert: "Umsatzsteuerbescheinigung",
        sellerDocCroCert: "CRO-Bescheinigung",
        sellerDocSimiLicense: "SIMI-Lizenz",
        sellerDocDistributorAgreement: "Vertriebsvertrag"
    },


    lt: {
        sellerSubRoleTitle: "Kokio tipo pardavėjas esate?",
        sellerSubRoleSub: "Nuo to priklauso, kokių dokumentų paprašysime.",
        sellerSubRoleDismantlers: "Automobilių perdirbėjas",
        sellerSubRoleDismantlersSub: "Automobilių perdirbimo aikštelės ir evakuacijos teritorijos",
        sellerSubRoleMotorFactors: "Autodalių parduotuvė",
        sellerSubRoleMotorFactorsSub: "Dalių platintojai ir didmenininkai",
        sellerSubRoleDealers: "Prekybininkas",
        sellerSubRoleDealersSub: "Oficialūs prekybininkai ir importuotojai",
        sellerSubRoleOemTraders: "OEM prekybininkas",
        sellerSubRoleOemTradersSub: "Gamintojai, parduodantys savo detales",
        subRoleBack: "Keisti paskyros tipą",

        tradeSubRoleTitle: "Kokio tipo verslo paskyra yra jūsų?",
        tradeSubRoleSub: "Tai nustato, kaip antraštėje vadinama jūs.",
        tradeSubRolePrivate: "Privatus",
        tradeSubRoleMechanic: "Mechanikas",
        tradeSubRoleMechanicSub: "Nepriklausomas mechanikas arba autoservisas",
        tradeSubRoleService: "Servisas",
        tradeSubRoleServiceSub: "Garazo arba dirbtuvės serviso skyrius",
        tradeSubRoleTaxi: "Taksi",
        tradeSubRoleTaxiSub: "Taksių operatorius arba licencijuotas automobilių parkas",
        tradeSubRoleBusiness: "Įmonė",
        tradeSubRoleBusinessSub: "Įmonė, perkanti detales savo automobilių parkui",

        gateTitle: "Jūsų profilis yra aktyvinimo etape",
        gateText: "Užbaigkite verslo patvirtinimą, kad galėtumėte gauti pirkėjų užklausas ir pradėti pardavimą.",
        gateCta: "Užbaigti patvirtinimą",
        gateReviewTitle: "Dokumentai tikrinami",
        gateReviewText: "Jūsų dokumentai yra mūsų moderavimo komandoje. Tuo tarpu galite toliau naudotis kabinetu.",
        gateReviewCta: "Žiūrėti būseną",

        sellerSetupFor: "Profilio nustatymas:",
        sellerBrandsLabel: "Dalių markės ir modeliai",
        sellerBrandsPlaceholder: "Pasirinkite markes (arba „Visos markės“)",
        sellerBrandsAll: "Visos markės",
        sellerBrandsNone: "Nėra atitinkančių markių",
        sellerBrandsRequired: "Pasirinkite bent vieną markę arba „Visos markės“.",
        sellerRemoveBrand: "Pašalinti markę",
        sellerPartTypeLabel: "Dalių tipas",
        sellerPartTypeUsed: "Naudotos",
        sellerPartTypeNew: "Naujos",
        sellerPartTypeRequired: "Pasirinkite bent vieną dalių tipą.",
        sellerQualityLabel: "Kokybė",
        sellerQualityOem: "Originalios (OEM)",
        sellerQualityAftermarket: "Analogai",
        sellerQualityRequired: "Pasirinkite bent vieną kokybę.",

        sellerBusinessNameLabel: "Įmonės pavadinimas",
        sellerBusinessNameRequired: "Įveskite savo įmonės pavadinimą.",
        sellerCroLabel: "CRO numeris",
        sellerCroInvalid: "Patikrinkite CRO numerį: nuo 5 iki 12 skaitmenų.",
        sellerCroChecking: "Tikrinama...",
        sellerCroOk: "CRO numeris rastas",
        sellerCroNotFound: "Šiam numeriui įmonė nerasta",
        sellerCroUnavailable: "Šioje versijoje internetinė patikra nepasiekiama. Numeris vis tiek turi būti nuo 5 iki 12 skaitmenų.",
        sellerDocsLabel: "Patvirtinimo dokumentai",
        sellerDocsFor: "subjektui „{sub}“",
        sellerDocsHint: "🔒 Finansinius rodiklius galite uždengti. Mums reikia tik antraštės su įmonės pavadinimu, data ir Eircode.",
        sellerDocsRequired: "Prisegkite bent vieną dokumentą.",
        sellerRemoveDoc: "Pašalinti dokumentą",
        sellerVerifyPendingTitle: "Dokumentai tikrinami",
        sellerVerifyPendingText: "Patikrinsime dokumentus ir atidarysime jūsų profilį gaunantoms užklausoms. Tuo tarpu galite toliau naudotis kabinetu.",

        sellerRepIntro: "Jei mūsų vadovas jau lankėsi pas jus arba susitinkate su Allparts.ie atstovu, jūsų profilį galima aktyvuoti vietoje.",
        sellerRepPhoneLabel: "Įmonės telefonas arba Eircode",
        sellerRepInvalid: "Įveskite telefono numerį arba Eircode.",
        sellerRepRequested: "Aktivavimo užklausa išsiųsta. Mūsų vadovas susisieks su jumis, kad suderintų laiką.",
        sellerRepConsoleTitle: "Allparts.ie atstovas",
        sellerRepConsoleHint: "Įveskite kliento telefoną arba Eircode, kad aktyvuotumėte vietoje.",
        sellerRepSearching: "Ieškoma...",
        sellerRepFound: "Klientas rastas: {name}",
        sellerRepNotFound: "Šiuo telefonu arba Eircode klientas nerastas",
        sellerRepUnavailable: "Šioje versijoje klientų paieška nepasiekiama.",

        tierLabel: "Tarifų planas",
        tierBase: "Bazinis",
        tierPro: "Pro",
        tierProPlus: "Pro+",
        tierPrivatePlus: "Private+",
        sellerVerifiedTitle: "Profilis patvirtintas!",
        sellerVerifiedText: "Pasirinkite tarifų planą, kad įjungtumėte nemokamą {trial} bandymą.",
        sellerVerifiedCta: "Pasirinkti planą ir pradėti bandymą",
        sellerTrialLength: "{n} d.",
        sellerTrialStarted: "Nemokamas bandymas pradėtas: {trial}.",

        sellerDocUtilityBill: "Komunalinių mokesčių sąskaita",
        sellerDocBankStatement: "Banko išrašas",
        sellerDocWastePermit: "Atliekų tvarkymo leidimas",
        sellerDocAtfLicense: "ATF licencija",
        sellerDocVatCert: "PVM sertifikatas",
        sellerDocCroCert: "CRO sertifikatas",
        sellerDocSimiLicense: "SIMI licencija",
        sellerDocDistributorAgreement: "Pasiskirstymo sutartis"
    },


    pt: {
        sellerSubRoleTitle: "Que tipo de vendedor é você?",
        sellerSubRoleSub: "Isso determina os documentos que pedimos.",
        sellerSubRoleDismantlers: "Desmonteira",
        sellerSubRoleDismantlersSub: "Desmontadoras de veículos e pátios de recuperação",
        sellerSubRoleMotorFactors: "Loja de peças",
        sellerSubRoleMotorFactorsSub: "Distribuidores e grossistas de peças",
        sellerSubRoleDealers: "Concessionário",
        sellerSubRoleDealersSub: "Concessionários autorizados e importadores",
        sellerSubRoleOemTraders: "Negociante OEM",
        sellerSubRoleOemTradersSub: "Fabricantes que vendem as suas próprias peças",
        subRoleBack: "Alterar tipo de conta",

        tradeSubRoleTitle: "Que tipo de conta profissional tem?",
        tradeSubRoleSub: "Isso determina como a aplicação o chama no cabeçalho.",
        tradeSubRolePrivate: "Particular",
        tradeSubRoleMechanic: "Mecânico",
        tradeSubRoleMechanicSub: "Mecânico independente ou oficina",
        tradeSubRoleService: "Serviço",
        tradeSubRoleServiceSub: "Departamento de assistência de garagem ou oficina",
        tradeSubRoleTaxi: "Táxi",
        tradeSubRoleTaxiSub: "Operador de táxi ou frota licenciada",
        tradeSubRoleBusiness: "Empresa",
        tradeSubRoleBusinessSub: "Empresa que compra peças para a sua frota",

        gateTitle: "O seu perfil está na etapa de ativação",
        gateText: "Conclua a verificação da sua empresa para aceder aos pedidos dos compradores e começar a vender.",
        gateCta: "Concluir verificação",
        gateReviewTitle: "Documentos em análise",
        gateReviewText: "Os seus documentos estão com a nossa equipa de moderação. Pode continuar a usar a área pessoal entretanto.",
        gateReviewCta: "Ver estado",

        sellerSetupFor: "Configuração do perfil:",
        sellerBrandsLabel: "Marcas e modelos de peças",
        sellerBrandsPlaceholder: "Selecione marcas (ou \"Todas as marcas\")",
        sellerBrandsAll: "Todas as marcas",
        sellerBrandsNone: "Nenhuma marca corresponde",
        sellerBrandsRequired: "Escolha pelo menos uma marca, ou Todas as marcas.",
        sellerRemoveBrand: "Remover marca",
        sellerPartTypeLabel: "Tipo de peças",
        sellerPartTypeUsed: "Usadas",
        sellerPartTypeNew: "Novas",
        sellerPartTypeRequired: "Escolha pelo menos um tipo de peça.",
        sellerQualityLabel: "Qualidade",
        sellerQualityOem: "Original (OEM)",
        sellerQualityAftermarket: "Alternativa",
        sellerQualityRequired: "Escolha pelo menos uma qualidade.",

        sellerBusinessNameLabel: "Nome da empresa",
        sellerBusinessNameRequired: "Indique o nome da sua empresa.",
        sellerCroLabel: "Número CRO",
        sellerCroInvalid: "Verifique o número CRO: de 5 a 12 dígitos.",
        sellerCroChecking: "A verificar...",
        sellerCroOk: "Número CRO encontrado",
        sellerCroNotFound: "Nenhuma empresa encontrada para este número",
        sellerCroUnavailable: "A verificação online não está disponível nesta versão. O número continua a ter de ter de 5 a 12 dígitos.",
        sellerDocsLabel: "Documentos de verificação",
        sellerDocsFor: "para {sub}",
        sellerDocsHint: "🔒 Pode tapar os valores financeiros. Só precisamos do cabeçalho com o nome da empresa, a data e o Eircode.",
        sellerDocsRequired: "Anexe pelo menos um documento.",
        sellerRemoveDoc: "Remover documento",
        sellerVerifyPendingTitle: "Documentos em análise",
        sellerVerifyPendingText: "Vamos analisar os seus documentos e abrir o seu perfil para pedidos recebidos. Pode continuar a usar a área pessoal entretanto.",

        sellerRepIntro: "Se um dos nossos gestores já passou por si, ou se está a encontrar um representante da Allparts.ie, o seu perfil pode ser ativado no local.",
        sellerRepPhoneLabel: "Telefone da empresa ou Eircode",
        sellerRepInvalid: "Introduza um número de telefone ou um Eircode.",
        sellerRepRequested: "Pedido de ativação enviado. O nosso gestor entrará em contacto para marcar uma hora.",
        sellerRepConsoleTitle: "Representante da Allparts.ie",
        sellerRepConsoleHint: "Introduza o telefone ou o Eircode do cliente para ativar no local.",
        sellerRepSearching: "A procurar...",
        sellerRepFound: "Cliente encontrado: {name}",
        sellerRepNotFound: "Nenhum cliente encontrado para este telefone ou Eircode",
        sellerRepUnavailable: "A pesquisa de clientes não está disponível nesta versão.",

        tierLabel: "Plano tarifário",
        tierBase: "Base",
        tierPro: "Pro",
        tierProPlus: "Pro+",
        tierPrivatePlus: "Private+",
        sellerVerifiedTitle: "Perfil verificado!",
        sellerVerifiedText: "Escolha um plano tarifário para ativar o período experimental gratuito de {trial}.",
        sellerVerifiedCta: "Escolher plano e iniciar o período",
        sellerTrialLength: "{n} dias",
        sellerTrialStarted: "O período experimental gratuito começou: {trial}.",

        sellerDocUtilityBill: "Fatura de serviço",
        sellerDocBankStatement: "Extrato bancário",
        sellerDocWastePermit: "Licença de tratamento de resíduos",
        sellerDocAtfLicense: "Licença ATF",
        sellerDocVatCert: "Certificado de IVA",
        sellerDocCroCert: "Certificado CRO",
        sellerDocSimiLicense: "Licença SIMI",
        sellerDocDistributorAgreement: "Contrato de distribuição"
    },


    es: {
        sellerSubRoleTitle: "¿Qué tipo de vendedor eres?",
        sellerSubRoleSub: "Esto determina qué documentos te pedimos.",
        sellerSubRoleDismantlers: "Desguace",
        sellerSubRoleDismantlersSub: "Desguaces de vehículos y yards de recuperación",
        sellerSubRoleMotorFactors: "Tienda de recambios",
        sellerSubRoleMotorFactorsSub: "Distribuidores y mayoristas de recambios",
        sellerSubRoleDealers: "Concesionario",
        sellerSubRoleDealersSub: "Concesionarios autorizados e importadores",
        sellerSubRoleOemTraders: "Distribuidor OEM",
        sellerSubRoleOemTradersSub: "Fabricantes que venden sus propias piezas",
        subRoleBack: "Cambiar tipo de cuenta",

        tradeSubRoleTitle: "¿Qué tipo de cuenta profesional tiene?",
        tradeSubRoleSub: "Esto determina cómo le llama la aplicación en la cabecera.",
        tradeSubRolePrivate: "Particular",
        tradeSubRoleMechanic: "Mecánico",
        tradeSubRoleMechanicSub: "Mecánico independiente o taller",
        tradeSubRoleService: "Servicio",
        tradeSubRoleServiceSub: "Departamento de servicio de garaje o taller",
        tradeSubRoleTaxi: "Taxi",
        tradeSubRoleTaxiSub: "Operador de taxi o flota con licencia",
        tradeSubRoleBusiness: "Empresa",
        tradeSubRoleBusinessSub: "Empresa que compra recambios para su flota",

        gateTitle: "Su perfil está en la etapa de activación",
        gateText: "Complete la verificación de su empresa para recibir las solicitudes de los compradores y empezar a vender.",
        gateCta: "Completar verificación",
        gateReviewTitle: "Documentos en revisión",
        gateReviewText: "Sus documentos están con nuestro equipo de moderación. Mientras tanto puede seguir usando el área personal.",
        gateReviewCta: "Ver estado",

        sellerSetupFor: "Configuración del perfil:",
        sellerBrandsLabel: "Marcas y modelos de recambios",
        sellerBrandsPlaceholder: "Seleccione marcas (o «Todas las marcas»)",
        sellerBrandsAll: "Todas las marcas",
        sellerBrandsNone: "Ninguna marca coincide",
        sellerBrandsRequired: "Elija al menos una marca, o Todas las marcas.",
        sellerRemoveBrand: "Quitar marca",
        sellerPartTypeLabel: "Tipo de recambios",
        sellerPartTypeUsed: "Usados",
        sellerPartTypeNew: "Nuevos",
        sellerPartTypeRequired: "Elija al menos un tipo de recambio.",
        sellerQualityLabel: "Calidad",
        sellerQualityOem: "Original (OEM)",
        sellerQualityAftermarket: "Alternativo",
        sellerQualityRequired: "Elija al menos una calidad.",

        sellerBusinessNameLabel: "Nombre de la empresa",
        sellerBusinessNameRequired: "Indique el nombre de su empresa.",
        sellerCroLabel: "Número CRO",
        sellerCroInvalid: "Revise el número CRO: de 5 a 12 dígitos.",
        sellerCroChecking: "Comprobando...",
        sellerCroOk: "Número CRO encontrado",
        sellerCroNotFound: "No se ha encontrado ninguna empresa con este número",
        sellerCroUnavailable: "La comprobación en línea no está disponible en esta versión. El número debe tener entre 5 y 12 dígitos igualmente.",
        sellerDocsLabel: "Documentos de verificación",
        sellerDocsFor: "para {sub}",
        sellerDocsHint: "🔒 Puede tapar las cifras financieras. Solo necesitamos el encabezado con el nombre de la empresa, la fecha y el Eircode.",
        sellerDocsRequired: "Adjunte al menos un documento.",
        sellerRemoveDoc: "Quitar documento",
        sellerVerifyPendingTitle: "Documentos en revisión",
        sellerVerifyPendingText: "Revisaremos sus documentos y abriremos su perfil a las solicitudes entrantes. Mientras tanto puede seguir usando el área personal.",

        sellerRepIntro: "Si uno de nuestros responsables ya ha pasado por su empresa, o si se encuentra con un representante de Allparts.ie, su perfil puede activarse in situ.",
        sellerRepPhoneLabel: "Teléfono de la empresa o Eircode",
        sellerRepInvalid: "Introduzca un número de teléfono o un Eircode.",
        sellerRepRequested: "Solicitud de activación enviada. Nuestro responsable se pondrá en contacto para concertar una hora.",
        sellerRepConsoleTitle: "Representante de Allparts.ie",
        sellerRepConsoleHint: "Introduzca el teléfono o el Eircode del cliente para activarlo in situ.",
        sellerRepSearching: "Buscando...",
        sellerRepFound: "Cliente encontrado: {name}",
        sellerRepNotFound: "No se ha encontrado ningún cliente con ese teléfono o Eircode",
        sellerRepUnavailable: "La búsqueda de clientes no está disponible en esta versión.",

        tierLabel: "Plan tarifario",
        tierBase: "Básico",
        tierPro: "Pro",
        tierProPlus: "Pro+",
        tierPrivatePlus: "Private+",
        sellerVerifiedTitle: "¡Perfil verificado!",
        sellerVerifiedText: "Elija un plan tarifario para activar su período de prueba gratuito de {trial}.",
        sellerVerifiedCta: "Elegir plan e iniciar el período de prueba",
        sellerTrialLength: "{n} días",
        sellerTrialStarted: "Su período de prueba gratuito ha comenzado: {trial}.",

        sellerDocUtilityBill: "Factura de suministro",
        sellerDocBankStatement: "Extracto bancario",
        sellerDocWastePermit: "Licencia de gestión de residuos",
        sellerDocAtfLicense: "Licencia ATF",
        sellerDocVatCert: "Certificado de IVA",
        sellerDocCroCert: "Certificado CRO",
        sellerDocSimiLicense: "Licencia SIMI",
        sellerDocDistributorAgreement: "Contrato de distribución"
    },


    pl: {
        sellerSubRoleTitle: "Jakiego typu sprzedawcy jesteś?",
        sellerSubRoleSub: "Od tego zależy, jakich dokumentów będziemy wymagać.",
        sellerSubRoleDismantlers: "Demolizer pojazdów",
        sellerSubRoleDismantlersSub: "Stacje demontażu i place odzysku pojazdów",
        sellerSubRoleMotorFactors: "Sklep z częściami",
        sellerSubRoleMotorFactorsSub: "Dystrybutorzy i hurtownie części samochodowych",
        sellerSubRoleDealers: "Dealer",
        sellerSubRoleDealersSub: "Autoryzowani dealerzy i importerzy",
        sellerSubRoleOemTraders: "Dystrybutor OEM",
        sellerSubRoleOemTradersSub: "Producenci sprzedający własne części",
        subRoleBack: "Zmień typ konta",

        tradeSubRoleTitle: "Jakie ma Pan konto zawodowe?",
        tradeSubRoleSub: "To decyduje, jak nazywa Cię aplikacja w nagłówku.",
        tradeSubRolePrivate: "Prywatne",
        tradeSubRoleMechanic: "Mechanik",
        tradeSubRoleMechanicSub: "Niezależny mechanik lub warsztat",
        tradeSubRoleService: "Serwis",
        tradeSubRoleServiceSub: "Dział serwisowy garażu lub warsztatu",
        tradeSubRoleTaxi: "Taxi",
        tradeSubRoleTaxiSub: "Operator taksówki lub licencjonowana flota",
        tradeSubRoleBusiness: "Firma",
        tradeSubRoleBusinessSub: "Firma kupująca części dla swojej floty",

        gateTitle: "Twój profil jest na etapie aktywacji",
        gateText: "Dokończ weryfikację firmy, aby odbierać zapytania od kupujących i zacząć sprzedawać.",
        gateCta: "Dokończ weryfikację",
        gateReviewTitle: "Dokumenty w trakcie weryfikacji",
        gateReviewText: "Twoje dokumenty są u naszego zespołu moderującego. W międzyczasie możesz dalej korzystać z kabinetu.",
        gateReviewCta: "Zobacz status",

        sellerSetupFor: "Ustawienia profilu:",
        sellerBrandsLabel: "Marki i modele części",
        sellerBrandsPlaceholder: "Wybierz marki (lub „Wszystkie marki”)",
        sellerBrandsAll: "Wszystkie marki",
        sellerBrandsNone: "Żadna marka nie pasuje",
        sellerBrandsRequired: "Wybierz co najmniej jedną markę albo Wszystkie marki.",
        sellerRemoveBrand: "Usuń markę",
        sellerPartTypeLabel: "Rodzaj części",
        sellerPartTypeUsed: "Używane",
        sellerPartTypeNew: "Nowe",
        sellerPartTypeRequired: "Wybierz co najmniej jeden rodzaj części.",
        sellerQualityLabel: "Jakość",
        sellerQualityOem: "Oryginał (OEM)",
        sellerQualityAftermarket: "Zamiennik",
        sellerQualityRequired: "Wybierz co najmniej jedną jakość.",

        sellerBusinessNameLabel: "Nazwa firmy",
        sellerBusinessNameRequired: "Podaj nazwę swojej firmy.",
        sellerCroLabel: "Numer CRO",
        sellerCroInvalid: "Sprawdź numer CRO: od 5 do 12 cyfr.",
        sellerCroChecking: "Sprawdzamy...",
        sellerCroOk: "Znaleziono numer CRO",
        sellerCroNotFound: "Nie znaleziono firmy o tym numerze",
        sellerCroUnavailable: "Sprawdzanie online nie jest dostępne w tej wersji. Numer nadal musi mieć od 5 do 12 cyfr.",
        sellerDocsLabel: "Dokumenty weryfikacyjne",
        sellerDocsFor: "dla „{sub}”",
        sellerDocsHint: "🔒 Możesz zasłonić kwoty. Potrzebujemy tylko nagłówka z nazwą firmy, datą i Eircode.",
        sellerDocsRequired: "Dołącz co najmniej jeden dokument.",
        sellerRemoveDoc: "Usuń dokument",
        sellerVerifyPendingTitle: "Dokumenty w trakcie weryfikacji",
        sellerVerifyPendingText: "Sprawdzimy dokumenty i otworzymy Twój profil dla przychodzących zapytań. W międzyczasie możesz dalej korzystać z kabinetu.",

        sellerRepIntro: "Jeśli jeden z naszych kierowników już u Państwa był albo spotykają się Państwo z przedstawicielem Allparts.ie, profil można aktywować na miejscu.",
        sellerRepPhoneLabel: "Telefon firmy lub Eircode",
        sellerRepInvalid: "Podaj numer telefonu lub Eircode.",
        sellerRepRequested: "Wysłano prośbę o aktywację. Nasz kierownik skontaktuje się, aby ustalić termin.",
        sellerRepConsoleTitle: "Przedstawiciel Allparts.ie",
        sellerRepConsoleHint: "Podaj telefon lub Eircode klienta, aby aktywować na miejscu.",
        sellerRepSearching: "Szukamy...",
        sellerRepFound: "Znaleziono klienta: {name}",
        sellerRepNotFound: "Nie znaleziono klienta o tym telefonie lub Eircode",
        sellerRepUnavailable: "Wyszukiwanie klientów nie jest dostępne w tej wersji.",

        tierLabel: "Plan taryfowy",
        tierBase: "Podstawowy",
        tierPro: "Pro",
        tierProPlus: "Pro+",
        tierPrivatePlus: "Private+",
        sellerVerifiedTitle: "Profil zweryfikowany!",
        sellerVerifiedText: "Wybierz plan taryfowy, aby uruchomić bezpłatny okres próbny ({trial}).",
        sellerVerifiedCta: "Wybierz plan i rozpocznij okres próbny",
        sellerTrialLength: "{n} dni",
        sellerTrialStarted: "Bezpłatny okres próbny rozpoczęty: {trial}.",

        sellerDocUtilityBill: "Rachunek za media",
        sellerDocBankStatement: "Wyciąg bankowy",
        sellerDocWastePermit: "Pozwolenie na gospodarowanie odpadami",
        sellerDocAtfLicense: "Licencja ATF",
        sellerDocVatCert: "Certyfikat VAT",
        sellerDocCroCert: "Certyfikat CRO",
        sellerDocSimiLicense: "Licencja SIMI",
        sellerDocDistributorAgreement: "Umowa dystrybucji"
    },


    fr: {
        sellerSubRoleTitle: "Quel type de vendeur êtes-vous ?",
        sellerSubRoleSub: "Cela détermine les documents que nous demandons.",
        sellerSubRoleDismantlers: "Casseur",
        sellerSubRoleDismantlersSub: "Cassiers automobiles et aires de récupération",
        sellerSubRoleMotorFactors: "Magasin de pièces",
        sellerSubRoleMotorFactorsSub: "Distributeurs et grossistes de pièces",
        sellerSubRoleDealers: "Concessionnaire",
        sellerSubRoleDealersSub: "Concessionnaires agréés et importateurs",
        sellerSubRoleOemTraders: "Négociant OEM",
        sellerSubRoleOemTradersSub: "Fabricants qui vendent leurs propres pièces",
        subRoleBack: "Changer le type de compte",

        tradeSubRoleTitle: "Quel type de compte professionnel avez-vous ?",
        tradeSubRoleSub: "Cela détermine comment l'application vous appelle dans l'en-tête.",
        tradeSubRolePrivate: "Particulier",
        tradeSubRoleMechanic: "Mécanicien",
        tradeSubRoleMechanicSub: "Mécanicien indépendant ou garage",
        tradeSubRoleService: "Service",
        tradeSubRoleServiceSub: "Service d'un garage ou d'un atelier",
        tradeSubRoleTaxi: "Taxi",
        tradeSubRoleTaxiSub: "Exploitant de taxi ou flotte agréée",
        tradeSubRoleBusiness: "Entreprise",
        tradeSubRoleBusinessSub: "Entreprise achetant des pièces pour sa flotte",

        gateTitle: "Votre profil est en cours d'activation",
        gateText: "Terminez la vérification de votre entreprise pour recevoir les demandes des acheteurs et commencer à vendre.",
        gateCta: "Terminer la vérification",
        gateReviewTitle: "Documents en cours de revue",
        gateReviewText: "Vos documents sont chez notre équipe de modération. Vous pouvez continuer à utiliser votre espace entre-temps.",
        gateReviewCta: "Voir le statut",

        sellerSetupFor: "Configuration du profil :",
        sellerBrandsLabel: "Marques et modèles de pièces",
        sellerBrandsPlaceholder: "Sélectionnez des marques (ou « Toutes les marques »)",
        sellerBrandsAll: "Toutes les marques",
        sellerBrandsNone: "Aucune marque ne correspond",
        sellerBrandsRequired: "Choisissez au moins une marque, ou Toutes les marques.",
        sellerRemoveBrand: "Retirer la marque",
        sellerPartTypeLabel: "Type de pièces",
        sellerPartTypeUsed: "Occasion",
        sellerPartTypeNew: "Neuves",
        sellerPartTypeRequired: "Choisissez au moins un type de pièce.",
        sellerQualityLabel: "Qualité",
        sellerQualityOem: "Original (OEM)",
        sellerQualityAftermarket: "Alternative",
        sellerQualityRequired: "Choisissez au moins une qualité.",

        sellerBusinessNameLabel: "Nom de l'entreprise",
        sellerBusinessNameRequired: "Saisissez le nom de votre entreprise.",
        sellerCroLabel: "Numéro CRO",
        sellerCroInvalid: "Vérifiez le numéro CRO : de 5 à 12 chiffres.",
        sellerCroChecking: "Vérification...",
        sellerCroOk: "Numéro CRO trouvé",
        sellerCroNotFound: "Aucune entreprise trouvée pour ce numéro",
        sellerCroUnavailable: "La vérification en ligne n'est pas disponible dans cette version. Le numéro doit toujours comporter de 5 à 12 chiffres.",
        sellerDocsLabel: "Documents de vérification",
        sellerDocsFor: "pour « {sub} »",
        sellerDocsHint: "🔒 Vous pouvez masquer les montants. Nous avons seulement besoin de l'en-tête avec le nom de l'entreprise, la date et l'Eircode.",
        sellerDocsRequired: "Joignez au moins un document.",
        sellerRemoveDoc: "Retirer le document",
        sellerVerifyPendingTitle: "Documents en cours de revue",
        sellerVerifyPendingText: "Nous allons examiner vos documents et ouvrir votre profil aux demandes entrantes. Vous pouvez continuer à utiliser votre espace entre-temps.",

        sellerRepIntro: "Si l'un de nos responsables est déjà passé chez vous, ou si vous rencontrez un représentant Allparts.ie, votre profil peut être activé sur place.",
        sellerRepPhoneLabel: "Téléphone de l'entreprise ou Eircode",
        sellerRepInvalid: "Saisissez un numéro de téléphone ou un Eircode.",
        sellerRepRequested: "Demande d'activation envoyée. Notre responsable vous contactera pour convenir d'un créneau.",
        sellerRepConsoleTitle: "Représentant Allparts.ie",
        sellerRepConsoleHint: "Saisissez le téléphone ou l'Eircode du client pour l'activer sur place.",
        sellerRepSearching: "Recherche...",
        sellerRepFound: "Client trouvé : {name}",
        sellerRepNotFound: "Aucun client trouvé pour ce téléphone ou cet Eircode",
        sellerRepUnavailable: "La recherche de clients n'est pas disponible dans cette version.",

        tierLabel: "Formule tarifaire",
        tierBase: "Base",
        tierPro: "Pro",
        tierProPlus: "Pro+",
        tierPrivatePlus: "Private+",
        sellerVerifiedTitle: "Profil vérifié !",
        sellerVerifiedText: "Choisissez une formule tarifaire pour activer votre essai gratuit de {trial}.",
        sellerVerifiedCta: "Choisir une formule et démarrer l'essai",
        sellerTrialLength: "{n} jours",
        sellerTrialStarted: "Votre essai gratuit a commencé : {trial}.",

        sellerDocUtilityBill: "Facture d'électricité ou d'eau",
        sellerDocBankStatement: "Relevé bancaire",
        sellerDocWastePermit: "Autorisation d'exploitation de déchets",
        sellerDocAtfLicense: "Licence ATF",
        sellerDocVatCert: "Certificat de TVA",
        sellerDocCroCert: "Certificat CRO",
        sellerDocSimiLicense: "Licence SIMI",
        sellerDocDistributorAgreement: "Contrat de distribution"
    },


    ro: {
        sellerSubRoleTitle: "Ce tip de vânzător sunteți?",
        sellerSubRoleSub: "Aceasta stabilește documentele pe care le cerem.",
        sellerSubRoleDismantlers: "Dezmembrare auto",
        sellerSubRoleDismantlersSub: "Dezmembrări auto și platforme de recuperare",
        sellerSubRoleMotorFactors: "Magazin de piese",
        sellerSubRoleMotorFactorsSub: "Distribuitori și angrobiști de piese auto",
        sellerSubRoleDealers: "Dealer",
        sellerSubRoleDealersSub: "Dealeri autorizați și importatori",
        sellerSubRoleOemTraders: "Trader OEM",
        sellerSubRoleOemTradersSub: "Producători care își vând propriile piese",
        subRoleBack: "Schimbați tipul contului",

        tradeSubRoleTitle: "Ce tip de cont profesional aveți?",
        tradeSubRoleSub: "Aceasta stabilește cum vă numește aplicația în antet.",
        tradeSubRolePrivate: "Privat",
        tradeSubRoleMechanic: "Mecanic",
        tradeSubRoleMechanicSub: "Mecanic independent sau service",
        tradeSubRoleService: "Service",
        tradeSubRoleServiceSub: "Departamentul de service al unui garaj sau atelier",
        tradeSubRoleTaxi: "Taxi",
        tradeSubRoleTaxiSub: "Operator de taxi sau flotă licențiată",
        tradeSubRoleBusiness: "Companie",
        tradeSubRoleBusinessSub: "Companie care cumpără piese pentru flota sa",

        gateTitle: "Profilul dumneavoastră este în etapa de activare",
        gateText: "Finalizați verificarea companiei pentru a primi cererile cumpărătorilor și pentru a începe să vindeți.",
        gateCta: "Finalizați verificarea",
        gateReviewTitle: "Documentele sunt în verificare",
        gateReviewText: "Documentele dumneavoastră sunt la echipa noastră de moderare. Până atunci puteți continua să folosiți cabinetul.",
        gateReviewCta: "Vezi starea",

        sellerSetupFor: "Configurarea profilului:",
        sellerBrandsLabel: "Marcaje și modele de piese",
        sellerBrandsPlaceholder: "Selectați marcaje (sau „Toate marcajele”)",
        sellerBrandsAll: "Toate marcajele",
        sellerBrandsNone: "Niciun marcaj nu se potrivește",
        sellerBrandsRequired: "Alegeți cel puțin un marcaj sau Toate marcajele.",
        sellerRemoveBrand: "Eliminați marcajul",
        sellerPartTypeLabel: "Tipul pieselor",
        sellerPartTypeUsed: "Second-hand",
        sellerPartTypeNew: "Noi",
        sellerPartTypeRequired: "Alegeți cel puțin un tip de piesă.",
        sellerQualityLabel: "Calitate",
        sellerQualityOem: "Original (OEM)",
        sellerQualityAftermarket: "Echivalent",
        sellerQualityRequired: "Alegeți cel puțin o calitate.",

        sellerBusinessNameLabel: "Numele companiei",
        sellerBusinessNameRequired: "Introduceți numele companiei.",
        sellerCroLabel: "Număr CRO",
        sellerCroInvalid: "Verificați numărul CRO: de la 5 la 12 cifre.",
        sellerCroChecking: "Se verifică...",
        sellerCroOk: "Număr CRO găsit",
        sellerCroNotFound: "Nu s-a găsit nicio companie cu acest număr",
        sellerCroUnavailable: "Verificarea online nu este disponibilă în această versiune. Numărul trebuie să aibă tot între 5 și 12 cifre.",
        sellerDocsLabel: "Documente de verificare",
        sellerDocsFor: "pentru „{sub}”",
        sellerDocsHint: "🔒 Puteți acoperi sumele. Avem nevoie doar de antet cu numele companiei, dată și Eircode.",
        sellerDocsRequired: "Atașați cel puțin un document.",
        sellerRemoveDoc: "Eliminați documentul",
        sellerVerifyPendingTitle: "Documentele sunt în verificare",
        sellerVerifyPendingText: "Vom verifica documentele și vă vom deschide profilul pentru cererile primite. Până atunci puteți continua să folosiți cabinetul.",

        sellerRepIntro: "Dacă unul dintre managerii noștri a trecut deja pe la dumneavoastră sau întâlniți un reprezentant Allparts.ie, profilul poate fi activat pe loc.",
        sellerRepPhoneLabel: "Telefonul companiei sau Eircode",
        sellerRepInvalid: "Introduceți un număr de telefon sau un Eircode.",
        sellerRepRequested: "Cerere de activare trimisă. Managerul nostru vă va contacta pentru a stabili o oră.",
        sellerRepConsoleTitle: "Reprezentant Allparts.ie",
        sellerRepConsoleHint: "Introduceți telefonul sau Eircode-ul clientului pentru activare pe loc.",
        sellerRepSearching: "Se caută...",
        sellerRepFound: "Client găsit: {name}",
        sellerRepNotFound: "Nu s-a găsit niciun client cu acest telefon sau Eircode",
        sellerRepUnavailable: "Căutarea clienților nu este disponibilă în această versiune.",

        tierLabel: "Plan tarifar",
        tierBase: "De bază",
        tierPro: "Pro",
        tierProPlus: "Pro+",
        tierPrivatePlus: "Private+",
        sellerVerifiedTitle: "Profil verificat!",
        sellerVerifiedText: "Alegeți un plan tarifar pentru a activa perioada de încercare gratuită de {trial}.",
        sellerVerifiedCta: "Alegeți planul și începeți perioada de încercare",
        sellerTrialLength: "{n} zile",
        sellerTrialStarted: "Perioada de încercare gratuită a început: {trial}.",

        sellerDocUtilityBill: "Factură de utilități",
        sellerDocBankStatement: "Extras bancar",
        sellerDocWastePermit: "Autorizare pentru gestionarea deșeurilor",
        sellerDocAtfLicense: "Licență ATF",
        sellerDocVatCert: "Certificat de TVA",
        sellerDocCroCert: "Certificat CRO",
        sellerDocSimiLicense: "Licență SIMI",
        sellerDocDistributorAgreement: "Contract de distribuție"
    }
};


Object.keys(sellerFunnelTranslations).forEach(language => {
    translations[language] = { ...translations[language], ...sellerFunnelTranslations[language] };
});

const warrantyDurationTranslations = {
    en: { answerWarrantyDurationLabel: "Return warranty (days)" },
    ru: { answerWarrantyDurationLabel: "Гарантия возврата (дней)" },
    de: { answerWarrantyDurationLabel: "Rückgabegarantie (Tage)" },
    fr: { answerWarrantyDurationLabel: "Garantie de retour (jours)" },
    es: { answerWarrantyDurationLabel: "Garantía de devolución (días)" },
    it: { answerWarrantyDurationLabel: "Garanzia di reso (giorni)" },
    pt: { answerWarrantyDurationLabel: "Garantia de devolução (dias)" },
    pl: { answerWarrantyDurationLabel: "Gwarancja zwrotu (dni)" },
    ro: { answerWarrantyDurationLabel: "Garanție de returnare (zile)" },
    lt: { answerWarrantyDurationLabel: "Grąžinimo garantija (dienos)" },
    zh: { answerWarrantyDurationLabel: "退货保障（天）" }
};
Object.keys(warrantyDurationTranslations).forEach(language => {
    translations[language] = { ...translations[language], ...warrantyDurationTranslations[language] };
});

const positionActionTranslations = {
    en: { answerPositionReset: "Clear all" },
    ru: { answerPositionReset: "Очистить всё" },
    de: { answerPositionReset: "Alles löschen" },
    fr: { answerPositionReset: "Tout effacer" },
    es: { answerPositionReset: "Borrar todo" },
    it: { answerPositionReset: "Cancella tutto" },
    pt: { answerPositionReset: "Limpar tudo" },
    pl: { answerPositionReset: "Wyczyść wszystko" },
    ro: { answerPositionReset: "Șterge tot" },
    lt: { answerPositionReset: "Išvalyti viską" },
    zh: { answerPositionReset: "清除全部" }
};
Object.keys(positionActionTranslations).forEach(language => {
    translations[language] = { ...translations[language], ...positionActionTranslations[language] };
});

const requestPreferenceTranslations = {
    en: {
        requestOptions: "Order preferences", optionsSheetTitle: "Order preferences",
        optionWarranty: "Warranty", optionDelivery: "Delivery", optionNameWarranty: "Warranty", optionNameDelivery: "Delivery",
        optionInfoWarranty: "You prefer offers with a return warranty. The seller will state the warranty terms in their offer.",
        optionInfoDelivery: "You prefer courier delivery. The seller will list available delivery methods; collection may also be offered.",
        optionInfoVat: "The priority tag tells suppliers you need an official VAT invoice. Available on PRO and PRO+ plans.",
        optionInfoUrgent: "Moves your request higher in supplier feeds and marks it urgent. Response times depend on suppliers; 24 hours is a target, not a guarantee. Available on PRO and PRO+ plans.",
        optionsPlatformNote: "🔒 Allparts.ie is an information platform connecting buyers and sellers. Sellers are responsible for the warranty, VAT and delivery terms they advertise, under Irish and EU law."
    },
    ru: {
        requestOptions: "Пожелания к заказу", optionsSheetTitle: "Пожелания к заказу",
        optionWarranty: "Гарантия", optionDelivery: "Доставка", optionNameWarranty: "Гарантия", optionNameDelivery: "Доставка",
        optionInfoWarranty: "Покупателю предпочтительны предложения с гарантией возврата. Продавец укажет условия гарантии в своём предложении.",
        optionInfoDelivery: "Покупателю предпочтительна доставка курьером. Продавец укажет доступные способы доставки; самовывоз также может быть предложен.",
        optionInfoVat: "Приоритетная отметка показывает поставщикам, что покупателю нужен официальный VAT-инвойс. Доступно в тарифах PRO и PRO+.",
        optionInfoUrgent: "Поднимает запрос выше в ленте поставщиков и отмечает его как срочный. Срок ответа зависит от поставщиков; 24 часа — ориентир, не гарантия. Доступно в тарифах PRO и PRO+.",
        optionsPlatformNote: "🔒 Allparts.ie — информационная платформа, которая связывает покупателей и продавцов. Продавцы самостоятельно отвечают за заявленные гарантии, НДС и доставку согласно законам Ирландии и ЕС."
    },
    zh: {
        requestOptions: "订单偏好", optionsSheetTitle: "订单偏好",
        optionWarranty: "保修", optionDelivery: "快递邮寄", optionNameWarranty: "退换货保障", optionNameDelivery: "快递邮寄",
        optionInfoWarranty: "买家更倾向于选择提供退换货保障的报价。卖家会在报价中说明保障条款。",
        optionInfoDelivery: "买家更倾向于快递邮寄。卖家会列出可提供的配送方式；也可能提供自提。",
        optionInfoVat: "优先标记会告知供应商您需要正式 VAT 发票。PRO 和 PRO+ 套餐可用。",
        optionInfoUrgent: "将请求提升到供应商信息流前列并标为紧急。回复时间取决于供应商；24 小时是目标，并非保证。PRO 和 PRO+ 套餐可用。",
        optionsPlatformNote: "🔒 Allparts.ie 是连接买家和卖家的信息平台。卖家须根据爱尔兰及欧盟法律，对其声明的保障、增值税和配送条件负责。"
    },
    it: {
        requestOptions: "Preferenze d'ordine", optionsSheetTitle: "Preferenze d'ordine",
        optionWarranty: "Garanzia", optionDelivery: "Consegna", optionNameWarranty: "Garanzia", optionNameDelivery: "Consegna",
        optionInfoWarranty: "Preferisci offerte con garanzia di reso. Il venditore indicherà le condizioni della garanzia nella propria offerta.",
        optionInfoDelivery: "Preferisci la consegna tramite corriere. Il venditore indicherà i metodi disponibili; può essere proposto anche il ritiro.",
        optionInfoVat: "Il contrassegno di priorità segnala ai fornitori che ti serve una fattura IVA ufficiale. Disponibile con i piani PRO e PRO+.",
        optionInfoUrgent: "Porta la richiesta più in alto nei feed dei fornitori e la contrassegna come urgente. I tempi di risposta dipendono dai fornitori; 24 ore è un obiettivo, non una garanzia. Disponibile con i piani PRO e PRO+.",
        optionsPlatformNote: "🔒 Allparts.ie è una piattaforma informativa che mette in contatto acquirenti e venditori. I venditori sono responsabili delle condizioni di garanzia, IVA e consegna che dichiarano, secondo le leggi irlandesi e dell'UE."
    },
    de: {
        requestOptions: "Bestellwünsche", optionsSheetTitle: "Bestellwünsche",
        optionWarranty: "Garantie", optionDelivery: "Lieferung", optionNameWarranty: "Garantie", optionNameDelivery: "Lieferung",
        optionInfoWarranty: "Sie bevorzugen Angebote mit Rückgabegarantie. Der Verkäufer nennt die Garantiebedingungen in seinem Angebot.",
        optionInfoDelivery: "Sie bevorzugen die Lieferung per Kurier. Der Verkäufer nennt die verfügbaren Lieferarten; Abholung kann ebenfalls angeboten werden.",
        optionInfoVat: "Die Prioritätsmarkierung zeigt Lieferanten, dass Sie eine offizielle MwSt.-Rechnung benötigen. Verfügbar in den Tarifen PRO und PRO+.",
        optionInfoUrgent: "Setzt die Anfrage weiter oben in die Lieferanten-Feeds und markiert sie als dringend. Antwortzeiten hängen von den Lieferanten ab; 24 Stunden sind ein Ziel, keine Garantie. Verfügbar in den Tarifen PRO und PRO+.",
        optionsPlatformNote: "🔒 Allparts.ie ist eine Informationsplattform, die Käufer und Verkäufer verbindet. Verkäufer sind nach irischem und EU-Recht selbst für die von ihnen angegebenen Garantie-, MwSt.- und Lieferbedingungen verantwortlich."
    },
    lt: {
        requestOptions: "Užsakymo pageidavimai", optionsSheetTitle: "Užsakymo pageidavimai",
        optionWarranty: "Garantija", optionDelivery: "Pristatymas", optionNameWarranty: "Garantija", optionNameDelivery: "Pristatymas",
        optionInfoWarranty: "Jums labiau tinka pasiūlymai su grąžinimo garantija. Pardavėjas pasiūlyme nurodys garantijos sąlygas.",
        optionInfoDelivery: "Jums labiau tinka pristatymas kurjeriu. Pardavėjas nurodys galimus pristatymo būdus; gali būti pasiūlytas ir atsiėmimas.",
        optionInfoVat: "Prioriteto žyma informuoja tiekėjus, kad jums reikia oficialios PVM sąskaitos faktūros. Galima PRO ir PRO+ planuose.",
        optionInfoUrgent: "Perkelia užklausą aukščiau tiekėjų srautuose ir pažymi ją kaip skubią. Atsakymo laikas priklauso nuo tiekėjų; 24 valandos yra tikslas, ne garantija. Galima PRO ir PRO+ planuose.",
        optionsPlatformNote: "🔒 Allparts.ie yra informacinė platforma, jungianti pirkėjus ir pardavėjus. Pardavėjai pagal Airijos ir ES įstatymus atsako už savo nurodytas garantijos, PVM ir pristatymo sąlygas."
    },
    pt: {
        requestOptions: "Preferências do pedido", optionsSheetTitle: "Preferências do pedido",
        optionWarranty: "Garantia", optionDelivery: "Entrega", optionNameWarranty: "Garantia", optionNameDelivery: "Entrega",
        optionInfoWarranty: "Prefere propostas com garantia de devolução. O vendedor indicará as condições da garantia na proposta.",
        optionInfoDelivery: "Prefere entrega por transportadora. O vendedor indicará os métodos disponíveis; a recolha também pode ser proposta.",
        optionInfoVat: "A marca de prioridade informa os fornecedores de que precisa de uma fatura oficial com IVA. Disponível nos planos PRO e PRO+.",
        optionInfoUrgent: "Coloca o pedido mais acima nos feeds dos fornecedores e assinala-o como urgente. O tempo de resposta depende dos fornecedores; 24 horas é uma meta, não uma garantia. Disponível nos planos PRO e PRO+.",
        optionsPlatformNote: "🔒 Allparts.ie é uma plataforma de informação que liga compradores e vendedores. Os vendedores são responsáveis pelas condições de garantia, IVA e entrega que anunciam, de acordo com a legislação irlandesa e da UE."
    },
    es: {
        requestOptions: "Preferencias del pedido", optionsSheetTitle: "Preferencias del pedido",
        optionWarranty: "Garantía", optionDelivery: "Envío", optionNameWarranty: "Garantía", optionNameDelivery: "Envío",
        optionInfoWarranty: "Prefieres ofertas con garantía de devolución. El vendedor indicará las condiciones de la garantía en su oferta.",
        optionInfoDelivery: "Prefieres la entrega por mensajería. El vendedor indicará los métodos disponibles; también puede ofrecerse la recogida.",
        optionInfoVat: "La marca de prioridad indica a los proveedores que necesitas una factura oficial con IVA. Disponible en los planes PRO y PRO+.",
        optionInfoUrgent: "Sube la solicitud en los feeds de proveedores y la marca como urgente. El plazo de respuesta depende de los proveedores; 24 horas es un objetivo, no una garantía. Disponible en los planes PRO y PRO+.",
        optionsPlatformNote: "🔒 Allparts.ie es una plataforma informativa que conecta a compradores y vendedores. Los vendedores son responsables de las condiciones de garantía, IVA y entrega que anuncian, según la legislación irlandesa y de la UE."
    },
    pl: {
        requestOptions: "Preferencje zamówienia", optionsSheetTitle: "Preferencje zamówienia",
        optionWarranty: "Gwarancja", optionDelivery: "Dostawa", optionNameWarranty: "Gwarancja", optionNameDelivery: "Dostawa",
        optionInfoWarranty: "Preferujesz oferty z gwarancją zwrotu. Sprzedawca poda warunki gwarancji w swojej ofercie.",
        optionInfoDelivery: "Preferujesz dostawę kurierem. Sprzedawca poda dostępne sposoby dostawy; może też zaproponować odbiór osobisty.",
        optionInfoVat: "Oznaczenie priorytetu informuje dostawców, że potrzebujesz oficjalnej faktury VAT. Dostępne w planach PRO i PRO+.",
        optionInfoUrgent: "Przesuwa zapytanie wyżej w kanałach dostawców i oznacza je jako pilne. Czas odpowiedzi zależy od dostawców; 24 godziny to cel, nie gwarancja. Dostępne w planach PRO i PRO+.",
        optionsPlatformNote: "🔒 Allparts.ie to platforma informacyjna łącząca kupujących i sprzedawców. Zgodnie z prawem Irlandii i UE sprzedawcy odpowiadają za deklarowane warunki gwarancji, VAT i dostawy."
    },
    fr: {
        requestOptions: "Préférences de commande", optionsSheetTitle: "Préférences de commande",
        optionWarranty: "Garantie", optionDelivery: "Livraison", optionNameWarranty: "Garantie", optionNameDelivery: "Livraison",
        optionInfoWarranty: "Vous préférez les offres avec garantie de retour. Le vendeur indiquera les conditions dans son offre.",
        optionInfoDelivery: "Vous préférez la livraison par coursier. Le vendeur indiquera les modes disponibles ; le retrait peut aussi être proposé.",
        optionInfoVat: "La priorité indique aux fournisseurs que vous avez besoin d'une facture officielle avec TVA. Disponible avec les offres PRO et PRO+.",
        optionInfoUrgent: "Place la demande plus haut dans les fils des fournisseurs et la signale comme urgente. Le délai de réponse dépend des fournisseurs ; 24 heures est un objectif, pas une garantie. Disponible avec les offres PRO et PRO+.",
        optionsPlatformNote: "🔒 Allparts.ie est une plateforme d'information qui met en relation acheteurs et vendeurs. Les vendeurs sont responsables des conditions de garantie, de TVA et de livraison qu'ils annoncent, conformément aux lois irlandaises et européennes."
    },
    ro: {
        requestOptions: "Preferințe comandă", optionsSheetTitle: "Preferințe comandă",
        optionWarranty: "Garanție", optionDelivery: "Livrare", optionNameWarranty: "Garanție", optionNameDelivery: "Livrare",
        optionInfoWarranty: "Preferi ofertele cu garanție de retur. Vânzătorul va preciza condițiile garanției în ofertă.",
        optionInfoDelivery: "Preferi livrarea prin curier. Vânzătorul va preciza metodele disponibile; poate fi oferită și ridicarea personală.",
        optionInfoVat: "Marcajul de prioritate le arată furnizorilor că ai nevoie de o factură oficială cu TVA. Disponibil în planurile PRO și PRO+.",
        optionInfoUrgent: "Mută cererea mai sus în fluxurile furnizorilor și o marchează ca urgentă. Timpul de răspuns depinde de furnizori; 24 de ore este un obiectiv, nu o garanție. Disponibil în planurile PRO și PRO+.",
        optionsPlatformNote: "🔒 Allparts.ie este o platformă informativă care conectează cumpărătorii și vânzătorii. Vânzătorii răspund pentru condițiile de garanție, TVA și livrare pe care le declară, conform legislației irlandeze și UE."
    }
};
Object.keys(requestPreferenceTranslations).forEach(language => {
    translations[language] = { ...translations[language], ...requestPreferenceTranslations[language] };
});

const answerComparisonTranslations = {
    en: { answerConfirmBuyerHeader: "Buyer", answerConfirmReplyHeader: "Your reply", answerConfirmPartCount: ["part", "parts"], answerConfirmItemCount: ["item", "items"], answerConfirmYes: "Yes", answerConfirmNo: "No" },
    ru: { answerConfirmBuyerHeader: "Покупатель", answerConfirmReplyHeader: "Ваш ответ", answerConfirmPartCount: ["запчасть", "запчасти", "запчастей"], answerConfirmItemCount: ["позиция", "позиции", "позиций"], answerConfirmYes: "Да", answerConfirmNo: "Нет" },
    zh: { answerConfirmBuyerHeader: "买家", answerConfirmReplyHeader: "您的回复", answerConfirmPartCount: ["个零件"], answerConfirmItemCount: ["项"], answerConfirmYes: "是", answerConfirmNo: "否" },
    it: { answerConfirmBuyerHeader: "Acquirente", answerConfirmReplyHeader: "La tua risposta", answerConfirmPartCount: ["ricambio", "ricambi"], answerConfirmItemCount: ["voce", "voci"], answerConfirmYes: "Sì", answerConfirmNo: "No" },
    de: { answerConfirmBuyerHeader: "Käufer", answerConfirmReplyHeader: "Ihre Antwort", answerConfirmPartCount: ["Teil", "Teile"], answerConfirmItemCount: ["Position", "Positionen"], answerConfirmYes: "Ja", answerConfirmNo: "Nein" },
    lt: { answerConfirmBuyerHeader: "Pirkėjas", answerConfirmReplyHeader: "Jūsų atsakymas", answerConfirmPartCount: ["dalis", "dalys", "dalių"], answerConfirmItemCount: ["pozicija", "pozicijos", "pozicijų"], answerConfirmYes: "Taip", answerConfirmNo: "Ne" },
    pt: { answerConfirmBuyerHeader: "Comprador", answerConfirmReplyHeader: "Sua resposta", answerConfirmPartCount: ["peça", "peças"], answerConfirmItemCount: ["item", "itens"], answerConfirmYes: "Sim", answerConfirmNo: "Não" },
    es: { answerConfirmBuyerHeader: "Comprador", answerConfirmReplyHeader: "Tu respuesta", answerConfirmPartCount: ["pieza", "piezas"], answerConfirmItemCount: ["artículo", "artículos"], answerConfirmYes: "Sí", answerConfirmNo: "No" },
    pl: { answerConfirmBuyerHeader: "Kupujący", answerConfirmReplyHeader: "Twoja odpowiedź", answerConfirmPartCount: ["część", "części", "części"], answerConfirmItemCount: ["pozycja", "pozycje", "pozycji"], answerConfirmYes: "Tak", answerConfirmNo: "Nie" },
    fr: { answerConfirmBuyerHeader: "Acheteur", answerConfirmReplyHeader: "Votre réponse", answerConfirmPartCount: ["pièce", "pièces"], answerConfirmItemCount: ["position", "positions"], answerConfirmYes: "Oui", answerConfirmNo: "Non" },
    ro: { answerConfirmBuyerHeader: "Cumpărător", answerConfirmReplyHeader: "Răspunsul tău", answerConfirmPartCount: ["piesă", "piese"], answerConfirmItemCount: ["poziție", "poziții"], answerConfirmYes: "Da", answerConfirmNo: "Nu" }
};
Object.keys(answerComparisonTranslations).forEach(language => {
    translations[language] = { ...translations[language], ...answerComparisonTranslations[language] };
});

// Compact seller confirmation wording. The content is grouped by what is not
// offered first, followed by the seller's offer; the count is rendered at the
// same trailing position in both section headings.
const answerConfirmOrderTranslations = {
    en: { answerConfirmTitle: "Order confirmation", answerConfirmMissing: "Not offered", answerConfirmOffer: "Your Offer" },
    ru: { answerConfirmTitle: "Подтверждение ответа", answerConfirmMissing: "Не предлагается", answerConfirmOffer: "Ваше предложение" },
    zh: { answerConfirmTitle: "确认回复", answerConfirmMissing: "未提供", answerConfirmOffer: "您的报价" },
    it: { answerConfirmTitle: "Conferma della risposta", answerConfirmMissing: "Non offerto", answerConfirmOffer: "La tua offerta" },
    de: { answerConfirmTitle: "Antwortbestätigung", answerConfirmMissing: "Nicht angeboten", answerConfirmOffer: "Ihr Angebot" },
    lt: { answerConfirmTitle: "Atsakymo patvirtinimas", answerConfirmMissing: "Nesiūloma", answerConfirmOffer: "Jūsų pasiūlymas" },
    pt: { answerConfirmTitle: "Confirmação da resposta", answerConfirmMissing: "Não oferecido", answerConfirmOffer: "Sua oferta" },
    es: { answerConfirmTitle: "Confirmación de la respuesta", answerConfirmMissing: "No ofrecido", answerConfirmOffer: "Tu oferta" },
    pl: { answerConfirmTitle: "Potwierdzenie odpowiedzi", answerConfirmMissing: "Nieoferowane", answerConfirmOffer: "Twoja oferta" },
    fr: { answerConfirmTitle: "Confirmation de la réponse", answerConfirmMissing: "Non proposé", answerConfirmOffer: "Votre offre" },
    ro: { answerConfirmTitle: "Confirmarea răspunsului", answerConfirmMissing: "Neofertat", answerConfirmOffer: "Oferta ta" }
};
Object.keys(answerConfirmOrderTranslations).forEach(language => {
    translations[language] = { ...translations[language], ...answerConfirmOrderTranslations[language] };
});

const answerConfirmMoreTranslations = {
    en: { answerConfirmShowMore: "Show {a} more", answerConfirmShowLess: "Show less" },
    ru: { answerConfirmShowMore: "Показать ещё {a}", answerConfirmShowLess: "Свернуть" },
    zh: { answerConfirmShowMore: "展开其余 {a} 项", answerConfirmShowLess: "收起" },
    it: { answerConfirmShowMore: "Mostra altri {a}", answerConfirmShowLess: "Mostra meno" },
    de: { answerConfirmShowMore: "Weitere {a} anzeigen", answerConfirmShowLess: "Weniger anzeigen" },
    lt: { answerConfirmShowMore: "Rodyti dar {a}", answerConfirmShowLess: "Rodyti mažiau" },
    pt: { answerConfirmShowMore: "Mostrar mais {a}", answerConfirmShowLess: "Mostrar menos" },
    es: { answerConfirmShowMore: "Ver {a} más", answerConfirmShowLess: "Ver menos" },
    pl: { answerConfirmShowMore: "Pokaż jeszcze {a}", answerConfirmShowLess: "Pokaż mniej" },
    fr: { answerConfirmShowMore: "Afficher encore {a}", answerConfirmShowLess: "Afficher moins" },
    ro: { answerConfirmShowMore: "Afișează încă {a}", answerConfirmShowLess: "Afișează mai puțin" }
};
Object.keys(answerConfirmMoreTranslations).forEach(language => {
    translations[language] = { ...translations[language], ...answerConfirmMoreTranslations[language] };
});



