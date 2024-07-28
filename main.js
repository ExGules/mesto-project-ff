(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/wff-cohort-18",headers:{authorization:"b6eedff2-2ceb-4202-a3f5-88562f5602a9","Content-Type":"application/json"}};function t(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}var n=document.querySelector("#card-template").content;function r(r,o,c,a){var i=n.querySelector(".card").cloneNode(!0),u=i.querySelector(".card__image"),l=i.querySelector(".card__title"),s=i.querySelector(".card__delete-button"),d=i.querySelector(".card__like-button"),f=i.querySelector(".like_counter");return f.textContent=r.likes.length,a=r._id,u.src=r.link,l.textContent=r.name,u.alt=r.name,c!==r.owner._id&&s.remove(),r.likes.some((function(e){return e._id===c}))&&d.classList.add("card__like-button_is-active"),d.addEventListener("click",(function(){!function(n,r,o){r.classList.contains("card__like-button_is-active")?function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"DELETE",headers:{authorization:e.headers.authorization}}).then((function(e){return t(e)}))}(n).then((function(e){r.classList.remove("card__like-button_is-active"),o.textContent=e.likes.length})).catch((function(e){return console.log("Ошибка при снятии лайка")})):function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"PUT",headers:{authorization:e.headers.authorization}}).then((function(e){return t(e)}))}(n).then((function(e){r.classList.add("card__like-button_is-active"),o.textContent=e.likes.length})).catch((function(e){return console.log("Ошибка при постановке лайка")}))}(a,d,f)})),s.addEventListener("click",(function(n){!function(n,r){(function(n){return fetch("".concat(e.baseUrl,"/cards/").concat(n),{method:"DELETE",headers:{authorization:e.headers.authorization}}).then((function(e){return t(e)}))})(n).then((function(e){r.closest(".places__item").remove(),console.log("Удалена карточка с ID: ".concat(n))})).catch((function(e){return console.log("Ошибка удаления карточки")}))}(a,s)})),u.addEventListener("click",o),i}function o(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",a),e.addEventListener("click",i)}function c(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",a),e.removeEventListener("click",i)}function a(e){"Escape"===e.key&&c(document.querySelector(".popup_is-opened"))}function i(e){e.target===e.currentTarget&&c(e.currentTarget)}function u(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent="",t.setCustomValidity("")}function l(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):(t.disabled=!0,t.classList.add(n.inactiveButtonClass))}function s(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(o){u(e,o,t),l(n,r,t)}))}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}document.querySelectorAll(".popup").forEach((function(e){e.classList.add("popup_is-animated")}));var f=document.querySelector(".places__list"),p=document.querySelector(".profile__image"),m=document.querySelector(".profile__edit-button"),h=document.querySelector(".profile__add-button"),_=document.querySelector(".popup_type_edit"),v=document.querySelector(".popup_type_new-card"),y=document.querySelector(".popup_type_image"),S=document.querySelector(".popup_type_change-avatar"),b=document.querySelectorAll(".popup__close"),g=document.forms.change_avatar,E=g.elements.link,q=document.forms.edit_profile,k=q.elements.name,L=q.elements.description,C=document.querySelector(".profile__title"),A=document.querySelector(".profile__description"),x=document.forms.new_place,T=x.elements.place_name,w=x.elements.link,z=document.querySelector(".popup__image"),U=document.querySelector(".popup__caption");function j(e){z.src=e.target.src,z.alt=e.target.alt,U.textContent=e.target.alt,e.target.classList.contains("card__image")&&o(y)}b.forEach((function(e){e.addEventListener("click",(function(){c(e.closest(".popup"))}))})),p.addEventListener("click",(function(){o(S),g.reset(),s(g,I)})),g.addEventListener("submit",(function(n){var r;n.preventDefault(),P(!0,S),(r=E.value,fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:"".concat(r)})}).then((function(e){return t(e)}))).then((function(e){p.style.backgroundImage="url(".concat(e.avatar,")"),c(S)})).catch((function(e){return console.log("Ошибка при обновлении аватара: ",e)})).finally((function(){P(!1,S)}))})),m.addEventListener("click",(function(){o(_),s(B,I),k.value=C.textContent,L.value=A.textContent})),q.addEventListener("submit",(function(n){n.preventDefault(),P(!0,_),function(n,r){return fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:"".concat(n),about:"".concat(r)})}).then((function(e){return t(e)}))}(k.value,L.value).then((function(e){C.textContent=e.name,A.textContent=e.about,c(_)})).catch((function(e){return console.log("Ошибка обновления данных пользователя: ",e)})).finally((function(){P(!1,_)}))})),h.addEventListener("click",(function(){o(v),x.reset(),s(D,I)})),x.addEventListener("submit",(function(n){var o,a;n.preventDefault(),P(!0,v),(o=T.value,a=w.value,fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:"".concat(o),link:"".concat(a)})}).then((function(e){return t(e)}))).then((function(e){var t=r(e,j,e.owner._id,e._id);f.prepend(t),c(v)})).catch((function(e){return console.log("Ошибка при добавлении карточки: ",e)})).finally((function(){P(!1,v)}))}));var O,B=document.querySelector(".edit_profile_form"),D=document.querySelector(".new_place_form"),I={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup-input-error_active"};function P(e,t){t.querySelector(".popup__button").textContent=e?"Сохранение...":"Сохранить"}O=I,Array.from(document.querySelectorAll(O.formSelector)).forEach((function(e){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);l(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?u(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)}(e,o,t),l(n,r,t)}))}))}(e,O)})),Promise.all([fetch("".concat(e.baseUrl,"/users/me"),{method:"GET",headers:{authorization:e.headers.authorization}}).then((function(e){return t(e)})),fetch("".concat(e.baseUrl,"/cards"),{method:"GET",headers:{authorization:e.headers.authorization}}).then((function(e){return t(e)}))]).then((function(e){var t,n,o=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,i=[],u=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=c.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=o[0],a=o[1];p.style.backgroundImage="url(".concat(c.avatar,")"),C.textContent=c.name,A.textContent=c.about;var i=c._id;a.forEach((function(e){var t=r(e,j,i,e._id);f.append(t)}))})).catch((function(e){console.log("Запрос не выполнен: ",e)}))})();
//# sourceMappingURL=main.js.map