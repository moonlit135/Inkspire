import React from 'react';
import { Upload, Image, FileText, Eye, BookOpen, PenTool, BookMarked, BookOpenText, BookType } from 'lucide-react';

// Map of icon names to their corresponding components
const iconMap = {
  'BookOpen': BookOpen,
  'FileText': FileText,
  'FileTextIcon': FileText,
  'PenTool': PenTool,
  'BookMarked': BookMarked,
  'BookOpenText': BookOpenText,
  'BookType': BookType
};

const Content = (props) => {
  // Debug log for props
  console.log('Content props:', props);
  
  // Safely destructure with defaults
  const { 
    title = '', 
    content = '', 
    coverPhoto = null, 
    activeTab = 'write', 
    selectedType = null, 
    contentTypes = [],
    onTabChange = () => {},
    onTypeSelect = () => {},
    onFileUpload = () => {},
    onPublish = () => {},
    onTitleChange = () => {},
    onContentChange = () => {}
  } = props || {};
  return (
    <div className="bg-gradient-to-br from-amber-50 to-amber-100/80 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-amber-200/50 transition-all duration-300 hover:shadow-amber-200/40 hover:shadow-lg">
      {/* Tabs */}
      <div className="border-b border-amber-200 flex justify-center mb-8">
        <div className="inline-flex bg-gradient-to-r from-amber-100/70 to-amber-50/70 p-1 rounded-lg shadow-inner backdrop-blur-sm">
          <button
            onClick={() => onTabChange('write')}
            className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
              activeTab === 'write' 
                ? 'bg-white text-amber-900 shadow-sm' 
                : 'text-amber-700 hover:text-amber-900'
            }`}
          >
            <span className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Write
            </span>
          </button>
          <button
            onClick={() => onTabChange('preview')}
            className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
              activeTab === 'preview' 
                ? 'bg-white text-amber-900 shadow-sm' 
                : 'text-amber-700 hover:text-amber-900'
            }`}
          >
            <span className="flex items-center gap-2">
              <Eye className="h-4 w-4" />
              Preview
            </span>
          </button>
        </div>
      </div>

      {activeTab === 'write' ? (
        <div className="space-y-6 mt-6 px-6 pb-6">
          {/* Content Type Selection */}
          <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-sm p-6 border border-amber-100/70 relative overflow-hidden transition-all duration-300 hover:shadow-md hover:border-amber-200/80">
            <h3 className="font-semibold text-lg mb-4 text-amber-900">Content Type</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {contentTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => onTypeSelect(type.id)}
                  className={`relative overflow-hidden p-4 rounded-xl border-2 text-left transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg ${
                    selectedType === type.id
                      ? `${type.color.split(' ')[2]} border-opacity-70 shadow-md`
                      : 'border-opacity-30 hover:border-opacity-50 bg-white/70 backdrop-blur-sm'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${(type.color || '').split(' ').slice(0, 2).join(' ')} ${selectedType === type.id ? 'shadow-inner' : 'shadow-sm'}`}>
                      {React.createElement(iconMap[type.icon] || FileText, { 
                        className: `h-6 w-6 ${type.iconColor || 'text-gray-500'}`, 
                        strokeWidth: 1.5 
                      })}
                    </div>
                    <div className="text-left">
                      <span className={`block font-medium ${selectedType === type.id ? 'text-gray-900' : 'text-gray-800'}`}>
                        {type.label}
                      </span>
                      <span className={`block text-xs mt-1 ${selectedType === type.id ? 'text-gray-600' : 'text-gray-500'}`}>
                        {type.description || 'Create content'}
                      </span>
                    </div>
                  </div>
                  {selectedType === type.id && (
                    <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Title */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-amber-100/50">
            <h3 className="font-semibold text-lg mb-4 text-amber-900">Title</h3>
            <input
              type="text"
              value={title}
              onChange={(e) => onTitleChange(e.target.value)}
              placeholder="Enter your title..."
              className="w-full p-3 bg-white/80 border border-amber-200/80 rounded-lg focus:ring-2 focus:ring-amber-400/50 focus:border-transparent transition-all duration-200 placeholder-amber-400/60 text-amber-900 focus:shadow-sm focus:shadow-amber-200/50"
            />
          </div>

          {/* Content */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-amber-100/50">
            <h3 className="font-semibold text-lg mb-4 text-amber-900">Your Content</h3>
            <textarea
              value={content}
              onChange={(e) => onContentChange(e.target.value)}
              placeholder="Write your content here..."
              rows={8}
              className="w-full p-3 bg-white/80 border border-amber-200/80 rounded-lg focus:ring-2 focus:ring-amber-400/50 focus:border-transparent transition-all duration-200 placeholder-amber-400/60 text-amber-900 focus:shadow-sm focus:shadow-amber-200/50"
            />
          </div>

          {/* Cover Photo */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-amber-100/50">
            <h3 className="font-semibold text-lg mb-4 text-amber-900">Cover Photo</h3>
            <div className="border-2 border-dashed border-amber-200/70 rounded-xl p-8 text-center bg-white/50 backdrop-blur-sm transition-all duration-300 hover:border-amber-300/80 hover:shadow-inner">
              {coverPhoto ? (
                <div className="space-y-4">
                  <img
                    src={URL.createObjectURL(coverPhoto)}
                    alt="Cover preview"
                    className="mx-auto max-h-48 rounded-lg"
                  />
                  <button
                    onClick={() => onFileUpload(null, 'cover')}
                    className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-600/90 text-sm font-medium"
                  >
                    Change Cover
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="mx-auto w-20 h-20 bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl flex items-center justify-center shadow-inner border border-amber-200/50">
                    <Image className="h-8 w-8 text-amber-500" />
                  </div>
                  <div className="space-y-2">
                    <label className="cursor-pointer inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-amber-600 hover:bg-amber-700">
                      <Upload className="h-4 w-4 mr-2" />
                      Upload Cover
                      <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={(e) => onFileUpload(e.target.files[0], 'cover')}
                      />
                    </label>
                    <p className="text-xs text-gray-500">JPG, PNG (Max 5MB)</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 flex gap-4">
            <button
              onClick={() => onPublish('draft')}
              className="flex-1 py-3 px-6 rounded-xl font-medium text-amber-800 bg-amber-100 border border-amber-200 shadow-md transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:bg-amber-50"
            >
              Save as Draft
            </button>
            <button
              onClick={() => onPublish('publish')}
              disabled={!selectedType || !title || !content}
              className={`flex-1 py-3.5 px-6 rounded-xl font-medium text-white shadow-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl ${
                !selectedType || !title || !content
                  ? 'bg-gradient-to-br from-amber-900 via-amber-800 to-amber-950 cursor-not-allowed'
                  : 'bg-gradient-to-br from-amber-900 via-amber-800 to-amber-950 hover:bg-amber-800'
              }`}
            >
              Publish Now
            </button>
          </div>
        </div>
      ) : (
        <div className="p-6">
          <h3 className="flex items-center gap-2 font-semibold text-lg mb-4">
            <Eye className="h-5 w-5" /> Preview
          </h3>
          {title || content || coverPhoto ? (
            <div className="space-y-6">
              {coverPhoto && (
                <img
                  src={URL.createObjectURL(coverPhoto)}
                  alt="Cover"
                  className="w-full h-64 object-cover rounded-lg"
                />
              )}
              {title && <h1 className="text-3xl font-bold text-gray-900">{title}</h1>}
              {content && (
                <div className="prose max-w-none">
                  <p className="whitespace-pre-wrap text-gray-800">{content}</p>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-400">
              <Eye className="mx-auto h-12 w-12 mb-4" />
              <p>Start writing to see your preview</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Content;