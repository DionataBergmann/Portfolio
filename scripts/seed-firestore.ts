
import 'dotenv/config';
import { setDoc, doc } from 'firebase/firestore';
import { getFirebaseApp, getFirebaseFirestore, isFirebaseConfigured } from '../src/lib/firebase';
import {
  staticExperiences,
  staticEducation,
  staticProjects,
} from '../src/data/staticCareerData';

async function main() {
  if (!isFirebaseConfigured()) {
    console.error('❌ Firebase não configurado. Preencha as variáveis NEXT_PUBLIC_FIREBASE_* no .env');
    process.exit(1);
  }

  getFirebaseApp();
  const db = getFirebaseFirestore();
  if (!db) {
    console.error('❌ Não foi possível conectar ao Firestore.');
    process.exit(1);
  }

  console.log('🌱 Populando Firestore...\n');

  try {
    for (const item of staticExperiences) {
      const { id, ...data } = item;
      await setDoc(doc(db, 'experiences', id), data);
      console.log('  ✓ experiences/', id);
    }
    console.log('');

    for (const item of staticEducation) {
      const { id, ...data } = item;
      await setDoc(doc(db, 'education', id), data);
      console.log('  ✓ education/', id);
    }
    console.log('');

    for (const item of staticProjects) {
      const { id, ...data } = item;
      await setDoc(doc(db, 'projects', id), data);
      console.log('  ✓ projects/', id);
    }

    console.log('\n✅ Firestore populado com sucesso.');
  } catch (err) {
    console.error('❌ Erro ao escrever no Firestore:', err);
    process.exit(1);
  }
}

main();
