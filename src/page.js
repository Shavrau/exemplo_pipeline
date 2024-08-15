  document.addEventListener('DOMContentLoaded', (event) => {
    const deployTimeElement = document.getElementById('deploy-time');
    
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

    const now = new Date();
    const formattedDateTime = formatDateTime(now);
    deployTimeElement.textContent = `Este deploy foi feito em ${formattedDateTime}.`;

    function soma() {
        return "Hello World"; // Mantendo a função como estava antes
    }

    const calculateButton = document.getElementById('calculate');
    const resultElement = document.getElementById('result');
    const audioElement = document.getElementById('background-audio');

    calculateButton.addEventListener('click', () => {
        const result = soma(); 
        resultElement.textContent = `Resultado: ${result}`;

        // Reproduzir áudio ao clicar no botão
        if (audioElement) {
            audioElement.play().catch(error => {
                console.log('A reprodução de áudio falhou:', error);
            });
        }
    });

    // Efeitos malucos
    function shake() {
        document.body.classList.add('shake');
        setTimeout(() => document.body.classList.remove('shake'), 500);
    }

    calculateButton.addEventListener('click', shake);
});
