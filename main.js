!function(){"use strict";class t{constructor(t,e){this.settingsObj=t,this.form=e,this._submitButton=this.form.querySelector(t.submitButtonSelector),this._inputList=Array.from(this.form.querySelectorAll(t.inputSelector))}enableValidation(){this._inputList.forEach((t=>{this._addInputEvents(t)}))}_addInputEvents(t){t.addEventListener("input",(()=>{this._checkValidity(t),this.toggleSubmitButton()}))}_checkValidity(t){const e=t.nextSibling.nextSibling;t.validity.valid?this._hideError(e,t):this._showError(e,t)}resetValidation(){this.toggleSubmitButton(),this._inputList.forEach((t=>{this._hideError(t.nextSibling.nextSibling,t)}))}_showError(t,e){const s=e.validationMessage;e.classList.add(this.settingsObj.inputErrorClass),t.textContent=s}_hideError(t,e){e.classList.remove(this.settingsObj.inputErrorClass),t.textContent=""}toggleSubmitButton(){this._hasInvalidInput(this._inputList)?(this._submitButton.classList.add(this.settingsObj.inactiveButtonClass),this._submitButton.disabled=!0):(this._submitButton.classList.remove(this.settingsObj.inactiveButtonClass),this._submitButton.disabled=!1)}_hasInvalidInput(){return this._inputList.some((t=>!t.validity.valid))}}class e{constructor(t,e,s){this.image=t.link,this.text=t.name,this.cardTemplate=document.querySelector(e).content,this.handleImageClick=s,this._cardElement=this.cardTemplate.querySelector(".locations__card").cloneNode(!0),this._cardImage=this._cardElement.querySelector(".card__image"),this._cardTitle=this._cardElement.querySelector(".card__title"),this._deleteButton=this._cardElement.querySelector(".card__delete-icon"),this._likeButton=this._cardElement.querySelector(".card__like-icon")}_setEventListeners(){this._likeButton.addEventListener("click",this._likeCard),this._deleteButton.addEventListener("click",this._removeCard),this._cardImage.addEventListener("click",this.handleImageClick)}_likeCard(t){t.target.classList.toggle("card__like-icon_clicked")}_removeCard(t){t.target.closest(".card").remove()}createCard(){return this._setEventListeners(),this._cardImage.src=this.image,this._cardImage.alt=this.text,this._cardTitle.textContent=this.text,this._cardElement}}class s{constructor(t){this.modal=document.querySelector(t)}openModal(){this.modal.classList.add("modal_opened"),this.modal.addEventListener("click",this._handleCloseEvent),document.addEventListener("keydown",this._handleCloseEvent)}closeModal(){this.modal.classList.remove("modal_opened"),this.modal.removeEventListener("click",this._handleCloseEvent),document.removeEventListener("keydown",this._handleCloseEvent)}_handleCloseEvent=t=>{(t.target.classList.contains("modal")||"Escape"==t.key)&&this.closeModal()};setEventListeners(){this.modal.querySelector(".modal__close").addEventListener("click",(()=>this.closeModal()))}}class n extends s{constructor(t,e){super(t),this.submit=e,this.form=this.modal.querySelector(".form"),this.inputs=this.form.querySelectorAll(".form__input")}_getInputValues(){const t={};return this.inputs.forEach((e=>{e.name,t[e.name]=e.value})),t}setEventListeners(){super.setEventListeners(),this.form.addEventListener("submit",(t=>{t.preventDefault(),this.submit(t,this._getInputValues())}))}}const i={formSelector:".form",fieldSelector:".form__field",inputSelector:".form__input",errorSelector:".form__error",submitButtonSelector:".form__submit-button",inactiveButtonClass:"form__submit-button_inactive",inputErrorClass:"form__input_invalid"},o=document.querySelector(".profile__edit-button"),r=document.querySelector(".profile__add-button"),a=document.forms["form-edit-profile"],l=document.forms["form-add-card"],c=document.querySelector(".location__image"),d=document.querySelector(".location__title"),m=new n("#add-card-modal",(function(t,e){let{title:s,link:n}=e;const i={name:s,link:n};p.addItem(i,"prepend"),t.target.reset(),v.toggleSubmitButton(),m.closeModal()})),u=new n("#edit-profile-modal",(function(t,e){let{name:s,description:n}=e;_.setUserInfo({name:s,description:n}),u.closeModal()})),h=new class extends s{openModal(t,e,s){let{name:n,link:i}=t;e.src=i,e.alt=n,s.textContent=n,super.openModal()}}("#location-modal"),_=new class{constructor(t){let{nameSelector:e,descriptionSelector:s}=t;this.name=document.querySelector(e),this.description=document.querySelector(s)}getUserInfo(){return{name:this.name.textContent,description:this.description.textContent}}setUserInfo(t){let{name:e,description:s}=t;this.name.textContent=e,this.description.textContent=s}}({nameSelector:".profile__name",descriptionSelector:".profile__subtitle"}),p=new class{constructor(t,e){let{items:s,renderer:n}=t;this.items=s,this.renderer=n,this.container=document.querySelector(e)}renderItems(){this.items.forEach((t=>{this.addItem(t)}))}addItem(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"append";const s=this.renderer(t);this.container[e](s)}}({items:[{name:"Yosemite Valley",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg"},{name:"Lake Louise",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg"},{name:"Bald Mountains",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg"},{name:"Latemar",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg"},{name:"Vanoise National Park",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg"},{name:"Lago di Braies",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg"}],renderer:function(t){return new e(t,"#locations__card",(()=>{h.openModal(t,c,d)})).createCard()}},".locations"),g=new t(i,a),v=new t(i,l);m.setEventListeners(),u.setEventListeners(),h.setEventListeners(),p.renderItems(),g.enableValidation(),v.enableValidation(),o.addEventListener("click",(function(){u.openModal(),g.resetValidation()})),r.addEventListener("click",(function(){m.openModal()}))}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBTSxxR0FFUixDQUNFRSxLQUFNLHdCQUNORixLQUFNLHFHQUVSLENBQ0VFLEtBQU0saUJBQ05GLEtBQU0sbUdDS2V1RSxTQW1DekIsU0FBb0JoQixHQUlsQixPQUhvQixJQUFJNUQsRUFBSzRELEVBQVUsb0JBQW9CLEtBQ3pEVSxFQUFjeEMsVUFBVThCLEVBQVVMLEVBQVlDLEVBQVcsSUFDeERoQyxZQUVMLEdBdkNFLGNBSUk4RCxFQUFxQixJQUFJOUgsRUFBY3NGLEVBQWVNLEdBQ3REWSxFQUFxQixJQUFJeEcsRUFBY3NGLEVBQWVRLEdBRzVERyxFQUFVckIsb0JBQ1Y2QixFQUFhN0Isb0JBQ2JrQyxFQUFjbEMsb0JBRWR5QixFQUFZaUIsY0FFWlEsRUFBbUJoSCxtQkFDbkIwRixFQUFtQjFGLG1CQTJCbkI0RSxFQUFXeEUsaUJBQWlCLFNBQVMsV0FDbkN1RixFQUFhbkMsWUFDYndELEVBQW1CbkcsaUJBQ3JCLElBR0FnRSxFQUFVekUsaUJBQWlCLFNBQVMsV0FDbEMrRSxFQUFVM0IsV0FDWixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9jYXJkLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1BvcHVwLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL3V0aWxzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvVXNlckluZm8uanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtVmFsaWRhdG9yIHtcclxuICBjb25zdHJ1Y3RvcihzZXR0aW5nc09iaiwgZm9ybUVsZW1lbnQpIHtcclxuICAgIHRoaXMuc2V0dGluZ3NPYmogPSBzZXR0aW5nc09iajtcclxuICAgIHRoaXMuZm9ybSA9IGZvcm1FbGVtZW50O1xyXG4gICAgdGhpcy5fc3VibWl0QnV0dG9uID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIHNldHRpbmdzT2JqLnN1Ym1pdEJ1dHRvblNlbGVjdG9yXHJcbiAgICApO1xyXG4gICAgdGhpcy5faW5wdXRMaXN0ID0gQXJyYXkuZnJvbShcclxuICAgICAgdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoc2V0dGluZ3NPYmouaW5wdXRTZWxlY3RvcilcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBlbmFibGVWYWxpZGF0aW9uKCkge1xyXG4gICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgICAgIHRoaXMuX2FkZElucHV0RXZlbnRzKGlucHV0KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgX2FkZElucHV0RXZlbnRzKGlucHV0KSB7XHJcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLl9jaGVja1ZhbGlkaXR5KGlucHV0KTtcclxuICAgICAgdGhpcy50b2dnbGVTdWJtaXRCdXR0b24oKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgX2NoZWNrVmFsaWRpdHkoaW5wdXQpIHtcclxuICAgIGNvbnN0IGVycm9yRWxlbWVudCA9IGlucHV0Lm5leHRTaWJsaW5nLm5leHRTaWJsaW5nO1xyXG5cclxuICAgIGlmICghaW5wdXQudmFsaWRpdHkudmFsaWQpIHtcclxuICAgICAgdGhpcy5fc2hvd0Vycm9yKGVycm9yRWxlbWVudCwgaW5wdXQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5faGlkZUVycm9yKGVycm9yRWxlbWVudCwgaW5wdXQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVzZXRWYWxpZGF0aW9uKCkge1xyXG4gICAgdGhpcy50b2dnbGVTdWJtaXRCdXR0b24oKTtcclxuXHJcbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgICAgdGhpcy5faGlkZUVycm9yKGlucHV0Lm5leHRTaWJsaW5nLm5leHRTaWJsaW5nLCBpbnB1dCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF9zaG93RXJyb3IoZXJyb3JFbGVtZW50LCBpbnB1dCkge1xyXG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gaW5wdXQudmFsaWRhdGlvbk1lc3NhZ2U7XHJcblxyXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCh0aGlzLnNldHRpbmdzT2JqLmlucHV0RXJyb3JDbGFzcyk7XHJcbiAgICBlcnJvckVsZW1lbnQudGV4dENvbnRlbnQgPSBlcnJvck1lc3NhZ2U7XHJcbiAgfVxyXG5cclxuICBfaGlkZUVycm9yKGVycm9yRWxlbWVudCwgaW5wdXQpIHtcclxuICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5zZXR0aW5nc09iai5pbnB1dEVycm9yQ2xhc3MpO1xyXG4gICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gXCJcIjtcclxuICB9XHJcblxyXG4gIHRvZ2dsZVN1Ym1pdEJ1dHRvbigpIHtcclxuICAgIGlmICh0aGlzLl9oYXNJbnZhbGlkSW5wdXQodGhpcy5faW5wdXRMaXN0KSkge1xyXG4gICAgICB0aGlzLl9zdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLnNldHRpbmdzT2JqLmluYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gICAgICB0aGlzLl9zdWJtaXRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5zZXR0aW5nc09iai5pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcclxuICAgICAgdGhpcy5fc3VibWl0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfaGFzSW52YWxpZElucHV0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lucHV0TGlzdC5zb21lKChpbnB1dEVsZW1lbnQpID0+IHtcclxuICAgICAgcmV0dXJuICFpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQ7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCB7XHJcbiAgY29uc3RydWN0b3IoZGF0YSwgY2FyZFNlbGVjdG9yLCBoYW5kbGVJbWFnZUNsaWNrKSB7XHJcbiAgICB0aGlzLmltYWdlID0gZGF0YS5saW5rO1xyXG4gICAgdGhpcy50ZXh0ID0gZGF0YS5uYW1lO1xyXG4gICAgdGhpcy5jYXJkVGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNhcmRTZWxlY3RvcikuY29udGVudDtcclxuICAgIHRoaXMuaGFuZGxlSW1hZ2VDbGljayA9IGhhbmRsZUltYWdlQ2xpY2s7XHJcbiAgICB0aGlzLl9jYXJkRWxlbWVudCA9IHRoaXMuY2FyZFRlbXBsYXRlXHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmxvY2F0aW9uc19fY2FyZFwiKVxyXG4gICAgICAuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgdGhpcy5fY2FyZEltYWdlID0gdGhpcy5fY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX19pbWFnZVwiKTtcclxuICAgIHRoaXMuX2NhcmRUaXRsZSA9IHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fdGl0bGVcIik7XHJcbiAgICB0aGlzLl9kZWxldGVCdXR0b24gPSB0aGlzLl9jYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2RlbGV0ZS1pY29uXCIpO1xyXG4gICAgdGhpcy5fbGlrZUJ1dHRvbiA9IHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fbGlrZS1pY29uXCIpO1xyXG4gIH1cclxuXHJcbiAgLy9ldmVudCBsaXN0ZW5lcnMgZm9yIGNhcmRzXHJcbiAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgdGhpcy5fbGlrZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5fbGlrZUNhcmQpO1xyXG4gICAgdGhpcy5fZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLl9yZW1vdmVDYXJkKTtcclxuICAgIHRoaXMuX2NhcmRJbWFnZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVJbWFnZUNsaWNrKTtcclxuICB9XHJcblxyXG4gIF9saWtlQ2FyZChlKSB7XHJcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKFwiY2FyZF9fbGlrZS1pY29uX2NsaWNrZWRcIik7XHJcbiAgfVxyXG5cclxuICBfcmVtb3ZlQ2FyZChlKSB7XHJcbiAgICBjb25zdCBjYXJkRWxlbWVudCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIuY2FyZFwiKTtcclxuICAgIGNhcmRFbGVtZW50LnJlbW92ZSgpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlQ2FyZCgpIHtcclxuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4gICAgdGhpcy5fY2FyZEltYWdlLnNyYyA9IHRoaXMuaW1hZ2U7XHJcbiAgICB0aGlzLl9jYXJkSW1hZ2UuYWx0ID0gdGhpcy50ZXh0O1xyXG4gICAgdGhpcy5fY2FyZFRpdGxlLnRleHRDb250ZW50ID0gdGhpcy50ZXh0O1xyXG5cclxuICAgIHJldHVybiB0aGlzLl9jYXJkRWxlbWVudDtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXAge1xyXG4gIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IpIHtcclxuICAgIHRoaXMubW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBvcHVwU2VsZWN0b3IpO1xyXG4gIH1cclxuXHJcbiAgb3Blbk1vZGFsKCkge1xyXG4gICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWxfb3BlbmVkXCIpO1xyXG4gICAgdGhpcy5tb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5faGFuZGxlQ2xvc2VFdmVudCk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVDbG9zZUV2ZW50KTtcclxuICB9XHJcblxyXG4gIGNsb3NlTW9kYWwoKSB7XHJcbiAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJtb2RhbF9vcGVuZWRcIik7XHJcbiAgICB0aGlzLm1vZGFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLl9oYW5kbGVDbG9zZUV2ZW50KTtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUNsb3NlRXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgX2hhbmRsZUNsb3NlRXZlbnQgPSAoZSkgPT4ge1xyXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm1vZGFsXCIpIHx8IGUua2V5ID09IFwiRXNjYXBlXCIpIHtcclxuICAgICAgdGhpcy5jbG9zZU1vZGFsKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICBjb25zdCBidXR0b24gPSB0aGlzLm1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Nsb3NlXCIpO1xyXG5cclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5jbG9zZU1vZGFsKCkpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXAuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEZvcm0gZXh0ZW5kcyBQb3B1cCB7XHJcbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvciwgc3VibWl0RnVuY3Rpb24pIHtcclxuICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xyXG4gICAgdGhpcy5zdWJtaXQgPSBzdWJtaXRGdW5jdGlvbjtcclxuICAgIHRoaXMuZm9ybSA9IHRoaXMubW9kYWwucXVlcnlTZWxlY3RvcihcIi5mb3JtXCIpO1xyXG4gICAgdGhpcy5pbnB1dHMgPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvckFsbChcIi5mb3JtX19pbnB1dFwiKTtcclxuICB9XHJcblxyXG4gIF9nZXRJbnB1dFZhbHVlcygpIHtcclxuICAgIGNvbnN0IGlucHV0dmFsdWVzID0ge307XHJcbiAgICB0aGlzLmlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgICBjb25zdCBwcm9wZXJ0eU5hbWUgPSBpbnB1dC5uYW1lO1xyXG4gICAgICBpbnB1dHZhbHVlc1tpbnB1dC5uYW1lXSA9IGlucHV0LnZhbHVlO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gaW5wdXR2YWx1ZXM7XHJcbiAgfVxyXG5cclxuICBzZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB0aGlzLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHRoaXMuc3VibWl0KGUsIHRoaXMuX2dldElucHV0VmFsdWVzKCkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImNvbnN0IGluaXRpYWxDYXJkcyA9IFtcclxuICB7XHJcbiAgICBuYW1lOiBcIllvc2VtaXRlIFZhbGxleVwiLFxyXG4gICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3NvZnR3YXJlLWVuZ2luZWVyL2Fyb3VuZC1wcm9qZWN0L3lvc2VtaXRlLmpwZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJMYWtlIExvdWlzZVwiLFxyXG4gICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3NvZnR3YXJlLWVuZ2luZWVyL2Fyb3VuZC1wcm9qZWN0L2xha2UtbG91aXNlLmpwZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJCYWxkIE1vdW50YWluc1wiLFxyXG4gICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3NvZnR3YXJlLWVuZ2luZWVyL2Fyb3VuZC1wcm9qZWN0L2JhbGQtbW91bnRhaW5zLmpwZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJMYXRlbWFyXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvYXJvdW5kLXByb2plY3QvbGF0ZW1hci5qcGdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiVmFub2lzZSBOYXRpb25hbCBQYXJrXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvYXJvdW5kLXByb2plY3QvdmFub2lzZS5qcGdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiTGFnbyBkaSBCcmFpZXNcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9hcm91bmQtcHJvamVjdC9sYWdvLmpwZ1wiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCB2YWxpZGF0aW9uT2JqID0ge1xyXG4gIGZvcm1TZWxlY3RvcjogXCIuZm9ybVwiLFxyXG4gIGZpZWxkU2VsZWN0b3I6IFwiLmZvcm1fX2ZpZWxkXCIsXHJcbiAgaW5wdXRTZWxlY3RvcjogXCIuZm9ybV9faW5wdXRcIixcclxuICBlcnJvclNlbGVjdG9yOiBcIi5mb3JtX19lcnJvclwiLFxyXG4gIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiBcIi5mb3JtX19zdWJtaXQtYnV0dG9uXCIsXHJcbiAgaW5hY3RpdmVCdXR0b25DbGFzczogXCJmb3JtX19zdWJtaXQtYnV0dG9uX2luYWN0aXZlXCIsXHJcbiAgaW5wdXRFcnJvckNsYXNzOiBcImZvcm1fX2lucHV0X2ludmFsaWRcIixcclxufTtcclxuXHJcbi8vIGRlY2xhcmUgYnV0dG9uc1xyXG5jb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19lZGl0LWJ1dHRvblwiKTtcclxuY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19hZGQtYnV0dG9uXCIpO1xyXG5cclxuLy9kZWNsYXJlIG1vZGFsIGVsZW1lbnRzXHJcbmNvbnN0IGVkaXRGb3JtID0gZG9jdW1lbnQuZm9ybXNbXCJmb3JtLWVkaXQtcHJvZmlsZVwiXTtcclxuY29uc3QgYWRkQ2FyZEZvcm0gPSBkb2N1bWVudC5mb3Jtc1tcImZvcm0tYWRkLWNhcmRcIl07XHJcbmNvbnN0IG1vZGFsSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY2F0aW9uX19pbWFnZVwiKTtcclxuY29uc3QgbW9kYWxUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9jYXRpb25fX3RpdGxlXCIpO1xyXG5cclxuZXhwb3J0IHtcclxuICBpbml0aWFsQ2FyZHMsXHJcbiAgdmFsaWRhdGlvbk9iaixcclxuICBlZGl0QnV0dG9uLFxyXG4gIGFkZEJ1dHRvbixcclxuICBlZGl0Rm9ybSxcclxuICBhZGRDYXJkRm9ybSxcclxuICBtb2RhbEltYWdlLFxyXG4gIG1vZGFsVGl0bGUsXHJcbn07XHJcbiIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XHJcbmltcG9ydCBGb3JtVmFsaWRhdG9yIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanNcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2FyZC5qc1wiO1xyXG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWN0aW9uLmpzXCI7XHJcbmltcG9ydCBQb3B1cFdpdGhJbWFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qc1wiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlckluZm8uanNcIjtcclxuaW1wb3J0IFBvcHVwV2l0aEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qc1wiO1xyXG5cclxuaW1wb3J0IHtcclxuICBpbml0aWFsQ2FyZHMsXHJcbiAgdmFsaWRhdGlvbk9iaixcclxuICBlZGl0QnV0dG9uLFxyXG4gIGFkZEJ1dHRvbixcclxuICBlZGl0Rm9ybSxcclxuICBhZGRDYXJkRm9ybSxcclxuICBtb2RhbEltYWdlLFxyXG4gIG1vZGFsVGl0bGUsXHJcbn0gZnJvbSBcIi4uL3V0aWxzL2NvbnN0YW50cy5qc1wiO1xyXG5cclxuY29uc3QgY2FyZFBvcHVwID0gbmV3IFBvcHVwV2l0aEZvcm0oXCIjYWRkLWNhcmQtbW9kYWxcIiwgcmVuZGVyTmV3Q2FyZCk7XHJcbmNvbnN0IHByb2ZpbGVQb3B1cCA9IG5ldyBQb3B1cFdpdGhGb3JtKFwiI2VkaXQtcHJvZmlsZS1tb2RhbFwiLCBlZGl0UHJvZmlsZSk7XHJcbmNvbnN0IGxvY2F0aW9uUG9wdXAgPSBuZXcgUG9wdXBXaXRoSW1hZ2UoXCIjbG9jYXRpb24tbW9kYWxcIik7XHJcblxyXG5jb25zdCB1c2VySW5mbyA9IG5ldyBVc2VySW5mbyh7XHJcbiAgbmFtZVNlbGVjdG9yOiBcIi5wcm9maWxlX19uYW1lXCIsXHJcbiAgZGVzY3JpcHRpb25TZWxlY3RvcjogXCIucHJvZmlsZV9fc3VidGl0bGVcIixcclxufSk7XHJcbmNvbnN0IGNhcmRTZWN0aW9uID0gbmV3IFNlY3Rpb24oXHJcbiAgeyBpdGVtczogaW5pdGlhbENhcmRzLCByZW5kZXJlcjogY3JlYXRlQ2FyZCB9LFxyXG4gIFwiLmxvY2F0aW9uc1wiXHJcbik7XHJcblxyXG4vLyB2YWxpZGF0aW9uIGNsYXNzXHJcbmNvbnN0IGVkaXRGb3JtVmFsaWRhdGlvbiA9IG5ldyBGb3JtVmFsaWRhdG9yKHZhbGlkYXRpb25PYmosIGVkaXRGb3JtKTtcclxuY29uc3QgY2FyZEZvcm1WYWxpZGF0aW9uID0gbmV3IEZvcm1WYWxpZGF0b3IodmFsaWRhdGlvbk9iaiwgYWRkQ2FyZEZvcm0pO1xyXG5cclxuLy8gaW5pdGFpbCBzZXR1cFxyXG5jYXJkUG9wdXAuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxucHJvZmlsZVBvcHVwLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcbmxvY2F0aW9uUG9wdXAuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbmNhcmRTZWN0aW9uLnJlbmRlckl0ZW1zKCk7XHJcblxyXG5lZGl0Rm9ybVZhbGlkYXRpb24uZW5hYmxlVmFsaWRhdGlvbigpO1xyXG5jYXJkRm9ybVZhbGlkYXRpb24uZW5hYmxlVmFsaWRhdGlvbigpO1xyXG5cclxuLy8gZWRpdHMgdGhlIHVzZXIgcHJvZmlsZSBiYXNlZCBvZmYgZm9ybSBpbnB1dHNcclxuZnVuY3Rpb24gZWRpdFByb2ZpbGUoZSwgeyBuYW1lLCBkZXNjcmlwdGlvbiB9KSB7XHJcbiAgdXNlckluZm8uc2V0VXNlckluZm8oeyBuYW1lLCBkZXNjcmlwdGlvbiB9KTtcclxuICBwcm9maWxlUG9wdXAuY2xvc2VNb2RhbCgpO1xyXG59XHJcblxyXG4vLyByZW5kZXJzIGNhcmQgY3JlYXRlZCBieSB1c2VyXHJcbmZ1bmN0aW9uIHJlbmRlck5ld0NhcmQoZSwgeyB0aXRsZSwgbGluayB9KSB7XHJcbiAgY29uc3QgY2FyZERhdGEgPSB7IG5hbWU6IHRpdGxlLCBsaW5rIH07XHJcblxyXG4gIGNhcmRTZWN0aW9uLmFkZEl0ZW0oY2FyZERhdGEsIFwicHJlcGVuZFwiKTtcclxuXHJcbiAgZS50YXJnZXQucmVzZXQoKTtcclxuICBjYXJkRm9ybVZhbGlkYXRpb24udG9nZ2xlU3VibWl0QnV0dG9uKCk7XHJcbiAgY2FyZFBvcHVwLmNsb3NlTW9kYWwoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ2FyZChjYXJkRGF0YSkge1xyXG4gIGNvbnN0IGNhcmRFbGVtZW50ID0gbmV3IENhcmQoY2FyZERhdGEsIFwiI2xvY2F0aW9uc19fY2FyZFwiLCAoKSA9PiB7XHJcbiAgICBsb2NhdGlvblBvcHVwLm9wZW5Nb2RhbChjYXJkRGF0YSwgbW9kYWxJbWFnZSwgbW9kYWxUaXRsZSk7XHJcbiAgfSkuY3JlYXRlQ2FyZCgpO1xyXG4gIHJldHVybiBjYXJkRWxlbWVudDtcclxufVxyXG5cclxuLy9ldmVudCBsaXN0ZW5lcnMgZm9yIHByb2ZpbGUgZWRpdCBmb3JtXHJcbmVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICBwcm9maWxlUG9wdXAub3Blbk1vZGFsKCk7XHJcbiAgZWRpdEZvcm1WYWxpZGF0aW9uLnJlc2V0VmFsaWRhdGlvbigpO1xyXG59KTtcclxuXHJcbi8vZXZlbnQgbGlzdGVuZXJzIGZvciBsb2NhdGlvbiBhZGQgZm9ybVxyXG5hZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICBjYXJkUG9wdXAub3Blbk1vZGFsKCk7XHJcbn0pO1xyXG4iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXAuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEltYWdlIGV4dGVuZHMgUG9wdXAge1xyXG4gIG9wZW5Nb2RhbCh7IG5hbWUsIGxpbmsgfSwgbW9kYWxJbWFnZSwgbW9kYWxUaXRsZSkge1xyXG4gICAgbW9kYWxJbWFnZS5zcmMgPSBsaW5rO1xyXG4gICAgbW9kYWxJbWFnZS5hbHQgPSBuYW1lO1xyXG4gICAgbW9kYWxUaXRsZS50ZXh0Q29udGVudCA9IG5hbWU7XHJcbiAgICBzdXBlci5vcGVuTW9kYWwoKTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckluZm8ge1xyXG4gIGNvbnN0cnVjdG9yKHsgbmFtZVNlbGVjdG9yLCBkZXNjcmlwdGlvblNlbGVjdG9yIH0pIHtcclxuICAgIHRoaXMubmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobmFtZVNlbGVjdG9yKTtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGRlc2NyaXB0aW9uU2VsZWN0b3IpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXNlckluZm8oKSB7XHJcbiAgICBjb25zdCBuYW1lID0gdGhpcy5uYW1lLnRleHRDb250ZW50O1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSB0aGlzLmRlc2NyaXB0aW9uLnRleHRDb250ZW50O1xyXG4gICAgcmV0dXJuIHsgbmFtZSwgZGVzY3JpcHRpb24gfTtcclxuICB9XHJcblxyXG4gIHNldFVzZXJJbmZvKHsgbmFtZSwgZGVzY3JpcHRpb24gfSkge1xyXG4gICAgdGhpcy5uYW1lLnRleHRDb250ZW50ID0gbmFtZTtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbiB7XHJcbiAgY29uc3RydWN0b3IoeyBpdGVtcywgcmVuZGVyZXIgfSwgY2xhc3NTZWxlY3Rvcikge1xyXG4gICAgdGhpcy5pdGVtcyA9IGl0ZW1zO1xyXG4gICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyO1xyXG4gICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNsYXNzU2VsZWN0b3IpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVySXRlbXMoKSB7XHJcbiAgICB0aGlzLml0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgdGhpcy5hZGRJdGVtKGl0ZW0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhZGRJdGVtKGVsZW1lbnQsIG1ldGhvZCA9IFwiYXBwZW5kXCIpIHtcclxuICAgIGNvbnN0IGNhcmQgPSB0aGlzLnJlbmRlcmVyKGVsZW1lbnQpO1xyXG4gICAgdGhpcy5jb250YWluZXJbbWV0aG9kXShjYXJkKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIkZvcm1WYWxpZGF0b3IiLCJjb25zdHJ1Y3RvciIsInNldHRpbmdzT2JqIiwiZm9ybUVsZW1lbnQiLCJ0aGlzIiwiZm9ybSIsIl9zdWJtaXRCdXR0b24iLCJxdWVyeVNlbGVjdG9yIiwic3VibWl0QnV0dG9uU2VsZWN0b3IiLCJfaW5wdXRMaXN0IiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImlucHV0U2VsZWN0b3IiLCJlbmFibGVWYWxpZGF0aW9uIiwiZm9yRWFjaCIsImlucHV0IiwiX2FkZElucHV0RXZlbnRzIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9jaGVja1ZhbGlkaXR5IiwidG9nZ2xlU3VibWl0QnV0dG9uIiwiZXJyb3JFbGVtZW50IiwibmV4dFNpYmxpbmciLCJ2YWxpZGl0eSIsInZhbGlkIiwiX2hpZGVFcnJvciIsIl9zaG93RXJyb3IiLCJyZXNldFZhbGlkYXRpb24iLCJlcnJvck1lc3NhZ2UiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsImNsYXNzTGlzdCIsImFkZCIsImlucHV0RXJyb3JDbGFzcyIsInRleHRDb250ZW50IiwicmVtb3ZlIiwiX2hhc0ludmFsaWRJbnB1dCIsImluYWN0aXZlQnV0dG9uQ2xhc3MiLCJkaXNhYmxlZCIsInNvbWUiLCJpbnB1dEVsZW1lbnQiLCJDYXJkIiwiZGF0YSIsImNhcmRTZWxlY3RvciIsImhhbmRsZUltYWdlQ2xpY2siLCJpbWFnZSIsImxpbmsiLCJ0ZXh0IiwibmFtZSIsImNhcmRUZW1wbGF0ZSIsImRvY3VtZW50IiwiY29udGVudCIsIl9jYXJkRWxlbWVudCIsImNsb25lTm9kZSIsIl9jYXJkSW1hZ2UiLCJfY2FyZFRpdGxlIiwiX2RlbGV0ZUJ1dHRvbiIsIl9saWtlQnV0dG9uIiwiX3NldEV2ZW50TGlzdGVuZXJzIiwiX2xpa2VDYXJkIiwiX3JlbW92ZUNhcmQiLCJlIiwidGFyZ2V0IiwidG9nZ2xlIiwiY2xvc2VzdCIsImNyZWF0ZUNhcmQiLCJzcmMiLCJhbHQiLCJQb3B1cCIsInBvcHVwU2VsZWN0b3IiLCJtb2RhbCIsIm9wZW5Nb2RhbCIsIl9oYW5kbGVDbG9zZUV2ZW50IiwiY2xvc2VNb2RhbCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjb250YWlucyIsImtleSIsInNldEV2ZW50TGlzdGVuZXJzIiwiUG9wdXBXaXRoRm9ybSIsInN1Ym1pdEZ1bmN0aW9uIiwic3VwZXIiLCJzdWJtaXQiLCJpbnB1dHMiLCJfZ2V0SW5wdXRWYWx1ZXMiLCJpbnB1dHZhbHVlcyIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJ2YWxpZGF0aW9uT2JqIiwiZm9ybVNlbGVjdG9yIiwiZmllbGRTZWxlY3RvciIsImVycm9yU2VsZWN0b3IiLCJlZGl0QnV0dG9uIiwiYWRkQnV0dG9uIiwiZWRpdEZvcm0iLCJmb3JtcyIsImFkZENhcmRGb3JtIiwibW9kYWxJbWFnZSIsIm1vZGFsVGl0bGUiLCJjYXJkUG9wdXAiLCJfcmVmMiIsInRpdGxlIiwiY2FyZERhdGEiLCJjYXJkU2VjdGlvbiIsImFkZEl0ZW0iLCJyZXNldCIsImNhcmRGb3JtVmFsaWRhdGlvbiIsInByb2ZpbGVQb3B1cCIsIl9yZWYiLCJkZXNjcmlwdGlvbiIsInVzZXJJbmZvIiwic2V0VXNlckluZm8iLCJsb2NhdGlvblBvcHVwIiwibmFtZVNlbGVjdG9yIiwiZGVzY3JpcHRpb25TZWxlY3RvciIsImdldFVzZXJJbmZvIiwiY2xhc3NTZWxlY3RvciIsIml0ZW1zIiwicmVuZGVyZXIiLCJjb250YWluZXIiLCJyZW5kZXJJdGVtcyIsIml0ZW0iLCJlbGVtZW50IiwibWV0aG9kIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiY2FyZCIsImVkaXRGb3JtVmFsaWRhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=