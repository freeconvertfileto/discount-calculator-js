(function() {
    var priceEl = document.getElementById('discPrice');
    var pctEl = document.getElementById('discPct');
    var pct2El = document.getElementById('discPct2');
    var finalEl = document.getElementById('discFinal');
    var savedEl = document.getElementById('discSaved');

    function fmt(n) {
        return '$' + n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }

    function calculate() {
        var price = parseFloat(priceEl.value) || 0;
        var pct = parseFloat(pctEl.value) || 0;
        var pct2 = parseFloat(pct2El.value) || 0;
        if (price <= 0) { finalEl.textContent = '--'; savedEl.textContent = '--'; return; }
        var after1 = price * (1 - pct / 100);
        var final = pct2 > 0 ? after1 * (1 - pct2 / 100) : after1;
        var saved = price - final;
        finalEl.textContent = fmt(final);
        savedEl.textContent = fmt(saved) + ' (' + (saved / price * 100).toFixed(1) + '%)';
    }

    [priceEl, pctEl, pct2El].forEach(function(el) { el.addEventListener('input', calculate); });

    document.querySelector('.disc-quick-btns').addEventListener('click', function(e) {
        var btn = e.target.closest('.disc-quick-btn');
        if (!btn) return;
        var btns = this.querySelectorAll('.disc-quick-btn');
        for (var i = 0; i < btns.length; i++) btns[i].classList.remove('disc-quick-active');
        btn.classList.add('disc-quick-active');
        pctEl.value = btn.getAttribute('data-pct');
        calculate();
    });
})();
