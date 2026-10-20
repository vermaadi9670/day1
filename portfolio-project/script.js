document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add some basic interactivity, e.g., alert on contact
document.querySelector('#contact a').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Contact form would open here!');
});

// Portfolio filter buttons
const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');

        projects.forEach(project => {
            if (filter === 'all' || project.getAttribute('data-category') === filter) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    });
});

// Modal functionality
const modal = document.getElementById('project-modal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close-btn');

document.querySelectorAll('.details-btn').forEach(button => {
    button.addEventListener('click', () => {
        const projectId = button.getAttribute('data-project');
        loadProjectDetails(projectId);
        modal.style.display = 'block';
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

function loadProjectDetails(projectId) {
    let content = '';
    switch(projectId) {
        case 'web1':
            content = '<h3>Web Project 1</h3><p>Detailed description of Web Project 1.</p><p>Technologies used: HTML, CSS, JavaScript.</p>';
            break;
        case 'mobile1':
            content = '<h3>Mobile App 1</h3><p>Detailed description of Mobile App 1.</p><p>Technologies used: React Native, Expo.</p>';
            break;
        case 'design1':
            content = '<h3>Design Project 1</h3><p>Detailed description of Design Project 1.</p><p>Tools used: Adobe Photoshop, Illustrator.</p>';
            break;
        case 'web2':
            content = '<h3>Web Project 2</h3><p>Detailed description of Web Project 2.</p><p>Technologies used: Vue.js, Tailwind CSS.</p>';
            break;
        default:
            content = '<p>No details available.</p>';
    }
    modalBody.innerHTML = content;
}
