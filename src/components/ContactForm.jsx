import { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("idle");
  const [captchaChecked, setCaptchaChecked] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!captchaChecked) {
      setStatus("captcha");
      return;
    }
    setStatus("success");
    event.currentTarget.reset();
    setCaptchaChecked(false);
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

        <label className="flex items-start gap-3 rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-sm">
          <input
            type="checkbox"
            name="captcha"
            className="mt-1 accent-violet-500"
            checked={captchaChecked}
            onChange={(event) => setCaptchaChecked(event.target.checked)}
            required
          />
          <span>Saya bukan robot (verifikasi captcha).</span>
        </label>

        <button
          type="submit"
          className="mt-2 rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-violet-500"
        >
          Kirim Pesan
        </button>
        {status === "captcha" && (
          <p className="text-sm text-amber-400">
            Mohon centang verifikasi captcha sebelum mengirim pesan.
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
