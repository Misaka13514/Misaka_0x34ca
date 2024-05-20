import './index.css';

const anchors = document.querySelectorAll('a[href^="http"]:not([href*="apeiria.net"])')
anchors.forEach(anchor => anchor.setAttribute('target', '_blank'))
anchors.forEach(anchor => anchor.setAttribute('rel', 'external noopenner nofollow'))
