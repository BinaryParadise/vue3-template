Vue.mixin({
    data: function () {
        return {
            _width: 0,
            _height: 0,
            _menuWidth: 0,
            _navH: 0
        };
    },
    created: function () {
        this._width = document.documentElement.clientHeight - 1;
        this._height = document.documentElement.clientHeight;
        this._menuWidth = 150;
        this._navH = 55;
        document.documentElement.style.setProperty("--content-height", this._size.contentH + "px");
    },
    computed: {
        _size: function () {
            return { width: this._width, height: this._height, menuWidth: this._menuWidth, contentW: this._width - this._menuWidth - 24 - 30, contentH: this._height - this._navH - 24 - 2 - 39 - 30 };
        }
    }
});