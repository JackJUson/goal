import ProgressBar from '../components/ProgressBar';
import CountdownTimer from '../components/CountdownTimer';

export default function Home() {
  const currentAmount = 110000;
  const goalAmount = 500000;
  const targetDate = '2027-09-07T00:00:00';

  return (
    <main className='h-screen max-w-5xl mx-auto border p-4'>
      <div className='space-y-4'>
        <h1 className='text-2xl font-bold'>Goal: $500,000</h1>
        <div className='mt-4'>
          <h2 className='text-xl font-semibold mb-2'>Progress</h2>
          <ProgressBar current={currentAmount} goal={goalAmount} />
        </div>
        <div className='mt-4'>
          <h2 className='text-xl font-semibold'>Due: 07/09/2027</h2>
          <h2 className='text-xl font-semibold'>Time remaining from now...</h2>
          <CountdownTimer targetDate={targetDate} />
        </div>
      </div>
    </main>
  );
}
