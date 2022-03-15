import bootstrap from 'bootstrap/dist/js/bootstrap.bundle';

document.addEventListener('DOMContentLoaded', function() {
  const nextStepMainFormBtn  = document.querySelector('#nextStepbBtn');

  const prevTabInfoBelt = document.querySelector('.our-offert-nav-b__prev-tab-info-belt');
  const nextTabInfoBelt = document.querySelector('.our-offert-nav-b__next-tab-info-belt');

  const customRadioEls = document.querySelectorAll('.our-offert-form-b__custom-radio');

  for(const radioInput of customRadioEls) {
    const radioInputContainerEl = radioInput.closest('.our-offert-form-b__custom-radio-container');

    if(radioInput.checked) {
      radioInputContainerEl.classList.add('our-offert-form-b__custom-radio-container--active-bg-js');
    } else {
      radioInputContainerEl.classList.remove('our-offert-form-b__custom-radio-container--active-bg-js');
    }
  }

  for(const radioInputEl of customRadioEls) {
    radioInputEl.addEventListener('change', function() {
      for(const radioInput of customRadioEls) {
        const radioInputContainerEl = radioInput.closest('.our-offert-form-b__custom-radio-container');

        if(radioInput.checked) {
          radioInputContainerEl.classList.add('our-offert-form-b__custom-radio-container--active-bg-js');
        } else {
          radioInputContainerEl.classList.remove('our-offert-form-b__custom-radio-container--active-bg-js');
        }
      }
    });
  }

  // init tooltips
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  });

  nextStepMainFormBtn.addEventListener('click', function() {
    const nextStepMainFormTabBtn = document.querySelector('.next-step-main-form-btn-b');
    const nextStepMainFormTab = new bootstrap.Tab(nextStepMainFormTabBtn);

    prevTabInfoBelt.classList.add('d-none');
    nextTabInfoBelt.classList.remove('d-none');

    nextStepMainFormTab.show();
  });
});