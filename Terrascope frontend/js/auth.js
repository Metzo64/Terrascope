// ============================================================
//  auth.js  —  Shared Supabase auth for all TerraScope pages
// ============================================================

const SUPABASE_URL = "https://sifzjfzzkdzjvnjgzjwi.supabase.co";
const SUPABASE_KEY = "sb_publishable_MP_CAHgmdUbZypV-Cuz8KA_asbic9Je";

// Create one shared client (reused by all pages)
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// ─── Session guard ───────────────────────────────────────────
// Call this on pages that REQUIRE login.
// If no session → redirect to signup.html
async function requireAuth() {
    const { data } = await _supabase.auth.getSession();
    if (!data.session) {
        window.location.href = "signup.html";
        return null;
    }
    _applyUserToNavbar(data.session.user);
    return data.session.user;
}

// ─── Soft auth check ─────────────────────────────────────────
// Call this on pages that show user info but don't require login.
async function initAuth() {
    const { data } = await _supabase.auth.getSession();
    if (data.session) {
        _applyUserToNavbar(data.session.user);
    }
}

// ─── Show user name + logout in navbar ───────────────────────
function _applyUserToNavbar(user) {
    const meta = user.user_metadata || {};

    // Name: prefer full_name from metadata, fallback to email prefix
    const name = meta.full_name || user.email?.split("@")[0] || "Farmer";

    // profileWrapper — exists on index & other pages
    const wrapper = document.getElementById("profileWrapper");
    const nameSpan = document.getElementById("profileName");
    const pName = document.getElementById("pName");
    const pEmail = document.getElementById("pEmail");
    const pPhone = document.getElementById("pPhone");
    const pDistrict = document.getElementById("pDistrict");
    const logoutBtn = document.getElementById("logoutBtn");
    const profileBtn = document.getElementById("profileBtn");
    const profileDropdown = document.getElementById("profileDropdown");

    if (wrapper) { wrapper.classList.remove("hidden"); }
    if (nameSpan) { nameSpan.textContent = name; }
    if (pName) { pName.textContent = name; }
    if (pEmail) { pEmail.textContent = user.email || "—"; }
    if (pPhone) { pPhone.textContent = meta.phone_number || "—"; }
    if (pDistrict) { pDistrict.textContent = meta.district || "—"; }

    // Toggle dropdown
    if (profileBtn && profileDropdown) {
        profileBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            profileDropdown.classList.toggle("hidden");
        });
        document.addEventListener("click", () => {
            profileDropdown.classList.add("hidden");
        });
    }

    // Logout
    if (logoutBtn) {
        logoutBtn.addEventListener("click", async () => {
            await _supabase.auth.signOut();
            window.location.href = "signup.html";
        });
    }
}

// ─── Simple "login" redirect shortcut ────────────────────────
function goToLogin() {
    window.location.href = "signup.html";
}
