import { render, screen } from '@testing-library/react';
import { About } from '../src/components/About';
import { aboutHeading } from '../src/textConstants';

describe('About Component', () => {
  it('should render the heading and text from constants', () => {
    render(<About />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent(aboutHeading);
    expect(screen.getByText(/I am a Full-Stack Developer/i)).toBeInTheDocument();
  });

  it('should have correct layout classes', () => {
    const { container } = render(<About />);

    const mainDiv = container.firstChild;
    expect(mainDiv).toHaveClass('d-flex');

    const descriptionDiv = container.querySelector('.description');
    expect(descriptionDiv).toBeInTheDocument();
    expect(descriptionDiv).toHaveClass('col-md-6');
  });
});