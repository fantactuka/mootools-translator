document.addEvent('domready', function() {

    var match = location.search.match(/lang=([^#&]*)/);

    if (match) {
        var language = match[1];
        var languages = {
            ch: '病毒威脅和其他安全問題的影避免您的PC通過組合和拆裝工具軟件保護操作系統安全更新和安全計算的做法在網絡上HP提供易於遵循的個人電腦安全方法和解決方在這裡一中心位置'.split(''),
            ru: 'Вирус угрозы и другие вопросы безопасности которые влияют на ПК можно избежать с помощью сочетания защиты программного обеспечения и инструменты удаления обновления операционной системы безопасности а также безопасные методы вычислений на веб-HP предоставляет простой в последующей персональных вычислительных систем безопасности и методы решения здесь в одном центральное расположение'.split(' '),
            it: 'Minacce di virus e altri problemi di protezione che interessano il vostro PC può essere evitato attraverso una combinazione di protezione del software e degli strumenti di rimozione operativo aggiornamenti di sicurezza del sistema e procedure di elaborazione sicuro sul web HP fornisce facile da seguire Personal Computing metodi e soluzioni di sicurezza qui in uno posizione centrale'.split(' '),
            sp: 'Virus de amenazas y otras cuestiones de seguridad que afectan a su PC puede evitarse mediante una combinación de protección de software y herramientas de eliminación de actualizaciones del sistema operativo de seguridad y normas de seguridad informática en la web de HP proporciona fácil de seguir de Computación Personal de métodos de seguridad y soluciones de aquí en un Ubicado en el centro'.split(' ')
        };

        if (!(languages[language])) alert('Can`t find language ' + language);

        var fake = languages[language];
        var length = fake.length;
        var re = language == 'ch' ? /[a-z]{1,2}/gi : /\w[^\s]*/gi;

        $(document.body).getElements('*').each(function(element) {
            $each(element.childNodes, function(node) {
                if (node.nodeType == 3) {
                    var prop = node.textContent ? 'textContent' : 'nodeValue';
                    node[prop] = node[prop].replace(re, function(match, index) {
                        return fake[index % length];
                    });
                }
            }, null);
        });
    }

});
