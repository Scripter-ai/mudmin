"use client"

import React, { useState } from 'react';
import { Button } from '../ui/button';
import { toast } from 'sonner';
import { SmileIcon, Sad01Icon, WorryIcon, Sad02Icon, AngryIcon, SadDizzyIcon } from '../icon/icons';
import { IntakeModalProps } from '@/types';

const IntakeModal: React.FC<IntakeModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comments: '',
    requirements: '',
    expectations: '',
    other: '',
    mood: '',
  });

  const moodOptions = [
    { label: 'Blij', Icon: SmileIcon, value: 'happy', bgColor: 'bg-green-200' },
    { label: 'Bezorgd', Icon: WorryIcon, value: 'worried', bgColor: 'bg-yellow-200' },
    { label: 'Verdrietig', Icon: Sad01Icon, value: 'sad', bgColor: 'bg-blue-200' },
    { label: 'Gestrest', Icon: Sad02Icon, value: 'stressed', bgColor: 'bg-orange-200' },
    { label: 'Boos', Icon: AngryIcon, value: 'angry', bgColor: 'bg-red-200' },
    { label: 'Gemengd', Icon: SadDizzyIcon, value: 'notsure', bgColor: 'bg-gray-200' },
  ];

  if (!isOpen) return null;

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleMoodSelection = (mood: string) => {
    setFormData({ ...formData, mood });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Ensure all fields are filled before making the API call
    if (!formData.name || !formData.email || !formData.phone || !formData.mood) {
      toast.error('Please fill in all required fields.');
      return;
    }

    try {
      // Send POST request to the API
      const response = await fetch('/api/v1/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast.success('Form submitted successfully!');
      } else {
        toast.error(result.error || 'Failed to submit the form.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.');
    }

    onClose();
    setStep(1);
    setFormData({
      name: '',
      email: '',
      phone: '',
      comments: '',
      requirements: '',
      expectations: '',
      other: '',
      mood: '',
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>

      {/* Modal Content */}
      <div className="bg-[#FEFCF6] p-6 rounded-3xl max-w-md w-full z-10 relative">
        <h2 className="text-2xl font-bold mb-4">Intake Formulier</h2>

        {/* Progress Dots */}
        <div className="flex justify-center mb-6 space-x-2">
          {[1, 2, 3, 4, 5, 6].map((stepIndex) => (
            <div
              key={stepIndex}
              className={`${
                step === stepIndex ? 'w-6 bg-[#335343]' : 'w-3 bg-[#457776]'
              } h-3 rounded-full transition-all duration-200`}
            ></div>
          ))}
        </div>

        {/* Form Fields */}
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="space-y-4">
              <label className="block">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-full p-2"
                  placeholder="Vul je naam in"
                />
              </label>
              <div className="flex justify-end">
                <Button type="button" onClick={handleNext} variant="solid">
                  Volgende
                </Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <label className="block">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-full p-2"
                  placeholder="Vul je email in"
                />
              </label>
              <label className="block">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-full p-2"
                  placeholder="Vul je telefoonnummer in"
                />
              </label>
              <div className="flex justify-between">
                <Button type="button" onClick={handleBack} variant="secondary">
                  Terug
                </Button>
                <Button type="button" onClick={handleNext}>
                  Volgende
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <label className="block text-gray-700">Hoe voel je je?</label>
              <div className="grid grid-cols-3 gap-4">
                {moodOptions.map((mood) => (
                  <div
                  key={mood.value}
                  className={`flex flex-col items-center justify-center p-4 rounded-3xl cursor-pointer ${mood.bgColor} ${
                    formData.mood === mood.value ? 'border-2 border-blue-600' : 'border border-gray-300'
                  }`}
                  onClick={() => handleMoodSelection(mood.value)}
                >
                  <mood.Icon className="w-12 h-12 mb-2 text-[#0003123]" />
                  <p className="text-[#0003123]">{mood.label}</p>
                </div>
                ))}
              </div>
              <div className="flex justify-between mt-4">
                <Button type="button" onClick={handleBack} variant="secondary">
                  Terug
                </Button>
                <Button type="button" onClick={handleNext}>
                  Volgende
                </Button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4">
              <label className="block">
                <textarea
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-full p-2"
                  rows={2}
                  placeholder="Wat wil je graag aan ons kwijt?"
                ></textarea>
              </label>
              <div className="flex justify-between">
                <Button type="button" onClick={handleBack} variant="secondary">
                  Terug
                </Button>
                <Button type="button" onClick={handleNext}>
                  Volgende
                </Button>
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="space-y-4">
              <label className="block">
                <textarea
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-full p-2"
                  rows={2}
                  placeholder="Vertel ons wat je nodig hebt."
                ></textarea>
              </label>
              <div className="flex justify-between">
                <Button type="button" onClick={handleBack} variant="secondary">
                  Terug
                </Button>
                <Button type="button" onClick={handleNext}>
                  Volgende
                </Button>
              </div>
            </div>
          )}

          {step === 6 && (
            <div className="space-y-4">
              <label className="block">
                <textarea
                  name="expectations"
                  value={formData.expectations}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-full p-2"
                  rows={2}
                  placeholder="Vertel ons wat je van ons verwacht."
                ></textarea>
              </label>
              <label className="block">
                <textarea
                  name="other"
                  value={formData.other}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-full p-2"
                  rows={2}
                  placeholder="Eventuele overige opmerkingen."
                ></textarea>
              </label>
              <div className="flex justify-between">
                <Button type="button" onClick={handleBack} variant="secondary">
                  Terug
                </Button>
                <Button type="submit">Versturen</Button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default IntakeModal;
