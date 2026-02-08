import { useMemo, useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("idle");
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [captchaSeed, setCaptchaSeed] = useState(0);

  const captchaChallenge = useMemo(() => {
    const offset = captchaSeed * 3;
    const first = 3 + ((offset + 2) % 7);
    const second = 5 + ((offset + 4) % 6);
    return {
      first,
      second,
      expected: first + second,
    };
  }, [captchaSeed]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Number.parseInt(captchaAnswer, 10) !== captchaChallenge.expected) {
      setStatus("captcha");
      return;
    }
    setStatus("success");
    event.currentTarget.reset();
    setCaptchaAnswer("");
    setCaptchaSeed((prev) => prev + 1);
  };

  return (
    <div className="bg-zinc-900/70 border border-zinc-700 rounded-2xl p-6 shadow-lg">
      <h2 className="text-2xl font-semibold mb-2">Kirim Pesan</h2>
      <p className="text-sm text-zinc-400 mb-6">
        Gunakan form ini untuk mengirim pesan singkat. Saya akan membalas secepatnya melalui email.
      </p>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <label className="flex flex-col gap-2 text-sm">
          Nama Lengkap
          <input
            type="text"
            name="name"
            required
            placeholder="Tulis nama kamu"
            className="rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-sm focus:border-violet-500 focus:outline-none"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm">
          Email
          <input
            type="email"
            name="email"
            required
            placeholder="nama@email.com"
            className="rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-sm focus:border-violet-500 focus:outline-none"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm">
          Pesan
          <textarea
            name="message"
            rows="5"
            required
            placeholder="Ceritakan kebutuhanmu..."
            className="rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-sm focus:border-violet-500 focus:outline-none"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm">
          Verifikasi anti-spam: {captchaChallenge.first} + {captchaChallenge.second} =
          <div className="flex flex-wrap items-center gap-2">
            <input
              type="number"
              name="captcha"
              inputMode="numeric"
              min="0"
              step="1"
              value={captchaAnswer}
              onChange={(event) => {
                setCaptchaAnswer(event.target.value);
                if (status === "captcha") {
                  setStatus("idle");
                }
              }}
              required
              placeholder="Jawaban angka"
              className="flex-1 rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-sm focus:border-violet-500 focus:outline-none"
            />
            <button
              type="button"
              className="rounded-full border border-zinc-700 px-4 py-2 text-xs font-semibold text-zinc-200 transition hover:border-violet-500 hover:text-white"
              onClick={() => setCaptchaSeed((prev) => prev + 1)}
            >
              Ganti soal
            </button>
          </div>
        </label>

        <button
          type="submit"
          className="mt-2 rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-violet-500"
        >
          Kirim Pesan
        </button>
        {status === "captcha" && (
          <p className="text-sm text-amber-400">
            Mohon jawab pertanyaan verifikasi dengan benar sebelum mengirim pesan.
          </p>
        )}
        {status === "success" && (
          <p className="text-sm text-emerald-400">
            Terima kasih! Pesanmu sudah terkirim.
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
