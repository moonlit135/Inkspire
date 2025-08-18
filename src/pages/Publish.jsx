import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Hero3 from '../components/Hero3';
import Footer from '../components/Footer';
import Content from '../components/Content';
import ErrorBoundary from '../components/ErrorBoundary';

const Publish = () => {
  const { pathname } = useLocation();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [coverPhoto, setCoverPhoto] = useState(null);
  const [activeTab, setActiveTab] = useState('write');
  const [selectedType, setSelectedType] = useState(null);
  const [attachments, setAttachments] = useState([]);

  const contentTypes = [
    { 
      id: 'poem', 
      label: 'Poem', 
      icon: 'PenTool', 
      color: 'from-amber-50 to-amber-100 border-amber-200 text-amber-800',
      iconColor: 'text-amber-500',
      description: 'Express with rhythm'
    },
    { 
      id: 'short_story', 
      label: 'Short Story', 
      icon: 'BookOpen', 
      color: 'from-rose-50 to-rose-100 border-rose-200 text-rose-800',
      iconColor: 'text-rose-500',
      description: 'Tell a brief tale'
    },
    { 
      id: 'article', 
      label: 'Article', 
      icon: 'FileText', 
      color: 'from-emerald-50 to-emerald-100 border-emerald-200 text-emerald-800',
      iconColor: 'text-emerald-500',
      description: 'Share knowledge'
    },
    { 
      id: 'novella', 
      label: 'Novella', 
      icon: 'BookMarked', 
      color: 'from-violet-50 to-violet-100 border-violet-200 text-violet-800',
      iconColor: 'text-violet-500',
      description: 'Longer than a story'
    },
    { 
      id: 'novel', 
      label: 'Novel', 
      icon: 'BookType', 
      color: 'from-fuchsia-50 to-fuchsia-100 border-fuchsia-200 text-fuchsia-800',
      iconColor: 'text-fuchsia-500',
      description: 'Epic narrative'
    },
    { 
      id: 'script', 
      label: 'Script', 
      icon: 'FileText', 
      color: 'from-sky-50 to-sky-100 border-sky-200 text-sky-800',
      iconColor: 'text-sky-500',
      description: 'For performance'
    },
    { 
      id: 'journal', 
      label: 'Journal', 
      icon: 'BookOpenText', 
      color: 'from-amber-50 to-amber-100 border-amber-200 text-amber-800',
      iconColor: 'text-amber-500',
      description: 'Personal reflections'
    },
  ];

  const handleFileUpload = (file, type) => {
    if (type === 'cover') {
      setCoverPhoto(file);
    } else {
      setAttachments([...attachments, file]);
    }
  };

  const handlePublish = async (status = 'published') => {
    if (status === 'published' && (!selectedType || !title || !content)) {
      alert('Please fill in all required fields before publishing');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('type', selectedType);
    formData.append('status', status);
    
    if (coverPhoto) {
      formData.append('cover', coverPhoto);
    }
    
    try {
      // Replace with your actual API endpoint
      const response = await fetch('/api/publish', {
        method: 'POST',
        body: formData,
      });
      
      if (response.ok) {
        const result = await response.json();
        if (status === 'published') {
          // Scroll to top of the page
          window.scrollTo({ top: 0, behavior: 'smooth' });
          
          // Reset form
          setTitle('');
          setContent('');
          setCoverPhoto(null);
          setSelectedType(null);
          setDraft(false);
          
          // Show success message
          alert('Your content has been published successfully!');
          
          // If you want to redirect to home after publishing, uncomment this:
          // navigate('/');
        } else {
          // For draft, just show success message
          alert('Draft saved successfully!');
          setDraft(true);
        }
      } else {
        throw new Error('Failed to publish');
      }
    } catch (error) {
      console.error('Error publishing:', error);
      alert('Failed to publish. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-amber-50">
      <Header />
      <main className="relative">
        {/* Hero Section */}
        <div className="relative z-0">
          <Hero3 />
        </div>
        
        {/* Overlapping Banner */}
        <div className="container mx-auto px-4 relative z-10 -mt-20">
          <div className="max-w-6xl mx-auto">
            <div className="bg-[#f5e9d9] py-8 rounded-xl text-center shadow-lg">
              <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-3 font-['Playfair_Display']">
                <span className="relative inline-block">
                  <span className="relative z-10">Create Your Literary Work</span>
                  <span className="absolute -bottom-2 left-0 w-full h-2 bg-amber-300/40 -rotate-1"></span>
                </span>
              </h1>
              <p className="text-amber-800/90 text-lg font-light">Share your creativity with a community that cherishes the written word</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <ErrorBoundary>
              <Content 
                title={title}
                content={content}
                coverPhoto={coverPhoto}
                activeTab={activeTab}
                selectedType={selectedType}
                contentTypes={contentTypes}
                onTabChange={setActiveTab}
                onTypeSelect={setSelectedType}
                onFileUpload={handleFileUpload}
                onPublish={handlePublish}
                onTitleChange={setTitle}
                onContentChange={setContent}
              />
            </ErrorBoundary>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Publish;