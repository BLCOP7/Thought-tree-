document.addEventListener('DOMContentLoaded', () => {
    const addNodeBtn = document.getElementById('add-node-btn');
  
    addNodeBtn.addEventListener('click', () => {
      const nameInput = document.getElementById('name-input');
      const newNodeText = document.getElementById('new-node-text');
      const name = nameInput.value.trim();
      const text = newNodeText.value.trim();
      
      if (name && text) {
        const selectedNode = document.querySelector('.selected');
        
        if (selectedNode) {
          const newNode = document.createElement('li');
          newNode.innerHTML = `<div class="node"><strong>${name}:</strong> ${text}</div>`;
          
          let childrenUl = selectedNode.querySelector('.children');
          if (!childrenUl) {
            childrenUl = document.createElement('ul');
            childrenUl.classList.add('children');
            selectedNode.appendChild(childrenUl);
          }
  
          childrenUl.appendChild(newNode);
        }
        
        nameInput.value = '';
        newNodeText.value = '';
      }
    });
  
    // Delegate event handling to the parent element
    document.getElementById('tree-container').addEventListener('click', (event) => {
      const selectedNode = document.querySelector('.selected');
      
      if (selectedNode) {
        selectedNode.classList.remove('selected');
      }
      
      if (event.target.classList.contains('node')) {
        event.target.parentElement.classList.add('selected');
      }
    });
  
    // Event delegation for dynamically created nodes
    document.getElementById('tree-container').addEventListener('click', (event) => {
      if (event.target.classList.contains('node')) {
        event.target.parentElement.classList.add('selected');
      }
    });
  });
  
  