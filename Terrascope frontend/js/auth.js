// ============================================================
//  auth.js  —  Shared Supabase auth for all TerraScope pages
// ============================================================

const SUPABASE_URL = "https://sifzjfzzkdzjvnjgzjwi.supabase.co";
const SUPABASE_KEY = "sb_publishable_MP_CAHgmdUbZypV-Cuz8KA_asbic9Je";

// Create one shared client (reused by all pages)
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/**
 * ─── AUTO-INIT ───────────────────────────────────────────────
 * Checks <body> data-auth attribute:
 * "required" -> runs requireAuth()
 * "soft"     -> runs initAuth()
 * (none)     -> does nothing
 */
document.addEventListener("DOMContentLoaded", () => {
    const authType = document.body.getAttribute("data-auth");
    if (authType === "required") {
        requireAuth();
    } else if (authType === "soft") {
        initAuth();
    }
});

// ─── Session guard ───────────────────────────────────────────
async function requireAuth() {
    const { data } = await _supabase.auth.getSession();
    if (!data.session) {
        window.location.href = "signup.html";
        return null;
    }
    _applyUserToUI(data.session.user);
    return data.session.user;
}

// ─── Soft auth check ─────────────────────────────────────────
async function initAuth() {
    const { data } = await _supabase.auth.getSession();
    if (data.session) {
        _applyUserToUI(data.session.user);
    }
}

// ─── Populate Navbar & Profile Modal ─────────────────────────
function _applyUserToUI(user) {
    const meta = user.user_metadata || {};
    const name = meta.full_name || user.email?.split("@")[0] || "Farmer";

    // 1. Navbar elements
    const elements = {
        wrapper: document.getElementById("profileWrapper"),
        nameSpan: document.getElementById("profileName"),
        pName: document.getElementById("pName"),
        pEmail: document.getElementById("pEmail"),
        pPhone: document.getElementById("pPhone"),
        pDistrict: document.getElementById("pDistrict"),
        logoutBtn: document.getElementById("logoutBtn"),
        profileBtn: document.getElementById("profileBtn"),
        profileDropdown: document.getElementById("profileDropdown")
    };

    if (elements.wrapper) elements.wrapper.classList.remove("hidden");
    if (elements.nameSpan) elements.nameSpan.textContent = name;
    if (elements.pName) elements.pName.textContent = name;
    if (elements.pEmail) elements.pEmail.textContent = user.email || "—";
    if (elements.pPhone) elements.pPhone.textContent = meta.phone_number || "—";
    if (elements.pDistrict) elements.pDistrict.textContent = meta.district || "—";

    // 2. Profile Modal elements (usually in dashboard.html)
    const modalElems = {
        avatar: document.getElementById("pmAvatar"),
        title: document.getElementById("pmName"),
        email: document.getElementById("pmEmail"),
        phone: document.getElementById("pmPhone"),
        dist: document.getElementById("pmDistrict"),
        since: document.getElementById("pmSince")
    };

    if (modalElems.avatar) {
        const initials = name.trim().split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
        modalElems.avatar.textContent = initials || '?';
    }
    if (modalElems.title) modalElems.title.textContent = name;
    if (modalElems.email) modalElems.email.textContent = user.email || "—";
    if (modalElems.phone) modalElems.phone.textContent = meta.phone_number || "—";
    if (modalElems.dist) modalElems.dist.textContent = meta.district || "—";
    if (modalElems.since) {
        const created = user.created_at ? new Date(user.created_at).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' }) : '—';
        modalElems.since.textContent = created;
    }

    // Toggle dropdown
    if (elements.profileBtn && elements.profileDropdown) {
        elements.profileBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            elements.profileDropdown.classList.toggle("hidden");
        });
        document.addEventListener("click", () => {
            elements.profileDropdown.classList.add("hidden");
        });
    }

    // Logout
    if (elements.logoutBtn) {
        elements.logoutBtn.addEventListener("click", async () => {
            await _supabase.auth.signOut();
            window.location.href = "signup.html";
        });
    }
}

// ─── Modal Handlers ──────────────────────────────────────────
function openProfileModal() {
    const modal = document.getElementById('profileModalOverlay');
    if (modal) modal.classList.add('open');
}

function closeProfileModal(e) {
    const modal = document.getElementById('profileModalOverlay');
    if (!modal) return;
    if (!e || e.target === modal) {
        modal.classList.remove('open');
    }
}

function goToLogin() {
    window.location.href = "signup.html";
}
