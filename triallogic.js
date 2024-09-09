document.addEventListener('DOMContentLoaded', () => {
    const problemDescription = document.getElementById('problemDescription');
    const resultDiv = document.getElementById('result');
    const runCodeButton = document.getElementById('runCode');
    
    // Initialize CodeMirror
    const codeArea = CodeMirror.fromTextArea(document.getElementById('code'), {
        mode: 'javascript',
        lineNumbers: true,
        theme: 'default'
    });

    // Define a problem for the challenge
    const problem = {
        description: 'Write a function that returns the sum of two numbers.',
        solution: 'function add(a, b) { return a + b; }'
    };

    function loadProblem() {
        problemDescription.innerHTML = problem.description;
    }

    function runCode() {
        const userCode = codeArea.getValue().trim();
        
        // Simple check for correct function definition
        if (userCode.includes(problem.solution)) {
            resultDiv.textContent = 'Correct! Your function is correct.';
        } else {
            resultDiv.textContent = 'Try again! Make sure your function returns the sum of two numbers.';
        }
    }

    loadProblem();

    runCodeButton.addEventListener('click', runCode);
});
