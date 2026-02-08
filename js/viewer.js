export function initViewer(noteData) {
    const header = document.querySelector('header');
    const container = document.querySelector('.container');
    const overlay = document.getElementById('viewer-overlay');
    const iframe = overlay.querySelector('iframe');
    const closeBtn = document.getElementById('close-viewer');
    const title = document.getElementById('viewer-title');

    function openNote(note) {
        // Disappearing navigation/content
        if (header) {
            header.style.opacity = '0';
            header.style.transform = 'translateY(-20px)';
        }
        container.style.opacity = '0';
        container.style.transform = 'scale(0.98)';

        setTimeout(() => {
            title.textContent = note.title;
            iframe.src = note.file;
            overlay.classList.add('active');
        }, 300);
    }

    function closeNote() {
        overlay.classList.remove('active');
        iframe.src = '';

        setTimeout(() => {
            if (header) {
                header.style.opacity = '1';
                header.style.transform = 'translateY(0)';
            }
            container.style.opacity = '1';
            container.style.transform = 'scale(1)';
        }, 100);
    }

    closeBtn.addEventListener('click', closeNote);

    return { openNote };
}
