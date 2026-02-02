# Quick Deployment Checklist

## ✅ Step 1: GitHub Setup (5 minutes)

```bash
# Open PowerShell in your project folder
cd d:\practise\sauravnr

# Initialize Git
git init
git add .
git commit -m "Initial commit: Portfolio website"
git branch -M main
```

**Then create repo at:** https://github.com/new

- Name: `sauravnr`
- Public visibility
- **Don't** initialize with README

```bash
# Replace YOUR_USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR_USERNAME/sauravnr.git
git push -u origin main
```

✅ **GitHub repo is now live!**

---

## ✅ Step 2: Vercel Deployment (3-5 minutes)

1. Go to **https://vercel.com**
2. Sign up with GitHub
3. Click **Add New → Project**
4. Select your **sauravnr** repository
5. Click **Import**
6. Review settings (all should be auto-detected)
7. Click **Deploy**
8. ⏳ Wait 2-5 minutes

✅ **You now have a live URL!** (e.g., `sauravnr-xyz.vercel.app`)

---

## ✅ Step 3: Connect Custom Domain (2 minutes + 24-48 hour wait)

### At Vercel:

1. Dashboard → Your project → **Settings → Domains**
2. Enter: `sauravniraula.com.np`
3. Click **Add**
4. Select **"Using Vercel's Nameservers"** option

### At Your Domain Registrar (GoDaddy, Namecheap, Nixtio, etc.):

Find **DNS Management** or **Nameservers** section and change to:

```
Primary Nameserver:   ns1.vercel-dns.com
Secondary Nameserver: ns2.vercel-dns.com
```

Save and wait 24-48 hours ⏳

---

## 📋 Important Info

Your GitHub username: ********\_\_\_********

Your GitHub repo URL: `https://github.com/YOUR_USERNAME/sauravnr`

Your Vercel URL: `https://sauravnr-YOUR_USERNAME.vercel.app`

Your custom domain: `sauravniraula.com.np`

Your domain registrar: ********\_\_\_********

Your domain registrar login: ********\_\_\_********

---

## 🔗 Useful Links

- **GitHub**: https://github.com
- **Vercel**: https://vercel.com
- **Check DNS**: https://dnschecker.org
- **Check SSL**: https://www.sslchecker.com

---

## 🆘 If Something Goes Wrong

1. **Push to GitHub fails?**
   - Check you have git installed: `git --version`
   - Check your GitHub username is correct
   - Use GitHub token instead of password

2. **Vercel deployment fails?**
   - Check build logs in Vercel dashboard
   - Try running `npm run build` locally

3. **Domain not connecting?**
   - Wait 24-48 hours for DNS propagation
   - Check with https://dnschecker.org
   - Make sure nameservers are correct at registrar

4. **Contact form not working?**
   - Add environment variable to Vercel: `RESEND_API_KEY`
   - Check browser console for errors (F12)
