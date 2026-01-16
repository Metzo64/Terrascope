// 🔑 SUPABASE CONFIG
const SUPABASE_URL = "https://jmdmrwmnyfnghhqggzlw.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_y3BIYo-V5pISoYNd7kQAqA_OSif7Nnk";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

let currentEmail = "";

// 📩 SEND OTP
async function sendOTP() {
  const email = document.getElementById("email").value.trim();
  const fullName = document.getElementById("fullName")?.value.trim(); // Get Name
  const district = document.getElementById("district")?.value;      // Get District
  const phone = document.getElementById("phone")?.value.trim();     // Get Phone

  if (!email) {
    alert("Enter email first");
    return;
  }

  currentEmail = email;

  const { error } = await supabaseClient.auth.signInWithOtp({
    email: email,
    options: {
      shouldCreateUser: true,
      // 💡 ADD THIS: This saves the farmer's info in Supabase metadata
      data: {
        full_name: fullName,
        district: district,
        phone_number: phone
      }
    }
  });

  if (error) {
    console.error(error);
    alert(error.message);
  } else {
    alert("6-digit OTP sent to your email");
  }
}

// 🔐 VERIFY OTP
async function verifyOTP() {
  const otp = document.getElementById("otp").value.trim();

  if (!otp) {
    alert("Enter OTP");
    return;
  }

  const { data, error } = await supabaseClient.auth.verifyOtp({
    email: currentEmail,
    token: otp,
    type: "email" // Use "email" for numeric codes sent via email
  });

  if (error) {
    alert("Invalid OTP: " + error.message);
  } else {
    alert("Login successful!");
    
    // Redirect to the field selection page
    window.location.href = "index.html"; 
  }
}