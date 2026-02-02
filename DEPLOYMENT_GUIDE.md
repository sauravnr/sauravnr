# GitHub, Vercel & DNS Setup Guide

## Part 1: Push to GitHub

### Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com)
2. Click the **+** icon (top right) → **New repository**
3. Fill in:
   - **Repository name**: `sauravnr` (or your preferred name)
   - **Description**: "Portfolio website - Next.js, React, Tailwind CSS"
   - **Visibility**: Public (recommended for portfolio)
4. Click **Create repository** (DO NOT initialize with README/gitignore)

### Step 2: Initialize Git & Push Code

Run these commands in your project directory:

```bash
cd d:\practise\sauravnr

# Initialize git repo
git init

# Add all files
git add .

# First commit
git commit -m "Initial commit: Portfolio website with animations and glassmorphism design"

# Rename branch to main (if on master)
git branch -M main

# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/sauravnr.git

# Push to GitHub
git push -u origin main
```

### Troubleshooting Git Commands

**If you get "fatal: not a git repository":**

```bash
git init
```

**If you get authentication error:**

1. Go to GitHub → Settings → Developer settings → Personal access tokens
2. Click "Tokens (classic)"
3. Click "Generate new token (classic)"
4. Select scopes: `repo`, `workflow`
5. Copy the token
6. When prompted for password, paste the token

**If you need to update remote URL:**

```bash
git remote set-url origin https://github.com/YOUR_USERNAME/sauravnr.git
```

---

## Part 2: Deploy on Vercel

### Step 1: Create Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Click **Sign Up**
3. Choose **Continue with GitHub**
4. Authorize Vercel to access your GitHub account

### Step 2: Deploy Your Project

1. After signing in, click **Add New...** → **Project**
2. Under "Import Git Repository", find **`sauravnr`**
3. Click **Import**
4. In the configuration screen:
   - **Project name**: `sauravnr` (auto-filled)
   - **Framework**: Next.js (auto-detected)
   - **Root Directory**: `./` (default)
5. Click **Deploy**

**⏳ Wait 2-5 minutes for deployment to complete**

### Step 3: View Your Live Site

Once deployment is done:

- You'll see a unique Vercel URL: `https://sauravnr-USERNAME.vercel.app`
- Click it to view your live portfolio
- Share this link!

### Environment Variables (Optional - for Email)

If you set up Resend for emails:

1. In Vercel dashboard, go to your project
2. Click **Settings** → **Environment Variables**
3. Add:
   - **Name**: `RESEND_API_KEY`
   - **Value**: `your_resend_api_key_here`
4. Select **Production** environment
5. Click **Save**
6. Redeploy by going to **Deployments** → latest → **Redeploy**

---

## Part 3: Connect Custom Domain (sauravniraula.com.np)

### Option A: Using Vercel's Nameservers (Recommended - Easiest)

#### Step 1: Add Domain in Vercel

1. Go to Vercel dashboard → Your project
2. Click **Settings** → **Domains**
3. Under "Add Domain":
   - Enter: `sauravniraula.com.np`
   - Click **Add**
4. Select **Using Vercel's Nameservers**
5. Vercel will show:
   - **Primary NS**: `ns1.vercel-dns.com`
   - **Secondary NS**: `ns2.vercel-dns.com`

#### Step 2: Update DNS at Your Domain Registrar

1. Go to your domain registrar (e.g., GoDaddy, Namecheap, Nixtio, etc.)
2. Log in to your account
3. Find **DNS Management** or **Nameservers** section
4. Replace existing nameservers with Vercel's:
   - **Primary Nameserver**: `ns1.vercel-dns.com`
   - **Secondary Nameserver**: `ns2.vercel-dns.com`
   - (Optional) **Tertiary**: `ns3.vercel-dns.com`
5. **Save changes**

**⏳ DNS propagation takes 24-48 hours** (usually 2-4 hours)

Check status: [dnschecker.org](https://dnschecker.org) → Enter `sauravniraula.com.np`

---

### Option B: Using CNAME Record (Alternative)

If your registrar doesn't support changing nameservers or you want to keep other services:

#### Step 1: In Vercel

1. Vercel dashboard → Settings → Domains
2. Add domain: `sauravniraula.com.np`
3. Select **Using CNAME** instead of Nameservers
4. Vercel shows: `cname.vercel-dns.com`

#### Step 2: At Your Registrar

1. Go to DNS/Nameserver settings
2. Create a **CNAME record**:
   - **Name/Host**: `@` (or leave blank, or use `www`)
   - **Type**: CNAME
   - **Value/Points to**: `cname.vercel-dns.com`
3. Save

**Note**: With CNAME, root domain (`@`) might not work on all registrars. You may need to use `www.sauravniraula.com.np` instead.

---

## DNS Nameserver Details

### What are Nameservers?

Nameservers tell the internet where your domain's content is hosted. They route visitors from your domain name to your actual website.

### Vercel's Nameservers

- **Primary**: `ns1.vercel-dns.com`
- **Secondary**: `ns2.vercel-dns.com`
- **Tertiary** (optional): `ns3.vercel-dns.com`

### Popular Domain Registrars & Where to Update DNS

| Registrar          | DNS Location                           |
| ------------------ | -------------------------------------- |
| **GoDaddy**        | Settings → Domains → Manage DNS        |
| **Namecheap**      | Manage Domain → Nameservers            |
| **Bluehost**       | Domains → Manage Domains → Nameservers |
| **Google Domains** | DNS Settings                           |
| **Nixtio**         | Domain Settings → Nameservers          |
| **DreamHost**      | Manage Domains → Nameservers           |

---

## Verification Checklist

After deployment, verify everything works:

- [ ] Site loads at `sauravniraula.com.np`
- [ ] HTTPS shows green lock 🔒
- [ ] Navigation works smoothly
- [ ] Dark/Light mode toggle works
- [ ] Contact form submits (check API in console)
- [ ] Social links work
- [ ] Mobile responsive
- [ ] Animations smooth

---

## Future Updates

After pushing to GitHub, making updates is easy:

```bash
# Make changes to your files
# Then:

git add .
git commit -m "Updated projects and skills"
git push

# Vercel auto-deploys on push! Your site updates automatically.
```

---

## Troubleshooting Deployment

| Issue                          | Solution                                                                                      |
| ------------------------------ | --------------------------------------------------------------------------------------------- |
| **"Build failed"**             | Check build logs in Vercel dashboard. Usually missing dependency: `npm install` locally first |
| **"Domain not connected"**     | Wait 24-48 hours for DNS propagation. Check with [dnschecker.org](https://dnschecker.org)     |
| **"Mixed content error"**      | Ensure all images/APIs use HTTPS                                                              |
| **"Contact form not working"** | Check browser console for API errors. Add RESEND_API_KEY to env vars                          |
| **"White screen"**             | Check Vercel function logs. Might be missing environment variables                            |

---

## Support Resources

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **DNS Checker**: https://dnschecker.org
- **SSL Checker**: https://www.sslchecker.com
