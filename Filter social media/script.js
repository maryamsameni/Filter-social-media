function _filter(self) {
    let _icon = document.querySelectorAll('.filter>figure')
    let _txt = self.getAttribute('data-status')
    if (_txt != 'all') {
        for (i = 0; i < _icon.length; i++) {
            let temp = _icon[i].getAttribute('data-status')
            if (_txt == temp) {
                _icon[i].style.display = 'flex'
            } else {
                _icon[i].style.display = 'none'
            }

        }
    } else {
        for (i = 0; i < _icon.length; i++) {
            _icon[i].style.display = 'flex'
        }
    }
}