// ===============================
// 🔑 SUPABASE CONFIG
// ===============================
const SUPABASE_URL = "https://sifzjfzzkdzjvnjgzjwi.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_MP_CAHgmdUbZypV-Cuz8KA_asbic9Je";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

// ===============================
// 📩 SEND MAGIC LINK (FIRST LOGIN)
// ===============================
async function sendMagicLink() {
  const email = document.getElementById("email").value.trim();
  const fullName = document.getElementById("fullName")?.value.trim();
  const district = document.getElementById("district")?.value.trim();
  const phone = document.getElementById("phone")?.value.trim();

  if (!email || !email.includes("@")) {
    alert("Please enter a valid email address");
    return;
  }

  // Disable button to avoid double clicks
  const btn = document.getElementById("loginBtn");
  if (btn) btn.disabled = true;

  const { error } = await supabaseClient.auth.signInWithOtp({
    email,
    options: {
      shouldCreateUser: true,

      // 🔁 MUST MATCH SUPABASE DASHBOARD
      emailRedirectTo: "http://localhost:3000/auth-callback.html",

      // Optional: store farmer info in auth metadata
      data: {
        full_name: fullName || null,
        district: district || null,
        phone_number: phone || null,
      },
    },
  });

  if (btn) btn.disabled = false;

  if (error) {
    console.error(error);
    alert("Login failed: " + error.message);
    return;
  }

  alert(
    "Login link sent to your email 📩\n\nOpen it in the SAME browser."
  );
}
