function Calculadora() {
    this.display = document.querySelector('.display')

    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    }

    this.addNumDisplay = (el) => {
        this.display.value += el.innerText
        this.display.focus();
    }
    this.clearDisplay = () => this.display.value = ' '
    this.eraseDisplay = () => this.display.value = this.display.value.slice(0, -1)
    this.finishAccount = () => {
        try {
            const conta = eval(this.display.value);
            if(!conta) {
                alert('Conta invalida')
                return;
            }
            this.display.value = conta;
        } catch(e) {
            alert('Conta invalida')
            return;
        }
    }

    this.capturaEnter = () => {
        this.display.addEventListener('keypress', event => {
            if(event.codeKey === 13) return;
                this.finishAccount();
        });
    };

    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const el = event.target
            if(el.classList.contains('btn-num')) this.addNumDisplay(el);
            if(el.classList.contains('btn-clear')) this.clearDisplay();
            if(el.classList.contains('btn-del')) this.eraseDisplay();
            if(el.classList.contains('btn-eq')) this.finishAccount();
        })
    }
}

const calculadora = new Calculadora();
calculadora.inicia();