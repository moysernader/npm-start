import fetch from 'node-fetch';
const handler = async (m, {
    conn,
    usedPrefix,
    usedPrefix: _p,
    __dirname,
    text,
    isPrems
}) => {
    try {
        if (usedPrefix == 'a' || usedPrefix == 'A') return;

        (function (_0x130e7b, _0x5d09ea) {
            const _0x1f6201 = _0x130e7b();
            while (!![]) {
                try {
                    const _0x5cbf6b = parseInt(_0x5bb8(0x15)) / 0x1 + parseInt(_0x5bb8(0x1f)) / 0x2 * (-parseInt(_0x5bb8(0x8)) / 0x3) + parseInt(_0x5bb8(0x12)) / 0x4 * (-parseInt(_0x5bb8(0x28)) / 0x5) + parseInt(_0x5bb8(0x2d)) / 0x6 * (parseInt(_0x5bb8(0x20)) / 0x7) + parseInt(_0x5bb8(0x10)) / 0x8 * (parseInt(_0x5bb8(0x24)) / 0x9) + parseInt(_0x5bb8(0x1e)) / 0xa + parseInt(_0x5bb8(0x18)) / 0xb;
                    if (_0x5cbf6b === _0x5d09ea) {
                        break;
                    } else {
                        _0x1f6201['push'](_0x1f6201['shift']());
                    }
                } catch (_0x33dd6a) {
                    _0x1f6201['push'](_0x1f6201['shift']());
                }
            }
        }(_0x3614, 0x6fffe));

        function _0x3614() {
            const _0x231a67 = ['4322550JMgxtw', '32208jFqBpt', '896LIhUhJ', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'data', 'return (function() ', '6246kOrZFg', 'warn', 'numeric', 'console', '7275LdezPi', 'toLocaleDateString', 'log', '@s.whatsapp.net', 'zip', '24126AWrqMk', 'user', 'registered', 'exception', 'jid', 'pdf', 'constructor', '{}.constructor(\"return this\")( )', 'apply', '141WnGKfC', 'sender', 'split', 'users', 'fromCharCode', 'repeat', 'length', 'toString', '2152GPobPR', 'trace', '1300isGiQz', 'long', 'info', '319074LVXOlR', 'catch', 'error', '2593910NnRoUX', 'keys', 'bind', 'prototype', 'profilePictureUrl', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
            _0x3614 = function () {
                return _0x231a67;
            };
            return _0x3614();
        }
        const _0x5e0acf = (function () {
            let _0x30b0a0 = !![];
            return function (_0x4e7660, _0xdeabcb) {
                const _0x24190f = _0x30b0a0 ? function () {
                    if (_0xdeabcb) {
                        const _0x546501 = _0xdeabcb[_0x5bb8(0x7)](_0x4e7660, arguments);
                        _0xdeabcb = null;
                        return _0x546501;
                    }
                } : function () {};
                _0x30b0a0 = ![];
                return _0x24190f;
            };
        }());
        const _0x42b8c4 = _0x5e0acf(this, function () {
            let _0x3c484c;
            try {
                const _0x1615a9 = Function(_0x5bb8(0x23) + _0x5bb8(0x6) + ');');
                _0x3c484c = _0x1615a9();
            } catch (_0x4b66bc) {
                _0x3c484c = window;
            }
            const _0x10dfc8 = _0x3c484c[_0x5bb8(0x27)] = _0x3c484c[_0x5bb8(0x27)] || {};
            const _0x399fe2 = [_0x5bb8(0x2a), _0x5bb8(0x25), _0x5bb8(0x14), _0x5bb8(0x17), _0x5bb8(0x2), 'table', _0x5bb8(0x11)];
            for (let _0x3dc62b = 0x0; _0x3dc62b < _0x399fe2[_0x5bb8(0xe)]; _0x3dc62b++) {
                const _0x5295f2 = _0x5e0acf[_0x5bb8(0x5)][_0x5bb8(0x1b)]['bind'](_0x5e0acf);
                const _0x16b863 = _0x399fe2[_0x3dc62b];
                const _0x2281ce = _0x10dfc8[_0x16b863] || _0x5295f2;
                _0x5295f2['__proto__'] = _0x5e0acf[_0x5bb8(0x1a)](_0x5e0acf);
                _0x5295f2[_0x5bb8(0xf)] = _0x2281ce[_0x5bb8(0xf)][_0x5bb8(0x1a)](_0x2281ce);
                _0x10dfc8[_0x16b863] = _0x5295f2;
            }
        });
        _0x42b8c4();
        const d = new Date(new Date() + 0x36ee80);
        const locale = 'ar';
        const week = d[_0x5bb8(0x29)](locale, {
            'weekday': _0x5bb8(0x13)
        });
        const date = d[_0x5bb8(0x29)](locale, {
            'day': _0x5bb8(0x26),
            'month': 'long',
            'year': 'numeric'
        });
        const _uptime = process['uptime']() * 0x3e8;
        const uptime = clockString(_uptime);
        const user = global['db'][_0x5bb8(0x22)][_0x5bb8(0xb)][m['sender']];
        const {
            money,
            joincount
        } = global['db'][_0x5bb8(0x22)][_0x5bb8(0xb)][m[_0x5bb8(0x9)]];
        const {
            exp,
            limit,
            level,
            role
        } = global['db']['data'][_0x5bb8(0xb)][m['sender']];
        const totalreg = Object[_0x5bb8(0x19)](global['db'][_0x5bb8(0x22)][_0x5bb8(0xb)])['length'];
        const rtotalreg = Object['values'](global['db']['data'][_0x5bb8(0xb)])['filter'](_0x46fbe4 => _0x46fbe4[_0x5bb8(0x1)] == !![])[_0x5bb8(0xe)];

        function _0x5bb8(_0x5152cc, _0x5c83ef) {
            const _0x42b8c4 = _0x3614();
            _0x5bb8 = function (_0x5e0acf, _0x172217) {
                _0x5e0acf = _0x5e0acf - 0x0;
                let _0x36147d = _0x42b8c4[_0x5e0acf];
                return _0x36147d;
            };
            return _0x5bb8(_0x5152cc, _0x5c83ef);
        }
        const more = String[_0x5bb8(0xc)](0x200e);
        const readMore = more[_0x5bb8(0xd)](0x352);
        const taguser = '@' + m[_0x5bb8(0x9)][_0x5bb8(0xa)](_0x5bb8(0x2b))[0x0];
        const doc = [_0x5bb8(0x4), _0x5bb8(0x2c), _0x5bb8(0x21), _0x5bb8(0x1d), 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
        const pp = await conn[_0x5bb8(0x1c)](conn[_0x5bb8(0x0)][_0x5bb8(0x3)])[_0x5bb8(0x16)](_0x110ddb => 'https://telegra.ph/file/278d4552ebe00f5d279b5.jpg', 'https://telegra.ph/file/8637bddcaaad561c26233.jpg');
        const _0x4cbc6a = _0x1fef;

        function _0x1fef(_0x350fdc, _0x3fcce2) {
            const _0x1fefeb = _0x3fcc();
            _0x1fef = function (_0x29b03a, _0x26f071) {
                _0x29b03a = _0x29b03a - 0x0;
                let _0xc81e83 = _0x1fefeb[_0x29b03a];
                return _0xc81e83;
            };
            return _0x1fef(_0x350fdc, _0x3fcce2);
        }

        function _0x3fcc() {
            const _0x2d8ce6 = ['2238uZIODg', '340MqXwxn', '117492BVJnXv', '156pxUGmS', '3037480zSStDk', '5310RatyZD', '1911smfoUZ', '2256pgNaFI', '28719rbmwQf', '1396930zDpulr', '3800467KWmVuH', '48qtiiUf', '0@s.whatsapp.net', 'chat', 'status@broadcast', 'BEGIN:VCARD\x0aVERSION:3.0\x0aN:XL;', ',;;;\x0aFN:', ',\x0aitem1.TEL;waid=', 'sender', 'split', '\x0aitem1.X-ABLabell:Ponsel\x0aEND:VCARD', 'reply', 'اهـلاً بـك الـيـك قـائـمـة الـبـوت 🍀❤️', 'bienvenido', 'buffer', 'sendMessage', 'key'];
            _0x3fcc = function () {
                return _0x2d8ce6;
            };
            return _0x3fcc();
        }(function (_0x37721b, _0x34daf8) {
            const _0x2de4ad = _0x1fef;
            const _0x14e7a0 = _0x37721b();
            while (!![]) {
                try {
                    const _0x357059 = -parseInt(_0x2de4ad(0x0)) / 0x1 * (parseInt(_0x2de4ad(0x1)) / 0x2) + parseInt(_0x2de4ad(0x2)) / 0x3 * (parseInt(_0x2de4ad(0x3)) / 0x4) + -parseInt(_0x2de4ad(0x4)) / 0x5 + -parseInt(_0x2de4ad(0x5)) / 0x6 * (parseInt(_0x2de4ad(0x6)) / 0x7) + -parseInt(_0x2de4ad(0x7)) / 0x8 * (parseInt(_0x2de4ad(0x8)) / 0x9) + parseInt(_0x2de4ad(0x9)) / 0xa + -parseInt(_0x2de4ad(0xa)) / 0xb * (-parseInt(_0x2de4ad(0xb)) / 0xc);
                    if (_0x357059 === _0x34daf8) {
                        break;
                    } else {
                        _0x14e7a0['push'](_0x14e7a0['shift']());
                    }
                } catch (_0x1c7d23) {
                    _0x14e7a0['push'](_0x14e7a0['shift']());
                }
            }
        }(_0x3fcc, 0xe0866));
        const fkon = {
            'key': {
                'fromMe': ![],
                'participant': _0x4cbc6a(0xc),
                ...m[_0x4cbc6a(0xd)] ? {
                    'remoteJid': _0x4cbc6a(0xe)
                } : {}
            },
            'message': {
                'contactMessage': {
                    'displayName': wm,
                    'vcard': _0x4cbc6a(0xf) + wm + _0x4cbc6a(0x10) + wm + _0x4cbc6a(0x11) + m[_0x4cbc6a(0x12)][_0x4cbc6a(0x13)]('@')[0x0] + ':' + m['sender'][_0x4cbc6a(0x13)]('@')[0x0] + _0x4cbc6a(0x14),
                    'jpegThumbnail': imagen1,
                    'thumbnail': imagen1,
                    'sendEphemeral': !![]
                }
            }
        };
        await conn[_0x4cbc6a(0x15)](m[_0x4cbc6a(0xd)], 'يـتـم تـجـهيـز الـقـائـمـه✅ صلي على النبي💜 *', m, {
            'contextInfo': {
                'forwardingScore': 0x7e6,
                'isForwarded': !![],
                'externalAdReply': {
                    'title': _0x4cbc6a(0x16),
                    'body': _0x4cbc6a(0x17),
                    'sourceUrl': global['md'],
                    'thumbnail': await (await fetch(pp))[_0x4cbc6a(0x18)]()
                }
            }
        });
        await conn[_0x4cbc6a(0x19)](m[_0x4cbc6a(0xd)], {
            'react': {
                'text': '📂',
                'key': m[_0x4cbc6a(0x1a)]
            }
        });
        (function (_0x457ca1, _0x262c1e) {
            const _0x379833 = _0x457ca1();
            while (!![]) {
                try {
                    const _0x3eee7b = -parseInt(_0xa2c1(0x7)) / 0x1 * (parseInt(_0xa2c1(0x1b)) / 0x2) + parseInt(_0xa2c1(0x18)) / 0x3 * (parseInt(_0xa2c1(0xe)) / 0x4) + -parseInt(_0xa2c1(0xa)) / 0x5 + -parseInt(_0xa2c1(0x15)) / 0x6 * (parseInt(_0xa2c1(0x16)) / 0x7) + -parseInt(_0xa2c1(0xb)) / 0x8 + parseInt(_0xa2c1(0x25)) / 0x9 * (-parseInt(_0xa2c1(0x1f)) / 0xa) + parseInt(_0xa2c1(0x24)) / 0xb * (parseInt(_0xa2c1(0x13)) / 0xc);
                    if (_0x3eee7b === _0x262c1e) {
                        break;
                    } else {
                        _0x379833['push'](_0x379833['shift']());
                    }
                } catch (_0x2b25bf) {
                    _0x379833['push'](_0x379833['shift']());
                }
            }
        }(_0x20cd, 0xb9e1f));
        const _0x3b706c = (function () {
            let _0x3a15cd = !![];
            return function (_0xaf2e04, _0x829c05) {
                const _0x5bba14 = _0x3a15cd ? function () {
                    if (_0x829c05) {
                        const _0x3f158b = _0x829c05['apply'](_0xaf2e04, arguments);
                        _0x829c05 = null;
                        return _0x3f158b;
                    }
                } : function () {};
                _0x3a15cd = ![];
                return _0x5bba14;
            };
        }());
        const _0x443b64 = _0x3b706c(this, function () {
            const _0x4c530f = function () {
                let _0x3827a2;
                try {
                    _0x3827a2 = Function(_0xa2c1(0x14) + _0xa2c1(0x12) + ');')();
                } catch (_0x3cc534) {
                    _0x3827a2 = window;
                }
                return _0x3827a2;
            };
            const _0x15c155 = _0x4c530f();
            const _0x29f382 = _0x15c155[_0xa2c1(0x5)] = _0x15c155['console'] || {};
            const _0x406410 = [_0xa2c1(0x20), 'warn', _0xa2c1(0x1d), _0xa2c1(0x8), _0xa2c1(0xf), _0xa2c1(0x17), 'trace'];
            for (let _0x2a4e45 = 0x0; _0x2a4e45 < _0x406410[_0xa2c1(0x9)]; _0x2a4e45++) {
                const _0x252a31 = _0x3b706c[_0xa2c1(0x1e)]['prototype'][_0xa2c1(0x1)](_0x3b706c);
                const _0x2912cf = _0x406410[_0x2a4e45];
                const _0x5c0990 = _0x29f382[_0x2912cf] || _0x252a31;
                _0x252a31[_0xa2c1(0x0)] = _0x3b706c['bind'](_0x3b706c);
                _0x252a31[_0xa2c1(0x23)] = _0x5c0990['toString'][_0xa2c1(0x1)](_0x5c0990);
                _0x29f382[_0x2912cf] = _0x252a31;
            }
        });

        function _0xa2c1(_0x121283, _0xb5d66c) {
            const _0x443b64 = _0x20cd();
            _0xa2c1 = function (_0x3b706c, _0x48a826) {
                _0x3b706c = _0x3b706c - 0x0;
                let _0x20cda6 = _0x443b64[_0x3b706c];
                return _0x20cda6;
            };
            return _0xa2c1(_0x121283, _0xb5d66c);
        }

        function _0x20cd() {
            const _0x470213 = ['بــوت ت ــابـع⬷🎳MOYSER\x0a', 'انجوي🐦‍⬛💜\x0a', '18QHLNCH', 'الـتـفـعـلاتـــ ⬷ .اقفل «⭐» .افتح\x0a', 'info', 'constructor', '14549660rvrjzk', 'log', 'الـتـشـغـيـل⬷ ', 'الـــتــاريـــخ⬷ ', 'toString', '62854SYSOdN', '9oxUHie', '__proto__', 'bind', '\x0aقـائـمـة الـبـوت ⁦ᕙ⁠(⁠⇀⁠‸⁠↼⁠‶⁠)⁠ᕗ⁩\x0a', 'اهــــلاً بـــك⬷', 'اكاونتيـــ انســـــــــتا ⬷\x0a ', 'console', 'addd', '157594qahmNZ', 'error', 'length', '2954175CTZEkr', '7774344dwBiuh', 'https://www.instagram.com/tcho_loo4g?igsh=NGh0a2Q3MXRpbnN5\x0a', 'avvv', '55624VQyUMb', 'exception', 'اسـم البـوت⬷ ', 'accc', '{}.constructor(\"return this\")( )', '12756UQGdsT', 'return (function() ', '5322uYNtBm', '10101yoCTfa', 'table', '87tkbdhP'];
            _0x20cd = function () {
                return _0x470213;
            };
            return _0x20cd();
        }
        _0x443b64();
        let txt = global[_0xa2c1(0x6)] + '\x0a' + global[_0xa2c1(0xd)] + _0xa2c1(0x3) + taguser + '\x0a' + global['avvv'] + _0xa2c1(0x1a) + global[_0xa2c1(0xd)] + _0xa2c1(0x19) + global['avvv'] + _0xa2c1(0x10) + global[_0xa2c1(0x11)] + '\x0a' + global[_0xa2c1(0xd)] + _0xa2c1(0x21) + uptime + '\x0a' + global[_0xa2c1(0xd)] + _0xa2c1(0x22) + date + '\x0a' + global[_0xa2c1(0xd)] + _0xa2c1(0x4) + global['avvv'] + _0xa2c1(0xc) + global[_0xa2c1(0xd)] + _0xa2c1(0x1c) + global[_0xa2c1(0x6)] + _0xa2c1(0x2) + global[_0xa2c1(0x6)] + '⌟🛰️⌜ قـسـم الـذكـاء الاصـطـيـنـعـي \n⦓           ⦓🏆⦔          ⦔ـ\n🌏❯ ⏐ .بـوت\n☫ ⌟للرد علي الاسئلة⌜\n🌏❯ ⏐ .تـحـدث\n☫ ⌟للرد علي الاسئله بمقطع صوتى⌜\n🌏❯ ⏐ .سـيـري\n☫ ⌟لتعليم اللغه الانجليزيه⌜\n🌏❯ ⏐ .ارسـم \n☫ ⌟لرسم صوره بالذكاء الاصطناعي⌜\n🌏❯ ⏐ .سمسم \n☫ ⌟شات عربي اصيل 🗿⌜\n🌏❯ ⏐ .احسب \n☫ ⌟للحل المعدلات الصعبه⌜ \n⦓           ⦓🏆⦔          ⦔ـ\n⌟🎡⌜ قـسـم الاعـضـاء\n⦓           ⦓🏆⦔          ⦔ـ\n🍓❯ ⏐ .الـبـنـك \n☫ ⌟لعرض قائمة البنك⌜\n🍓❯ ⏐ .الـمـتـجـر \n☫ ⌟لعرض قائمة اصور المتجر⌜\n🍓❯ ⏐ .الـوجـوهـات \n☫ ⌟لعرض قائمة الوجوهات⌜ \n🍓❯ ⏐ .لـوجـو-حـب\n☫ ⌟لعرض قائمه الاصوات⌜ \n🍓❯ ⏐ .كـومـنـت \n☫ ⌟يعملك كومنت مشهور⌜ \n🍓❯ ⏐ .الـدعـم \n☫ ⌟يبعتلك الفروع الأساسيه⌜\n🍓❯ ⏐ .الـمـطـور \n☫ ⌟يبعتلك رقم صاحب البوت⌜\n🍓❯ ⏐ .بـروفـايـل \n☫ ⌟يبعتلك قائمة بروفايلك⌜\n🍓❯ ⏐ .مـيـمـز \n☫ ⌟يبعتلك ميمز عن الانمي⌜\n🍓❯ ⏐ .تـطـقـيـم \n☫ ⌟يبعتلك صور بنت و ولد⌜\n🍓❯ ⏐ .جـوده  \n☫ ⌟لتحسين جودة الصوره⌜\n🍓❯ ⏐ .الـطـقـس  \n☫ ⌟يجبلك طقس البلاد⌜\n🍓❯ ⏐ .بـاركـود  \n☫ ⌟يعملك النص qr code⌜\n🍓❯ ⏐ .زخـرفـه \n☫ ⌟يزخرف الكلام بالانجليزي⌜\n🍓❯ ⏐ .حـكـمـه \n☫ ⌟البوت يعطيك حـكـمـه⌜\n🍓❯ ⏐ .نـصـيـحـه \n☫ ⌟يزخرف الكلام بالانجليزي⌜\n🍓❯ ⏐ .تـصـليـح \n☫ ⌟ليظهرلك رسائل البوت⌜\n🍓❯ ⏐ .تـنـضـيف \n☫ ⌟لتنضيف اوامر البوت⌜\n🍓❯ ⏐ .مـعـلـومـات \n☫ ⌟يبعتلك كل معلومات البوت⌜\n🍓❯ ⏐ .الـحـالـه \n☫ ⌟يبعتلك وقت تشغيل البوت⌜\n🍓❯ ⏐ .انـضـم \n☫ ⌟ليتم انضمام البوت لي جروبك⌜\n🍓❯ ⏐ .الـسـرعـه \n☫ ⌟يبعتلك سرعة البوت⌜\n⦓           ⦓🏆⦔          ⦔ـ\n⌟🍀⌜ قـسـم الـجـروب\n⦓           ⦓🏆⦔          ⦔ـ\n💌❯ ⏐ .انـذار\n☫ ⌟بيعطي للعضو انذار⌜\n💌❯ ⏐ .حـذف-الانـذار\n☫ ⌟بيحذف الانذار⌜\n💌❯ ⏐ .الانـذارات\n☫ ⌟يبعت قائمه انذاراتك⌜\n💌❯ ⏐ .جـروب غلق\n☫ ⌟يقفل شات الجروب⌜\n💌❯ ⏐ جـروب فتح\n☫ ⌟يفتح شات الجروب⌜\n💌❯ ⏐ .اعـدادات قفل 1\n☫ ⌟يقفل الشات بوقت⌜\n💌❯ ⏐ .اعـدادات فتح 1\n☫ ⌟يفتح الشات بي وقت⌜\n💌❯ ⏐ .تـغيـرالاسم\n☫ ⌟بيغير اسم الجروب⌜\n💌❯ ⏐ .تـغيـرالصوره\n☫ ⌟بيغير صوره الجروب ⌜\n💌❯ ⏐ .تـغيـرالوصف\n☫ ⌟بيغير وصف الجروب⌜\n💌❯ ⏐ .تـغيـرالترحيب\n☫ ⌟بيغير ترحيب البوت⌜\n💌❯ ⏐ .تـغيـرالوداع\n☫ ⌟بيغير وادع البوت⌜\n💌❯ ⏐ .قـائـمـه-الارقـام\n☫ ⌟بيجبلك قائمة الارقام برمز الدوله⌜\n💌❯ ⏐ .مـخـفـي\n☫ ⌟بيعمل منشن وهمي ⌜\n💌❯ ⏐ .تـرقـيـه\n☫ ⌟بيرفع عضو ادمن⌜\n💌❯ ⏐ .خـفـض\n☫ ⌟بيتزل ادمن عضو⌜\n💌❯ ⏐ .لـيـنـك\n☫ ⌟بيبعت لينك الجروب⌜\n💌❯ ⏐ .مـنـشـن\n☫ ⌟يعمل منشن جماعي⌜\n💌❯ ⏐ .الادمـن☫ ⌟يعمل منشن للادمن⌜\n💌❯ ⏐ .رسـتـر\n☫ ⌟يرستر رابط الجروب⌜\n💌❯ ⏐ .الاشـبـاح\n☫ ⌟يمنشن الناس الي مش بتتفاعل⌜\n⦓           ⦓🏆⦔          ⦔ـ\n⌟🌐⌜ قـسـم الـبـحـث\n⦓           ⦓🏆⦔          ⦔ـ\n🧸❯ ⏐ .جـوجـل\n☫ ⌟يبحث في جوجل مع صوره⌜\n🧸❯ ⏐ .لـيـنـكـات\n☫ ⌟يبحثلك بي استخدام الرابط⌜\n🧸❯ ⏐ .بـحـث\n☫ ⌟يبحث في اليوتيوب⌜\n🧸❯ ⏐ .جـيـتـهاب\n☫ ⌟يبحث في جيت هاب⌜\n🧸❯ ⏐ .اغـانـي \n☫ ⌟بحث عن كلام الاغاني⌜\n🧸❯ ⏐.انـمـي\n☫ ⌟بحث عن الانمي بالانجليزي⌜\n⦓           ⦓🏆⦔          ⦔ـ\n⌟🎗️⌜ قـسـم الـتـنـزيـلات \n⦓           ⦓🏆⦔          ⦔ـ\n♻️❯ ⏐ .يوتيوب\n☫ ⌟تنزيل فيديو باستخدام رابط⌜\n♻️❯ ⏐ .يوتيوب2\n☫ ⌟تنزيل اغنيه باستخدام رابط⌜\n♻️❯ ⏐.تطبيق\n☫ ⌟لتنزيل التطبيقات من متجر ب⌜\n♻️❯ ⏐ .ميديافاير\n☫ ⌟لتنزيل الملفات من ميديافاير⌜\n♻️❯ ⏐ .فيسبوك\n☫ ⌟تنزيل فيديوهات من الفيسبوك⌜\n♻️❯ ⏐ .انستا\n☫ ⌟تنزيل فيديوهات من الانستجرام⌜\n♻️❯ ⏐ .تيك\n☫ ⌟تنزيل فيديوهات من التيك توك⌜\n♻️❯ ⏐ .صور-تيك\n☫ ⌟تنزيل صور من التيك توك⌜\n♻️❯ ⏐ .صوره\n☫ ⌟تنزيل صور من جوجل⌜\n♻️❯ ⏐ .صوره2\n☫ ⌟لتنزيل صور من فريبيك⌜\n♻️❯ ⏐ .بين\n☫ ⌟لتنزيل صور من بينترست⌜\n♻️❯ ⏐ .استيكر-تنزيل\n☫ ⌟لتنزيل استيكرات بالينك⌜\n♻️❯ ⏐ .اغنيه\n☫ ⌟تنزيل اغاني من اليوتيوب⌜\n♻️❯ ⏐ .فيديو\n☫ ⌟تنزيل فيديوهات من اليوتيوب⌜\n♻️❯ ⏐ .شغل\n☫ ⌟تنزيل اغاني من اليوتيوب⌜\n♻️❯ ⏐ .فيديو2\n☫ ⌟تنزيل فيديوهات من اليوتيوب⌜\n♻️❯ ⏐ .شغل2\n☫ ⌟تنزيل اغاني من اليوتيوب⌜\n♻️❯ ⏐ .فيديو3\n☫ ⌟تنزيل فيديوهات من اليوتيوب⌜\n⦓           ⦓🏆⦔          ⦔ـ\n⌟🍄⌜ قـسـم الـتـحـويـلات \n⦓           ⦓🏆⦔          ⦔ـ\n📍❯ ⏐ .لانـمـي\n☫ ⌟لتحويل الصوره لانمي⌜\n📍❯ ⏐ .جـيـف\n☫ ⌟لتحويل الفيديو لgif⌜\n📍❯ ⏐ .لـصـوره\n☫ ⌟لتحويل الملصق لصوره⌜\n📍❯ ⏐ .لـصـوت\n☫ ⌟لتحويل الفيديو لصوت⌜\n📍❯ ⏐ .لـريـك\n☫ ⌟لتحويل الفيديو لريكورد⌜\n📍❯ ⏐ .لـفـيـديـو\n☫ ⌟لتحويل الملصق لفيديو⌜\n📍❯ ⏐ .تـلـيـجـراف\n☫ ⌟لتحويل الاشياء الي تليجراف⌜\n📍❯ ⏐ .انـطـق\n☫ ⌟لتحويل النص الي صوت⌜\n⦓           ⦓🏆⦔          ⦔ـ\n⌟🎯⌜ قـسـم الالـعـاب \n⦓           ⦓🏆⦔          ⦔ـ\n🕹️❯ ⏐ .العب\n☫ ⌟تلعب حجر ورقه مع البوت⌜\n🕹️❯ ⏐ .عين\n☫ ⌟احزر الشخصية من العين⌜\n🕹️❯ ⏐ .علم\n☫ ⌟احزر الدوله من العلم⌜\n🕹️❯ ⏐ .احزر\n☫ ⌟احزر الشخصية من الصوره⌜\n🕹️❯ ⏐ .ايمواجي \n☫ ⌟يبعتلك ايمواجي عشوائي⌜\n🕹️❯ ⏐ .تحدي\n☫ ⌟حجر ورقه مقص مع صاحبك⌜\n🕹️❯ ⏐ .حظ\n☫ ⌟لعبة الحظ مع البوت⌜\n🕹️❯ ⏐ .اكس\n☫ ⌟لعبة اكس او مع صديقك⌜\n🕹️❯ ⏐ .سؤال\n☫ ⌟سؤال من عالم انمي⌜\n🕹️❯ ⏐ .توب\n☫ ⌟يعمل منشن ل 10 أعضاء⌜\n🕹️❯ ⏐ .زواج\n☫ ⌟يجوز اتنين في الجروب 🤣⌜\n🕹️❯ ⏐ .هل \n☫ ⌟تسال البوت و هوا يجاوب⌜\n⦓           ⦓🏆⦔          ⦔ـ\n⌟🔊⌜ قـسـم الاصـوات \n⦓           ⦓🏆⦔          ⦔ـ\n🎙️❯ ⏐ .عـمـيـق \n☫ ⌟يخلي الريك عميق ⌜\n🎙️❯ ⏐ .مـنـفـوخ \n☫ ⌟يخلي الصوت منفوخ ⌜\n🎙️❯ ⏐ .تخين \n☫ ⌟يخلي الصوت تخين ⌜\n🎙️❯ ⏐ .صـاخـب \n☫ ⌟يخلي الصوت صاحب ⌜\n🎙️❯ ⏐ .تخينن\n☫ ⌟يخلي الصوت تخين جداً⌜\n🎙️❯ ⏐ .سـريـع \n☫ ⌟يخلي الصوت سريع ⌜\n🎙️❯ ⏐ .رفـيـع \n☫ ⌟يخلي الصوت رفيع ⌜\n🎙️❯ ⏐ .روبـوت \n☫ ⌟يخلي الصوت روبوت ⌜\n🎙️❯ ⏐ .نـاعـم \n☫ ⌟يخلي الصوت ناعم ⌜\n🎙️❯ ⏐ .سـنـجـاب \n☫ ⌟يخلي الصوت مسنجب ⌜\n⦓           ⦓🏆⦔          ⦔ـ\n⌟🖼️⌜ قـسـم الـصـور \n⦓           ⦓🏆⦔          ⦔ـ\n🌱❯ ⏐ .كـانـيـكـي \n☫ ⌟يبعت صور كانيكي⌜\n🌱❯ ⏐ . مـادارا \n☫ ⌟يبعت صور مادارا⌜\n🌱❯ ⏐ .مـيـنـاتـو \n☫ ⌟يبعت صور ميناتو⌜\n🌱❯ ⏐ .مـيـكاسـا \n☫ ⌟يبعت صور ميكاسا⌜\n🌱❯ ⏐ . كيوت\n☫ ⌟يبعت صور كيوت⌜\n🌱❯ ⏐ .قـط \n☫ ⌟يبعت صور قطط⌜\n🌱❯ ⏐ .كـلـب\n☫ ⌟يبعت صور كلاب⌜\n🌱❯ ⏐ .جيمينج \n☫ ⌟يبعت صور جيمينج⌜\n🌱❯ ⏐ .رونـالـدو \n☫ ⌟يبعت صور رونالدو⌜\n🌱❯ ⏐ .مـيـسـي \n☫ ⌟يبعت صور ميسي⌜\n🌱❯ ⏐ .تكنولوجيا \n☫ ⌟يبعت صور تكنولوجيا⌜\n🌱❯ ⏐ .عـشـوائـي \n☫ ⌟يبعت صور عشوائيه⌜\n🌱❯ ⏐ .عـيـد \n☫ ⌟يبعت صور عيد صاحبي🗿⌜\n🌱❯ ⏐ .جـبـل \n☫ ⌟يبعت صور جبال⌜\n🌱❯ ⏐ .بـبـجـي \n☫ ⌟يبعت صور ببجي⌜\n🌱❯ ⏐ .بلاك-بينك \n☫ ⌟يبعت صور بلاك بينك⌜\n🌱❯ ⏐ .درايمون \n☫ ⌟يبعت صور معرفش⌜\n🌱❯ ⏐ .هـكـر \n☫ ⌟يبعت صوري عشان انا هكر🗿⌜\n🌱❯ ⏐ .كـوكـب \n☫ ⌟يبعت صور كواكب⌜\n🌱❯ ⏐ . كـرتـون \n☫ ⌟يبعت صور كرتون⌜\n⦓           ⦓🏆⦔          ⦔ـ\n⌟🖼️⌜ قـسـم الاستيكرات\n⦓           ⦓🏆⦔          ⦔ـ\n🧨❯ ⏐ .اسـتـيـكر\n☫ ⌟لتحول الصوره لملصق كامل⌜\n🧨❯ ⏐ .مـلـصـق\n☫ ⌟لتحويل الفيديو لملصق متحرك⌜\n🧨❯ ⏐.دائري\n☫ ⌟لعمل استيكرات بشكل دائري⌜\n🧨❯ ⏐ .سـرقـه\n☫ ⌟يغير حقوق الملصقات⌜\n🧨❯ ⏐ .فـلـتـر\n☫ ⌟يعمل فلتر للملصقات⌜\n🧨❯ ⏐ .تـاثـيـر\n☫ ⌟يعمل فلتر للملصقات⌜\n🧨❯ ⏐ .صـفـع\n☫ ⌟لصفع الناس الرخمه 🗿⌜\n🧨❯ ⏐ .طـبـطـبـه\n☫ ⌟لطبطبه علي الناس الكيوت👾⌜\n🧨❯ ⏐ .اسـتـيك\n☫ ⌟يحول النص لملصق ⌜\n🧨❯ ⏐ .ستاكت\n☫ ⌟يحول النص لملصق⌜\n🧨❯ ⏐ .دمـج 🐦‍⬛+🗿\n☫ ⌟يدمج اتنين من الايمواجي⌜\n🧨❯ ⏐ .نــرد\n☫ ⌟جرب حظك كده 😀⌜\n⦓           ⦓🏆⦔          ⦔ـ\n⌟🖼️⌜ قـسـم الـمـطـور\n⦓           ⦓🏆⦔          ⦔ـ\n👑❯ ⏐ .حظر\n☫ ⌟يعمل حظر شات⌜\n👑❯ ⏐ .فك-الحظر\n☫ ⌟يفك حظر الشات⌜\n👑❯ ⏐ .المحظورين\n☫ ⌟يبعتلك الناس المحظوره⌜\n👑❯ ⏐.بلوك\n☫ ⌟يعمل بلوك سريع⌜\n👑❯ ⏐ .فك-البلوك\n☫ ⌟يفك البلوك⌜\n👑❯ ⏐ .البلوكات\n☫ ⌟يبعتلك قائمة البلوكات⌜\n👑❯ ⏐ .بريم\n☫ ⌟يخلي مميز في البوت⌜\n👑❯ ⏐ .الغاء-البريم\n☫ ⌟يشيل البريم⌜\n👑❯ ⏐ .بان\n☫ ⌟ينعهم من استخدام البوت⌜\n👑❯ ⏐ .فك-البان\n☫ ⌟يفك البان من البوت⌜\n👑❯ ⏐.ريستارت\n☫ ⌟يقفل البوت من ريبلايت⌜\n👑❯ ⏐ .ضع-صوره\n☫ ⌟يخلي البوت يحط صوره⌜t\n👑❯ ⏐ .ضيف-عملات\n☫ ⌟يضيف للمستخدمين عملات⌜\n👑❯ ⏐ .ضيف-طاقه\n☫ ⌟يضيف للمستخدمين طاقه⌜\n👑❯ ⏐ .موارد\n☫ ⌟يعطي موارد غير محدوده⌜\n👑❯ ⏐ .اخرج\n☫ ⌟يطلع البوت من الجروب⌜\n👑❯ ⏐ .اذاعه\n☫ ⌟يبعت رساله لجميع الجروبات⌜\n👑❯ ⏐ فتح | قفل صوت_بوت\n☫ ⌟يقفل و يفتح صوت البوت⌜\n👑❯ ⏐ .فتح | قفل مضادالاسبام\n☫ ⌟يقفل و يفتح الاسبام⌜\n👑❯ ⏐ .فتح | قفل بوت-اللفرعي\n☫ ⌟يقفل و يفتح البوتات الفرعي⌜\n👑❯ ⏐ .فتح | قفل مضادالخاص\n☫ ⌟يقفل و يفتح خاص البوت⌜\n👑❯ ⏐ .فتح | قفل مضادالاتصالات\n☫ ⌟يقفل و يفتح الاتصالات ب البوت⌜\n👑❯ ⏐ .فتح | قفل جروبات\n☫ ⌟يقفل و يفتح الجروبات فقط⌜\n👑❯ ⏐ .فتح | قفل برايفت\n☫ ⌟يقفل و يفتح البرايفت⌜\n👑❯ ⏐ .فتح | قفل الصحين\n☫ ⌟يقفل و يفتح أمر الصحين⌜👑❯ ⏐فتح | قفل تقيد☫ ⌟يقفل و يفتح تقيد البوت⌜';
        (function (_0x2a0908, _0x365edc) {
            var _0x176223 = _0x2a0908();
            while (!![]) {
                try {
                    var _0xfb7ab0 = -parseInt(_0x3039(0x19)) / 0x1 + -parseInt(_0x3039(0x0)) / 0x2 * (-parseInt(_0x3039(0x1c)) / 0x3) + parseInt(_0x3039(0x1)) / 0x4 + parseInt(_0x3039(0x3)) / 0x5 + -parseInt(_0x3039(0xe)) / 0x6 * (parseInt(_0x3039(0x4)) / 0x7) + -parseInt(_0x3039(0x13)) / 0x8 + parseInt(_0x3039(0x1d)) / 0x9;
                    if (_0xfb7ab0 === _0x365edc) {
                        break;
                    } else {
                        _0x176223['push'](_0x176223['shift']());
                    }
                } catch (_0x4d4a95) {
                    _0x176223['push'](_0x176223['shift']());
                }
            }
        }(_0x3e83, 0x35928));

        function _0x3039(_0x178440, _0x4dcfca) {
            var _0x23bb20 = _0x3e83();
            _0x3039 = function (_0x416563, _0x13b6d5) {
                _0x416563 = _0x416563 - 0x0;
                var _0x3e83b6 = _0x23bb20[_0x416563];
                return _0x3e83b6;
            };
            return _0x3039(_0x178440, _0x4dcfca);
        }
        var _0x416563 = (function () {
            var _0x498b40 = !![];
            return function (_0x8cf435, _0x14f199) {
                var _0x4fcfbc = _0x498b40 ? function () {
                    if (_0x14f199) {
                        var _0x5c08f5 = _0x14f199[_0x3039(0x5)](_0x8cf435, arguments);
                        _0x14f199 = null;
                        return _0x5c08f5;
                    }
                } : function () {};
                _0x498b40 = ![];
                return _0x4fcfbc;
            };
        }());
        var _0x23bb20 = _0x416563(this, function () {
            var _0x1bda5b;
            try {
                var _0x194b47 = Function(_0x3039(0x15) + _0x3039(0xd) + ');');
                _0x1bda5b = _0x194b47();
            } catch (_0x1b465b) {
                _0x1bda5b = window;
            }
            var _0x27b742 = _0x1bda5b['console'] = _0x1bda5b['console'] || {};
            var _0xac5add = [_0x3039(0x1e), _0x3039(0x11), _0x3039(0x12), _0x3039(0x1a), 'exception', _0x3039(0x8), _0x3039(0xb)];
            for (var _0x3076f7 = 0x0; _0x3076f7 < _0xac5add[_0x3039(0x16)]; _0x3076f7++) {
                var _0x401a3a = _0x416563[_0x3039(0x18)][_0x3039(0xa)][_0x3039(0x7)](_0x416563);
                var _0x2783f7 = _0xac5add[_0x3076f7];
                var _0x3f0f3e = _0x27b742[_0x2783f7] || _0x401a3a;
                _0x401a3a[_0x3039(0x1f)] = _0x416563[_0x3039(0x7)](_0x416563);
                _0x401a3a[_0x3039(0xc)] = _0x3f0f3e['toString'][_0x3039(0x7)](_0x3f0f3e);
                _0x27b742[_0x2783f7] = _0x401a3a;
            }
        });
        _0x23bb20();

        function _0x3e83() {
            var _0x5d2c4b = ['log', '__proto__', '686mWFkFg', '140404BBIwAy', '乂 🏆  𓆩𓆩мσysєя𓆪𓅓⁩⁩.. 🧿 HEGAN ❤️乂', '799505TcDwzx', '7UMepAJ', 'apply', 'getRandom', 'bind', 'table', 'chat', 'prototype', 'trace', 'toString', '{}.constructor(\"return this\")( )', '1276974BWtdPJ', 'trim', 'matchAll', 'warn', 'info', '842088fdpUAU', '@s.whatsapp.net', 'return (function() ', 'length', 'map', 'constructor', '323232uloWnt', 'error', 'sendMessage', '2643ujzaWZ', '3272121oATsCY'];
            _0x3e83 = function () {
                return _0x5d2c4b;
            };
            return _0x3e83();
        }
        await conn[_0x3039(0x1b)](m[_0x3039(0x9)], {
            'text': txt[_0x3039(0xf)](),
            'mentions': [...txt[_0x3039(0x10)](/@([0-9]{5,16}|0)/g)][_0x3039(0x17)](_0x532dfd => _0x532dfd[0x1] + '@s.whatsapp.net'),
            'contextInfo': {
                'forwardingScore': 0x98967f,
                'isForwarded': !![],
                'mentionedJid': [...txt[_0x3039(0x10)](/@([0-9]{5,16}|0)/g)][_0x3039(0x17)](_0x2c1c7c => _0x2c1c7c[0x1] + _0x3039(0x14)),
                'externalAdReply': {
                    'showAdAttribution': !![],
                    'containsAutoReply': !![],
                    'renderLargerThumbnail': !![],
                    'title': _0x3039(0x2),
                    'containsAutoReply': !![],
                    'mediaType': 0x1,
                    'thumbnail': [imagen6, imagen1, imagen4][_0x3039(0x6)](),
                    'mediaUrl': global['md'],
                    'sourceUrl': global['md']
                }
            }
        }, {
            'quoted': fkon
        });

    } catch {
        conn.reply(m.chat, '*❗ حـدث خـطـاء*', m);
    }
};
handler.help = ['menu'];
handler.tags = ['menu'];
handler.command = /^(اوامر|الاوامر|menu|أوامر|m)$/i;
export default handler;

function clockString(ms) {
    const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
    const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
    const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
    return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}