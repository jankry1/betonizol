const steps = [...document.querySelectorAll('.step')];
const stage = document.querySelector('.installation-stage');
const stageCopy = document.getElementById('stage-copy');
const copies = {
  1: 'Поверхности подготавливаются к монтажу.',
  2: 'Уплотнение размещается в зоне будущего соединения.',
  3: 'Бетонные элементы соединяются и прижимают уплотнение.',
  4: 'Соединение герметизировано и защищено от проникновения воды.'
};

function setStep(value) {
  stage.dataset.current = String(value);
  stageCopy.textContent = copies[value];
  steps.forEach(btn => btn.classList.toggle('is-active', Number(btn.dataset.step) === value));
}

steps.forEach(btn => btn.addEventListener('click', () => setStep(Number(btn.dataset.step))));

let currentStep = 1;
setInterval(() => {
  currentStep = currentStep === 4 ? 1 : currentStep + 1;
  setStep(currentStep);
}, 3200);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
document.getElementById('year').textContent = new Date().getFullYear();
