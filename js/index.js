

const refs = {

  daysVeiw: document.querySelector('span[data-value="days"]'),
  hoursVeiw: document.querySelector('span[data-value="hours"]'),
  minsVeiw: document.querySelector('span[data-value="mins"]'),
  secsVeiw: document.querySelector('span[data-value="secs"]'),
}


class CountdownTimer{
  constructor({selector, targetDate}){
    this.selector = selector;
    this.targetDate = targetDate;

  }

  setTime = setInterval(() => {
    // const startTime = this.targetDate;
    const currentTime = Date.now();
    const time = this.targetDate - currentTime ;
    // console.log(this.targetDate);

    this.timeUpdate(time)
  }, 1000);

   timeUpdate (time) {



        /*
        * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
        * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
        */
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));

        /*
        * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
        * остатка % и делим его на количество миллисекунд в одном часе
        * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
        */
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));

        /*
        * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
        * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
        */
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

        /*
        * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
        * миллисекунд в одной секунде (1000)
        */
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));


        refs.daysVeiw.textContent = `${days}`;
        refs.hoursVeiw.textContent = `${hours}`;
        refs.minsVeiw.textContent = `${mins}`;
        refs.secsVeiw.textContent = `${secs}`;


        // console.log(`${days}:${hours}:${mins}:${secs} `);
  }


   pad(value){
    return String(value).padStart(2, '0');
  }

}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2022'),
});