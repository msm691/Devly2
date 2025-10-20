import { X, Minus, Plus, ShoppingBag, Copy, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from './ui/sheet';
import type { CartItem } from '../App';
import { useState } from 'react';
import { toast } from 'sonner@2.0.3';

type CartProps = {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
};

export function Cart({ isOpen, onClose, cart, removeFromCart, updateQuantity }: CartProps) {
  const [isCopied, setIsCopied] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleOrder = async () => {
    if (cart.length === 0) {
      toast.error('Panier vide', {
        description: 'Ajoutez des produits avant de commander.'
      });
      return;
    }

    // Generate order text
    const orderText = `🛒 BON DE COMMANDE - DevLy\n\n` +
      cart.map(item => 
        `📦 ${item.name}\n` +
        `   Quantité: ${item.quantity}\n` +
        `   Prix unitaire: ${item.price}€\n` +
        `   Sous-total: ${item.price * item.quantity}€\n`
      ).join('\n') +
      `\n💰 TOTAL: ${total}€\n\n` +
      `📧 Email: contact@devly69.fr\n` +
      `📱 Instagram: @devly69`;

    try {
      // Copy to clipboard
      await navigator.clipboard.writeText(orderText);
      setIsCopied(true);
      
      toast.success('Commande copiée !', {
        description: 'Votre bon de commande a été copié dans le presse-papier. Vous allez être redirigé vers Instagram.',
        duration: 3000
      });

      // Redirect to Instagram after a short delay
      setTimeout(() => {
        window.open('https://instagram.com/devly69', '_blank');
        setIsCopied(false);
      }, 2000);

    } catch (error) {
      toast.error('Erreur', {
        description: 'Impossible de copier le bon de commande. Veuillez réessayer.'
      });
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 text-[#1E5EFF]">
            <ShoppingBag className="w-5 h-5" />
            Votre Panier
          </SheetTitle>
        </SheetHeader>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <ShoppingBag className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="mb-2 text-gray-900">Votre panier est vide</h3>
            <p className="text-gray-500 text-sm mb-6">
              Ajoutez des services depuis notre boutique
            </p>
            <Button onClick={onClose} className="bg-[#1E5EFF] hover:bg-[#0D3FCC]">
              Découvrir nos services
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4">
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1">
                        <h4 className="text-[#1E5EFF]">{item.name}</h4>
                        <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-500"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="w-3 h-3" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="w-3 h-3" />
                        </Button>
                      </div>
                      <span className="text-[#1E5EFF]">{item.price * item.quantity}€</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t pt-4 space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm">
                <div className="flex items-start gap-2">
                  {isCopied ? (
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  ) : (
                    <Copy className="w-5 h-5 text-[#1E5EFF] flex-shrink-0 mt-0.5" />
                  )}
                  <div>
                    <p className="text-[#1E5EFF] mb-1">
                      {isCopied ? (
                        <span className="text-green-600">✓ Bon de commande copié !</span>
                      ) : (
                        'Comment commander ?'
                      )}
                    </p>
                    <p className="text-gray-600 text-xs">
                      En cliquant sur "Commander", votre bon de commande sera copié dans votre presse-papier et vous serez redirigé vers Instagram. Collez le bon de commande dans un message direct à @devly69.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600">Total</span>
                <span className="text-[#1E5EFF]">{total}€</span>
              </div>

              <Button
                onClick={handleOrder}
                className="w-full bg-[#1E5EFF] hover:bg-[#0D3FCC] text-white gap-2"
                size="lg"
              >
                {isCopied ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Redirection vers Instagram...
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-5 h-5" />
                    Commander ({total}€)
                  </>
                )}
              </Button>

              <p className="text-xs text-center text-gray-500">
                Vous pouvez aussi commander par email : contact@devly69.fr
              </p>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
