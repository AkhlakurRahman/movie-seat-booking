const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const price = document.getElementById('price');

const movieSelect = document.getElementById('movie');
let ticketPrice = +movieSelect.value;

const updateSelectedSeatsCount = () => {
  const selectedSeats = document.querySelectorAll('.row .selected');
  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  price.innerText = selectedSeatsCount * ticketPrice;
};

// Seat select event
container.addEventListener('click', e => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');

    updateSelectedSeatsCount();
  }
});

// Movie select event
movieSelect.addEventListener('change', e => {
  ticketPrice = e.target.value;
  updateSelectedSeatsCount();
});
