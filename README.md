## Getting Started

1.  npm i
2.  run the development server, whatever suits the needs:

running npm run dev will now run this command: prisma generate && next dev
- go to package.json 
- remove prisma generate &&
- "next dev" should be the only thing if you are not using the database now

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## stacks
- nextjs 14.x appdir
- tailwind
- eslinc
- prisma / mongodb

## serverless function
- vercel.json (I have added 2 examples)

## encryption
- did not implement encryption yet
- ASCII to hex to encrypted base64 string

```tsx
const encryptedData = encrypt(JSON.stringify(contactData));
console.log('Encrypted Data:', encryptedData);

const decryptedData = decrypt(encryptedData);
console.log('Decrypted Data:', JSON.parse(decryptedData));
```

## Examples

### Button Component
```tsx

import { SecurityCheckIcon } from "@/components/icon/icons";
import { Button } from "@/components/ui/button";

<Button variant="default" icon={<SecurityCheckIcon />} iconPosition="left">
  Test
</Button>

```

### Modal component

See button references. Mostly the same.

## context

1. modal context wrapper to open and close modals in /context/

## content

1. 

--
