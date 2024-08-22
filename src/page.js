document.addEventListener('DOMContentLoaded', (event) => {
    const deployTimeElement = document.getElementById('deploy-time');
    const calculateButton = document.getElementById('calculate');
    const resultElement = document.getElementById('result');
    const audioElement = document.getElementById('background-audio');
    
    function formatDateTime(date) {
        return date.toLocaleString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    }

    function getFormattedDeployTime() {
        const deployTime = localStorage.getItem('deployTime');
        if (deployTime) {
            return deployTime;
        } else {
            const now = new Date();
            const formattedDateTime = formatDateTime(now);
            localStorage.setItem('deployTime', formattedDateTime);
            return formattedDateTime;
        }
    }

    const formattedDateTime = getFormattedDeployTime();
    deployTimeElement.textContent = `Este deploy foi feito em ${formattedDateTime}.`;

    function soma() {
        return "Hello World";
    }

    calculateButton.addEventListener('click', () => {
        const result = soma(); 
        resultElement.textContent = `Resultado: ${result}`;

        if (audioElement) {
            audioElement.play().catch(error => {
                console.log('A reprodução de áudio falhou:', error);
            });
        }
    });

    function shake() {
        document.body.classList.add('shake');
        setTimeout(() => document.body.classList.remove('shake'), 500);
    }

    calculateButton.addEventListener('click', shake);
});
