import { useState } from 'react';
import api from '../api/axios';

function SimilarCourses({ courseId }) {
  const [suggestions, setSuggestions] = useState(null);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const handleGetSuggestions = async () => {
    if (suggestions) {
      setShow(!show);
      return;
    }

    setLoading(true);
    try {
      const response = await api.post(`/ai/similar-courses/${courseId}`);
      setSuggestions(response.data.data);
      setShow(true);
    } catch (error) {
      alert('Erreur lors de la génération des suggestions');
      console.error('Erreur:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ marginTop: '40px' }}>
      <button
        onClick={handleGetSuggestions}
        disabled={loading}
        style={{
          padding: '12px 24px',
          backgroundColor: loading ? '#95a5a6' : '#f39c12',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: loading ? 'not-allowed' : 'pointer',
          fontSize: '16px',
          fontWeight: 'bold',
          transition: 'background-color 0.3s ease'
        }}
      >
        {loading
          ? '⏳ Chargement...'
          : show
          ? '🔼 Masquer les suggestions'
          : '🤖 Voir les cours similaires (IA)'}
      </button>

      {show && suggestions && (
        <div
          style={{
            marginTop: '20px',
            padding: '25px',
            backgroundColor: '#fff9e6',
            borderRadius: '10px',
            border: '2px solid #f39c12',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            color: '#1a1a1a' // ← FIX: Texte foncé sur fond clair
          }}
        >
          <h3 style={{ 
            color: '#f39c12', 
            marginBottom: '15px',
            fontSize: '20px',
            fontWeight: 'bold'
          }}>
            🎯 Cours similaires recommandés par l'IA :
          </h3>
          <div
            style={{
              whiteSpace: 'pre-wrap',
              lineHeight: '1.8',
              fontSize: '16px',
              color: '#2c3e50', // ← FIX: Texte bien visible
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '8px',
              border: '1px solid #f5e5c1'
            }}
          >
            {suggestions.suggestions}
          </div>

          {/* Section bonus : Liste des cours disponibles */}
          {suggestions.availableCourses && suggestions.availableCourses.length > 0 && (
            <div
              style={{
                marginTop: '20px',
                padding: '15px',
                backgroundColor: 'white',
                borderRadius: '8px',
                border: '1px solid #f5e5c1'
              }}
            >
              <h4
                style={{
                  color: '#2c3e50',
                  marginBottom: '10px',
                  fontSize: '16px',
                  fontWeight: 'bold'
                }}
              >
                📚 Cours disponibles :
              </h4>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: '20px',
                  color: '#555'
                }}
              >
                {suggestions.availableCourses.map((course, index) => (
                  <li
                    key={course.id}
                    style={{
                      marginBottom: '5px',
                      color: '#2c3e50'
                    }}
                  >
                    {index + 1}. {course.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SimilarCourses;