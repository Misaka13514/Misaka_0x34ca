const anchors = document.querySelectorAll('a[href^="http"]:not([href*="atri.tk"])')
anchors.forEach(anchor => anchor.setAttribute('target', '_blank'))
anchors.forEach(anchor => anchor.setAttribute('rel', 'external noopenner nofollow'))
